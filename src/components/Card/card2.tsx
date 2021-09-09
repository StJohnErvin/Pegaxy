import { withTranslation } from "react-i18next";
import { Container, TextWrapper, Content } from "./styles";
import { Card, Col, Row } from 'antd';
import Img1 from './111.png';
import { SvgIcon } from "../../common/SvgIcon";
import { Slide } from "react-awesome-reveal";





const Card1 = () => {
  return (
    <Card  style={{ width: 180, borderRadius:'1rem' }}
    
    >
 <Slide direction="up">
         <h6 style={{fontSize:'1rem', }}>Pegaxy 2</h6>
      <TextWrapper>
        <Content>
  
          
          
        <SvgIcon src="22.png" width="100%" height="75%"  />
</Content>
<TextWrapper>Legendary NFT 2/ details etc.
</TextWrapper>
      </TextWrapper>
      </Slide>
    </Card>
  );
};

export default Card1;
