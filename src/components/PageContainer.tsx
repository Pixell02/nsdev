import { ReactNode } from 'react';
import ParticleBg from './ParticleBg';

const PageContainer = ({ children }: { children: ReactNode }) => (
  <div className='page-container'>
    {children}
    <ParticleBg />
  </div>
);

export default PageContainer;
