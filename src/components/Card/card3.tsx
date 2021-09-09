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
         <h6 style={{fontSize:'1rem', }}>Pegaxy 3</h6>
      <TextWrapper>
        <Content>
  
          
          
        <SvgIcon src="bluegroup.png" width="100%" height="100%"  />
</Content>
<TextWrapper>Legendary NFT 3/ details etc.
</TextWrapper>
      </TextWrapper>
      </Slide>
    </Card>
  );
};

export default Card1;
