import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";
import Card1 from "../Card/card1";
import Card2 from "../Card/card2";
import Card3 from "../Card/card3";
import { TextWrapper } from "../Block/styles";

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  t: any;
}

const MiddleBlock = ({ title, content, button, t }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection>
      <Slide direction="up">
        <Row align="middle">
          <ContentWrapper>
            
              <h6>{t(title)}</h6>
              
              <Content><Row>
      <Col span={8}><Card1/>
      <TextWrapper>Legendary NFT 1
</TextWrapper>
      </Col>
      <Col span={8}><Card2/></Col>
      <Col span={8}><Card3/></Col>
    </Row></Content>
              {button && (
                <Button name="submit" onClick={() => scrollTo("contact")}>
                  {t(button)}
                </Button>
              )}
      
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
