import { withTranslation } from "react-i18next";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Container, TextWrapper, Content, Content2 } from "./styles";

interface Props {
  title: string;
  content: string;
  content2:string;
  t: any;
}

const Block = ({ title, content, content2, t }: Props) => {
  return (
    <Container>
      <h6>{t(title)}</h6>
      <TextWrapper>
      <Content>{t(content, content2)}</Content>
      </TextWrapper>
    </Container>
  );
};

export default withTranslation()(Block);
