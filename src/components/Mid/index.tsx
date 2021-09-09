import { Row, Col, Divider, List, Typography } from "antd";
import {  Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { Slide, Zoom } from "react-awesome-reveal";


import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import { ContentBlockProps } from "../ContentBlock/types";
import { Fade } from "react-awesome-reveal";
import Block from "../Block";

import {
  LeftContentSection,
  // Content,
  // ContentWrapper,
  // ServiceWrapper,
  // MinTitle,
  // MinPara,
} from "./styles";






const LeftContentBlock = ({
  icon,
  title,
  content,
  section,
  t,
  id,
}: ContentBlockProps) => {
  return (
    <div style={{marginLeft:'1rem',   }} >
    <LeftContentSection>
        <Row align="middle" id={id}>
        <Col lg={12} md={11} sm={24} xs={24}>

<Slide direction="left">

<div style={{marginLeft:'1rem', marginTop:'5rem'}}>
 
        <h6 >Introducing Pegaxy</h6>  

        <p style={{marginTop:'10rem !important'}}>Pegaxy is the home of racing in the metaverse, built on Polygon.</p>
        <p>Entering races are free and players earn VIS (Vigoris) token for placing in the top 3.</p>

   </div>


</Slide>

</Col>

<Col lg={12} md={12} sm={24} xs={24}>
      <Fade direction="right">
      <SvgIcon src="33.png" width="100%" height="100%"  />


      </Fade>  </Col>   </Row>
    </LeftContentSection>
    </div>
  );
};

export default withTranslation()(LeftContentBlock);
