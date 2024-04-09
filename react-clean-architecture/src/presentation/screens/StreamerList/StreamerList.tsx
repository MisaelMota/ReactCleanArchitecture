"use client";
import React, { useEffect, useState } from "react";
import { fetchStreamers } from "../../../infraestructure/api/Service/StreamerController/Streamer";
import { useAppSelector } from "../../../application/redux";
import { useDispatch } from "react-redux";
import { Layout, Menu, Button, theme, Card, Typography } from "antd";
import "../../styles/dashboard.css";
import { HiOutlineHome } from "react-icons/hi";
import { GrOrganization } from "react-icons/gr";
import { IoPersonAdd } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export type StreamerListProps = {
  // types...
};

const { Header, Sider, Content, Footer } = Layout;

const StreamerList: React.FC<StreamerListProps> = ({}) => {
  const dispatch = useDispatch();
  const streamers = useAppSelector((state) => state.streamers.streamers);
  const status = useAppSelector((state) => state.streamers.status);
  const error = useAppSelector((state) => state.streamers.error);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchStreamers());
    }
    console.log(status);
  }, [status, dispatch]);

  if (status === "loading") return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Layout className="container">
      <Header className="header">
        <div className="toggle-titleheader-container">
          <GiHamburgerMenu
            className="toggle-icon"
            onClick={() => setCollapsed(!collapsed)}
            size={28}
          />
          <div className="brand"> Cool - dashboard</div>
        </div>
      </Header>

      <Layout>
        <Sider collapsed={collapsed} theme="light" className="sidebar"
        >
          <Menu
            mode="inline"
            items={[
              {
                label: "Home",
                key: "home",
                icon: <HiOutlineHome />,
                children: [
                  {
                    label: "Add profile",
                    key: "AddProfile",
                    icon: <IoPersonAdd />,
                  },
                  {
                    label: "All users",
                    key: "AllUsers",
                    icon: <FaUsers />,
                  },
                ],
              },
              {
                label: "About us",
                key: "AboutUs",
                icon: <GrOrganization />,
              },
            ]}
          ></Menu>
        </Sider>
        <Content className="content">
          <Card>
            <Typography.Title>Sales</Typography.Title>
            <Typography.Paragraph>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu.
            </Typography.Paragraph>
          </Card>
          <Card>
            <Typography.Title>Sales</Typography.Title>
            <Typography.Paragraph>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu.
            </Typography.Paragraph>
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};

export default StreamerList;
