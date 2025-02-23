import Container from '@/components/atoms/container/Container';
import Image from '@/components/atoms/image/Image';
import airplaneIcon from '@assets/icons/qna/airplane_icon_white.svg';
import { forwardRef } from 'react';

interface QnaProps {
  isOpen: boolean;
}

const QnaForm = forwardRef<HTMLDivElement, QnaProps>(({ isOpen }, ref) => {
  if (!isOpen) return null;
  return (
    <div ref={ref}>
       <Container
         size={{
           width: '100%',
           height: '560px',
         }}
         maxWidth='400px'
         direction='column'
         style={{
           backgroundColor: 'white',
           borderRadius: '32px',
           boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
           zIndex: 1000,
           justifyContent: 'space-between',
         }}
        justify="center"
        align="flex-start"
      >
        <Container
          padding="50px 30px"
          direction="column"
          gap="16px"
        >
          <Container direction='column'  style={{ width:'100%', gap:'5px' }}>
            <div style={{ fontSize:'26px', fontWeight:'700', color:'#FF861A' }}>APPTIVE 문의하기</div>
            <div style={{ fontSize:'11px', color:'#191B1C' }}>동아리 운영진이 성심성의껏 답변해드립니다.</div>
          </Container>
          <form style={{ width:'100%', height:'85%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap:'16px' }}>
            <Container direction="column" gap="10px">
              <Container direction='row'>
                <label htmlFor="name" style={{ fontSize:'17px', fontWeight:'700' }} >이름</label>
                <div style={{ color:'#FC4F4F' }}>&nbsp;*</div>
              </Container>
              <div style={{ border:'1px solid #B2B6BB', borderRadius:'15px', flexDirection:'row', padding:'5px 15px', boxSizing:'border-box', width:'100%' }}>
                <input type="text" id="name" name='name' placeholder='이름을 입력해주세요.' style={{ border: 'none', backgroundColor:'transparent', outline: 'none', width:'100%' }} required/>
              </div>
            </Container>
            <Container direction="column" gap="10px">
              <Container direction='row'>
                <label htmlFor="email" style={{ fontSize:'17px', fontWeight:'700' }}>이메일</label>
                <div style={{ color:'#FC4F4F' }}>&nbsp;*</div>
              </Container>
              <div style={{ border:'1px solid #B2B6BB', borderRadius:'15px', flexDirection:'row', padding:'5px 10px', boxSizing:'border-box', width:'100%' }}>
                <input type="text" id="email" name='email' placeholder='답변을 받으실 이메일 주소를 입력해주세요.' style={{ border: 'none', backgroundColor:'transparent', outline: 'none', width:'100%' }} required></input>
              </div>
            </Container>
            <Container direction="column" gap="10px">
              <Container direction='row'>
                <label htmlFor="category" style={{ fontSize:'17px', fontWeight:'700' }}>문의 내용 카테고리</label>
                <div style={{ color:'#FC4F4F' }}>&nbsp;*</div>
              </Container>
              <div style={{ border:'1px solid #B2B6BB', borderRadius:'15px', flexDirection:'row', padding:'5px 10px', boxSizing:'border-box', width:'100%' }}>
                <select id="category" name='category' style={{ border: 'none', backgroundColor:'transparent', outline: 'none', width: '100%', height:'100%' }} required>
                  <option value="" style={{ color:'#B2B6BB' }} disabled selected hidden>문의 내용의 카테고리를 골라주세요(더 빠른 답변 받기 가능).</option>
                  <option value="1">동아리 모집</option>
                  <option value="2">동아리 행사 문의</option>
                  <option value="3">기타</option>
                </select>
              </div>
            </Container>
            <Container direction="column" gap="10px" style={{ height:'120px' }}>
              <Container direction='row'>
                <label htmlFor="content"style={{ fontSize:'17px', fontWeight:'700' }} >상세 문의 내용</label>
                <div style={{ color:'#FC4F4F' }}>&nbsp;*</div>
              </Container>
              <div style={{ border:'1px solid #B2B6BB', borderRadius:'15px', flexDirection:'row', padding:'6px 10px', boxSizing:'border-box', width:'100%', height:'100%' }}>
                <textarea id="content" name='content' rows={4} placeholder='상세한 내용을 적어주세요.' style={{ resize:'none', border: 'none', backgroundColor:'transparent', outline: 'none', width:'98%', height:'92%', textAlign:'start' }} required/>
              </div>
            </Container>
            <Container direction="row" justify="center" align='center' style={{ width:'100%' }}>
              <input type='checkbox' id='agree' name='agree' style={{ marginRight:'5px', color:'#FF7F24' }} required/>
              <div style={{ fontSize:'13px' }}>개인정보 수집에 동의합니다.</div>
              <div style={{ color:'#FC4F4F' }}>&nbsp;*</div>
            </Container>
            <Container direction="row" justify="center" style={{ width:'100%' }}>
              <button type="submit" style={{ width:'100%', height:'34px', backgroundColor:'#FF7F24', color:'white', borderRadius:'32px', border:'none', cursor:'pointer' }}>
                <div style={{ gap:'5px', width:'100%', height:'100%', display:'flex', padding:'1px', boxSizing:'border-box', justifyContent:'center', alignItems:'center', fontWeight:'700' }}>
                  <Image style={{ width: '15px' }} src={airplaneIcon} alt="airplane icon" />
                  문의하기
                </div>
              </button>
            </Container>
          </form>
        </Container>
      </Container>
    </div>

  );
});

export default QnaForm;
