import { Row, Col, Divider, List, Typography } from "antd";
import {  Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

import { withTranslation } from "react-i18next";
// import { SvgIcon } from "../../../common/SvgIcon";
import { ContentBlockProps } from "../ContentBlock/types";
import { Fade } from "react-awesome-reveal";
import {
  LeftContentSection,
  // Content,
  // ContentWrapper,
  // ServiceWrapper,
  // MinTitle,
  // MinPara,
} from "./styles";

// const data = [
//   "Blockchain: Polygon (Matic) Chain",
//   "Token Name: Pegaxy Stone",
//   "Token Symbol: PGX",
//   "Token Decimals: 18",
//   "Token Type: ERC-20",
//   "Total Supply: 1,000,000,000 PGX (1B)",
// ];
// const data2 = [
//   "Blockchain: Polygon (Matic) Chain.",
//   "Token Name: Vigorus",
//   "Token Symbol: VIS",
//   "Token Decimals: 18",
//   "Token Type: ERC-20",
//   "Total Supply: Uncapped Utility Token",
// ];
// const data3 = [
//   "Governance token of Pegaxy ecosystem.",
//   "Staking token and reward token from community treasury.",
//   "Stake to Vote",
//   "Stake for Rewards",
//   "Stake to Operate Race Tracks",
//   "Purchasing Pega/NFT's on Marketplace",
//   "Breeding service fee",
// ];
// const data4 = [
//   "Primary reward token for free racing.",
//   "Primary token used for breeding Pega.",
//   "VIS token burnt during breeding",
//   "VIS token minted during racing.",
//   "",
//   "",
//   "",
// ];




const LeftContentBlock = ({
  icon,
  title,
  content,
  section,
  t,
  id,
}: ContentBlockProps) => {
  return (
    <LeftContentSection>
      <Fade direction="left">
        <Row justify="space-between" align="middle" id={id}>

        <h6>Pegaxy Team</h6>  
         
    
          
        </Row>
      </Fade>
    </LeftContentSection>
  );
};

export default withTranslation()(LeftContentBlock);
