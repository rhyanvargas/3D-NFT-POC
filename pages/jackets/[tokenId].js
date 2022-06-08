
import { useRouter } from 'next/router';
import { Bounds, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, {Suspense } from 'react';
import styled from 'styled-components';

import Jacket from '../../components/jacket'

const Jackets = () => {
  const router = useRouter();
  return (
      <ModalWrapper>
        <CustomizerContainer>
          <Canvas gl={{ preserveDrawingBuffer: true }}>
          <PerspectiveCamera makeDefault position={[0, 1, 0]} />
          <OrbitControls
            zoomSpeed={1}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 3}
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={0.5}
          />
          <Suspense fallback={null}>
            <ambientLight />
            <spotLight
              intensity={0.5}
              angle={0.1}
              penumbra={1}
              position={[10, 15, 10]}
              castShadow
            />
            <Bounds fit clip observe margin={1}>
              <Jacket tokenId={router.query.tokenId} />
            </Bounds>
          </Suspense>
        </Canvas>
        </CustomizerContainer>
      </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  opacity: 1;
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100vh;
  background-color: var(--header-bg-color);
`;
const CustomizerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
`;

export default Jackets;
