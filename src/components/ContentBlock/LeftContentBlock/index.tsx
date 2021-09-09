import { Row, Col, Divider, List, Typography } from "antd";
import { withTranslation } from "react-i18next";
// import { SvgIcon } from "../../../common/SvgIcon";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  LeftContentSection,
  // Content,
  // ContentWrapper,
  // ServiceWrapper,
  // MinTitle,
  // MinPara,
} from "./styles";

const data = [
  "Blockchain: Polygon (Matic) Chain",
  "Token Name: Pegaxy Stone",
  "Token Symbol: PGX",
  "Token Decimals: 18",
  "Token Type: ERC-20",
  "Total Supply: 1,000,000,000 PGX (1B)",
];
const data2 = [
  "Blockchain: Polygon (Matic) Chain.",
  "Token Name: Vigorus",
  "Token Symbol: VIS",
  "Token Decimals: 18",
  "Token Type: ERC-20",
  "Total Supply: Uncapped Utility Token",
];
const data3 = [
  "Governance token of Pegaxy ecosystem.",
  "Staking token and reward token from community treasury.",
  "Stake to Vote",
  "Stake for Rewards",
  "Stake to Operate Race Tracks",
  "Purchasing Pega/NFT's on Marketplace",
  "Breeding service fee",
];
const data4 = [
  "Primary reward token for free racing.",
  "Primary token used for breeding Pega.",
  "VIS token burnt during breeding",
  "VIS token minted during racing.",
  "",
  "",
  "",
];
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
          <Col lg={11} md={11} sm={12} xs={24}>
            <h6>Tokenomics</h6>
            <Divider orientation="left">
              <p>TOKEN ECONOMY</p>
            </Divider>
            <List
              header={
                <div style={{ color: "red", fontSize: "2.2rem" }}>PGX</div>
              }
              footer={<div></div>}
              bordered
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <Typography.Text mark></Typography.Text> {item}
                </List.Item>
              )}
            />{" "}
            <Divider orientation="left">
              <p>TOKEN USE CASES:</p>
            </Divider>
            <List
              header={<div style={{ color: "red", fontSize: "2.2rem" }}></div>}
              footer={<div></div>}
              bordered
              dataSource={data3}
              renderItem={(item) => (
                <List.Item>
                  <Typography.Text mark></Typography.Text> {item}
                </List.Item>
              )}
            />
          </Col>
          <Col lg={11} md={11} sm={12} xs={24}>
            <Divider orientation="left" style={{ marginTop: "5px" }}>
              <p>TOKEN ECONOMY</p>
            </Divider>
            <List
              header={
                <div style={{ color: "red", fontSize: "2.2rem" }}>VIS</div>
              }
              footer={<div></div>}
              bordered
              dataSource={data2}
              renderItem={(item) => (
                <List.Item>
                  <Typography.Text mark></Typography.Text> {item}
                </List.Item>
              )}
            />
            <Divider orientation="left">
              <p>TOKEN USE CASES:</p>
            </Divider>
            <List
              header={<div style={{ color: "red", fontSize: "2.2rem" }}></div>}
              bordered
              dataSource={data4}
              renderItem={(item) => (
                <List.Item>
                  <Typography.Text mark></Typography.Text> {item}
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Fade>
    </LeftContentSection>
  );
};

export default withTranslation()(LeftContentBlock);
