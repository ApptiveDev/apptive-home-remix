import { useEffect, useRef, useState } from 'react';
import FloatingButton from './FloatingButton';
import QnaForm from './QnaForm';
import Container from '@components/atoms/container/Container';

function Qna() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const formRef = useRef<HTMLDivElement>(null); // QnaForm을 감쌀 ref
  const buttonRef = useRef<HTMLButtonElement>(null); // FloatingButton을 감싸는 ref

  const handleButtonClick = () => {
    setIsFormOpen(!isFormOpen);
  };

  // QnaForm 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // 클릭한 요소가 QnaForm과 FloatingButton 외부일 경우에만 폼을 닫음
      if (
        formRef.current &&
        !formRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsFormOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [formRef, buttonRef]);

  return (
    <Container
      size="full-width"
      direction="column"
      style={{
        position: 'fixed',
        bottom: '10px',
        zIndex: 1000,
      }}
    >
      <Container
        size="full-width"
        justify="flex-end"
      >
        <Container
          align="flex-end"
          direction="column"
          padding="50px 20px"
          size="full-width"
          style={{
            bottom: '10px',
            gap: '10px',
            zIndex: 1000,
          }}
        >
          <QnaForm ref={formRef} isOpen={isFormOpen}/>
          <FloatingButton ref={buttonRef} isOpen={isFormOpen} onClick={handleButtonClick}/>
        </Container>
      </Container>
    </Container>

  );
}

export default Qna;
