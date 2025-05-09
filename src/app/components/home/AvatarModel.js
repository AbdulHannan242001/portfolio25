"use client";

import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useTransform } from "framer-motion";

const Avatar = ({ url, setActions, scrollProgress }) => {
  const group = useRef();
  const { scene, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, group);
  
  useEffect(() => {
    if (actions) {
      setActions(actions);
      actions["Idle"]?.play();
    }
  }, [actions, setActions]);

  // Camera position interpolation
  const camX = useTransform(scrollProgress, [0, 1], [0, 0]); // Keep X centered
  const camY = useTransform(scrollProgress, [0, 1], [-0.25, -1]); // Move down from head to full body
  const camZ = useTransform(scrollProgress, [0, 1], [0.5, 1]); // Move back from close to far

  // camera Y position (focus on head at start, center at end)
  const lookAtY = useTransform(scrollProgress, [0, 1], [-0.2, -1.4]);

  // Y-position for the avatar group
  const positionY = useTransform(scrollProgress, [0, 1], [-1.7, -2.2]);

  // scale value for avatar group
  const scaleValue = useTransform(scrollProgress, [0, 1], [90, 80]);

  // Rotation Y for 360-degree spin
  const rotationY = useTransform(
    scrollProgress,
    [0, 0.8, 1],
    [0, Math.PI * 2, Math.PI * 2]
  );

  useFrame(({ camera }) => {
    const x = camX.get();
    const y = camY.get();
    const z = camZ.get();
    const lookY = lookAtY.get();

    // Avatar position
    group.current.position.y = positionY.get();

    // Avatar scale
    group.current.scale.set(
      scaleValue.get(),
      scaleValue.get(),
      scaleValue.get()
    );

    // Avatar rotation
    group.current.rotation.y = rotationY.get();

    // Camera position
    camera.position.set(x, y, z);
    camera.lookAt(0, lookY, 0); // Focus on head at start, center at end
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
};

const AvatarModel = ({ scrollProgress }) => {
  const modelUrl = "/3DModels/Avatar.glb";
  const actionsRef = useRef();

  const switchAnimation = (animName) => {
    if (actionsRef.current) {
      Object.values(actionsRef.current).forEach((action) => action.stop());
      actionsRef.current[animName]?.play();
    }
  };

  useEffect(() => {
    const unsubscribe = scrollProgress.on("change", (progress) => {
      if (progress <= 0.9) {
        switchAnimation("Idle");
      } else {
        switchAnimation("Waving");
      }
    });
    return () => unsubscribe();
  }, [scrollProgress]);

  return (
    <main className="h-full flex justify-center items-center w-full">
      <Canvas>
        <Suspense fallback={"loading"}>
          <ambientLight color={"#ffffff"} intensity={1} />
          <directionalLight position={[0, 0, 2]} intensity={10} />
          <spotLight position={[0, 3, 4]} angle={0.6} intensity={10} />
          <pointLight position={[0.5, -0.5, 0]} color={"#1E90FF"} intensity={4} />
          <pointLight position={[-0.5, 0, 0]} color={"#ffffff"} intensity={2} />
          <Avatar
            url={modelUrl}
            setActions={(actions) => (actionsRef.current = actions)}
            scrollProgress={scrollProgress}
          />
        </Suspense>
      </Canvas>
    </main>
  );
};

export default AvatarModel;
