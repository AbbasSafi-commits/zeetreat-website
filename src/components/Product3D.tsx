'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Product3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const bottleRef = useRef<THREE.Mesh | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xfaf9f7);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 3;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create bottle geometry
    const bottleGroup = new THREE.Group();

    // Main cylinder (bottle body)
    const bodyGeometry = new THREE.CylinderGeometry(0.6, 0.7, 2.5, 32);
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0xf5f1e8,
      metalness: 0.1,
      roughness: 0.3,
      emissive: 0xfaf9f7,
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 0;
    bottleGroup.add(body);

    // Bottle neck
    const neckGeometry = new THREE.CylinderGeometry(0.3, 0.5, 0.8, 32);
    const neck = new THREE.Mesh(neckGeometry, bodyMaterial);
    neck.position.y = 1.5;
    bottleGroup.add(neck);

    // Bottle cap
    const capGeometry = new THREE.CylinderGeometry(0.35, 0.35, 0.3, 32);
    const capMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      metalness: 0.6,
      roughness: 0.2,
    });
    const cap = new THREE.Mesh(capGeometry, capMaterial);
    cap.position.y = 2.1;
    bottleGroup.add(cap);

    // Gold band on cap
    const bandGeometry = new THREE.CylinderGeometry(0.38, 0.38, 0.1, 32);
    const bandMaterial = new THREE.MeshStandardMaterial({
      color: 0xc9a882,
      metalness: 0.8,
      roughness: 0.1,
    });
    const band = new THREE.Mesh(bandGeometry, bandMaterial);
    band.position.y = 1.95;
    bottleGroup.add(band);

    // Add label canvas texture
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;
    
    // Background
    ctx.fillStyle = '#2d2d2d';
    ctx.fillRect(0, 0, 512, 512);
    
    // Gold gradient for label
    const gradient = ctx.createLinearGradient(0, 0, 512, 512);
    gradient.addColorStop(0, '#d4bfa0');
    gradient.addColorStop(1, '#b8966b');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 100, 512, 312);
    
    // Text
    ctx.fillStyle = '#c9a882';
    ctx.font = 'bold 48px serif';
    ctx.textAlign = 'center';
    ctx.fillText('ZEETREAT', 256, 200);
    
    ctx.fillStyle = '#e0d4be';
    ctx.font = '24px serif';
    ctx.fillText('HERBAL HAIR OIL', 256, 250);
    
    ctx.fillStyle = '#c9a882';
    ctx.font = '16px serif';
    ctx.fillText('200 ml', 256, 320);

    const labelTexture = new THREE.CanvasTexture(canvas);
    labelTexture.magFilter = THREE.LinearFilter;
    labelTexture.minFilter = THREE.LinearMipmapLinearFilter;

    // Apply label to bottle
    const labelMaterial = new THREE.MeshStandardMaterial({
      map: labelTexture,
      metalness: 0.05,
      roughness: 0.4,
    });

    const labelGeometry = new THREE.CylinderGeometry(0.65, 0.75, 1.8, 32);
    const label = new THREE.Mesh(labelGeometry, labelMaterial);
    label.position.y = 0;
    label.position.z = 0.01;
    bottleGroup.add(label);

    scene.add(bottleGroup);
    bottleRef.current = bottleGroup as unknown as THREE.Mesh;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const backLight = new THREE.DirectionalLight(0xffffff, 0.3);
    backLight.position.set(-5, 0, -5);
    scene.add(backLight);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (bottleGroup) {
        // Auto rotation
        bottleGroup.rotation.y += 0.003;
        
        // Mouse influence
        bottleGroup.rotation.y += mouseRef.current.x * 0.3;
        bottleGroup.rotation.x += mouseRef.current.y * 0.2;

        // Floating animation
        bottleGroup.position.y = Math.sin(Date.now() * 0.0005) * 0.2;
      }

      if (camera && renderer) {
        renderer.render(scene, camera);
      }
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !camera || !renderer) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      containerRef.current?.removeChild(renderer.domElement);
      geometry.dispose();
      bodyMaterial.dispose();
      capMaterial.dispose();
      bandMaterial.dispose();
      labelMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-96 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-white to-gray-50"
      style={{ minHeight: '400px' }}
    />
  );
};

export default Product3D;