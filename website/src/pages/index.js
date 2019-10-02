import React from 'react';
/* eslint-disable */
import {
  Button as Btn,
  DatePicker,
  Enumeration,
  InputText,
  Label,
  Textarea,
  Toggle,
} from '@buffetjs/core';
import { Fonts } from '@buffetjs/styles';
/* eslint-enable */

import Layout from '../components/layout';
import SEO from '../components/seo';

import Button from '../components/button';
import Header from '../components/header';
import H3 from '../components/h3';
import H4 from '../components/h4';
import Paragraph from '../components/paragraph';

import IconOpenSource from '../images/icon_opensource.svg';
import IconConsistent from '../images/icon_consistent.svg';
import IconCommunity from '../images/icon_community.svg';

const Main = () => {
  const [state, setState] = React.useState({
    enumeration: 'milk',
    textarea: 'This chocolate cake is going to make you crazy!',
  });
  const handleChange = ({ target: { name, value } }) => {
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <main
      className="container"
      style={{
        padding: '142px 0 100px',
        margin: '0 auto',
        maxWidth: 1240,
      }}
    >
      <div className="row home_description">
        <div className="col-lg-4 offset-lg-4 col-xs-12">
          <Paragraph style={{ textAlign: 'center', margin: '0 -36px' }}>
            Buffet.js is Strapi&apos;s open-source component system. Based on
            styled-components, Buffet.js aims to provide a good development
            experience for programmers and facilitates contributions in the
            ecosystem.
          </Paragraph>
        </div>
      </div>
      <div className="row home_consistent">
        <div className="col-lg-8 offset-lg-2 col-xs-12">
          <H3 style={{ marginTop: 124 }}>
            A Consistent Styled-Component Library
          </H3>
        </div>
        <div className="col-lg-4 offset-lg-2 col-xs-12  ">
          <Paragraph style={{ marginTop: 20 }}>
            Buffet.js supplies a series of design principles to help the
            community develop features consistently and efficiently.
          </Paragraph>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 offset-lg-2 col-md-12">
          <div
            className="home_playground"
            style={{
              height: '100%',
              maxHeight: 566,
              padding: 36,
              marginTop: 16,
              borderRadius: 2,
              boxShadow: '0 2px 4px 0 #e3e9f3',
              backgroundColor: '#ffffff',
            }}
          >
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <H4>Inputs</H4>
                <div style={{ marginTop: 30, marginBottom: 10 }}>
                  <Label htmlFor="date">Reservation Date</Label>
                </div>
                <DatePicker
                  name="date"
                  value={state.date || ''}
                  onChange={handleChange}
                />
                <div style={{ marginTop: 30, marginBottom: 10 }}>
                  <Label htmlFor="text">Title of the recipe</Label>
                </div>
                <InputText
                  name="text"
                  type="text"
                  placeholder="Chocolate Cake"
                  value={state.text}
                  onChange={handleChange}
                />
                <div style={{ marginTop: 30, marginBottom: 10 }}>
                  <Label htmlFor="search">
                    Search for your favorite restaurant
                  </Label>
                </div>
                <InputText
                  name="search"
                  type="search"
                  onChange={handleChange}
                  placeholder="Louie Louie, Paris 11"
                  value={state.search || ''}
                />
                <div style={{ marginTop: 30, marginBottom: 10 }}>
                  <Label htmlFor="textarea">Recipe resume</Label>
                </div>
                <Textarea
                  name="textarea"
                  onChange={handleChange}
                  value={state.textarea}
                />
              </div>
              <div className="col-lg-5 offset-lg-1 col-md-12">
                <H4>Buttons - Primary/Secondary</H4>
                <Btn
                  name="save_recipe"
                  onClick={() => {
                    window.confirm('Please confirm');
                  }}
                  style={{ marginTop: 16 }}
                >
                  Save the recipe
                </Btn>
                <Btn
                  name="add_recipe"
                  icon
                  onClick={() => {
                    window.confirm('Please confirm');
                  }}
                  style={{ marginTop: 16 }}
                >
                  Add new recipe
                </Btn>
                <Btn
                  name="delete_recipe"
                  color="delete"
                  icon
                  onClick={() => {
                    window.confirm('Please confirm');
                  }}
                  style={{ marginTop: 16 }}
                >
                  Delete the recipe
                </Btn>
                <Btn
                  name="select_ingredient"
                  color="secondary"
                  onClick={() => {
                    window.confirm('Please confirm');
                  }}
                  style={{ marginTop: 16, marginRight: 2 }}
                >
                  Select an ingredient
                </Btn>
                <Btn
                  name="add_ingredient"
                  color="secondary"
                  icon
                  onClick={() => {
                    window.confirm('Please confirm');
                  }}
                  style={{ marginTop: 16 }}
                >
                  Add new ingredient
                </Btn>
                <H4 style={{ marginTop: 36 }}>Toggle & Enumeration</H4>
                <div style={{ marginTop: 30, marginBottom: 10 }}>
                  <Label htmlFor="enumeration">Enumeration</Label>
                </div>
                <Enumeration
                  name="enumeration"
                  value={state.enumeration}
                  onChange={handleChange}
                  options={[
                    {
                      value: 'flour',
                      label: 'Flour',
                    },
                    {
                      value: 'milk',
                      label: 'Milk',
                    },
                    {
                      value: 'butter',
                      label: 'Butter',
                    },
                  ]}
                />
                <div style={{ marginTop: 30, marginBottom: 10 }}>
                  <Label htmlFor="toggle">Toggle</Label>
                </div>
                <div style={{ marginTop: 6 }}>
                  <Toggle
                    name="toggle"
                    value={state.toggle || false}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row home_main_cta">
        <div
          className="col-lg-12 col-md-12"
          style={{ marginTop: 40, textAlign: 'center' }}
        >
          <Button url="/storybook/" type="main">
            See all components
          </Button>
        </div>
      </div>
      <div className="row home_philosophy">
        <div className="col-lg-8 offset-lg-2 col-xs-12">
          <H3 style={{ marginTop: 124 }}>Our philosophy</H3>
        </div>
        <div className="col-lg-8 offset-lg-2 col-xs-12">
          <div className="row align-items-center" style={{ marginTop: 72 }}>
            <div
              className="col-lg-4 col-xs-12"
              style={{ paddingLeft: 'calc(36px + 15px)' }}
            >
              <img
                style={{ width: 160, height: 160 }}
                src={IconOpenSource}
                alt="Open source icon"
              />
            </div>
            <div
              className="col-lg-8 col-xs-12"
              style={{ paddingLeft: 'calc(36px + 15px)' }}
            >
              <h3
                className="home_philosophy_section_title"
                style={{
                  color: '#0B269C',
                  fontFamily: 'Lato',
                  fontSize: 14,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                }}
              >
                Buffet is open source
              </h3>
              <Paragraph style={{ marginTop: 8 }}>
                We strongly believe in the principles of open-source and shared
                contributions. Contributions to the Buffet are welcomed.
              </Paragraph>
            </div>
          </div>
          <div className="row align-items-center" style={{ marginTop: 84 }}>
            <div className="col-lg-7 col-xs-12 order-2 order-lg-1">
              <h3
                className="home_philosophy_section_title"
                style={{
                  color: '#0B269C',
                  fontFamily: 'Lato',
                  fontSize: 14,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                }}
              >
                Buffet is consistent
              </h3>
              <Paragraph style={{ marginTop: 8 }}>
                Based on styled-components, every Buffet.js component harmonizes
                with the others to ensure a consistent user experience
                throughout the whole journey.
              </Paragraph>
            </div>
            <div
              className="col-lg-5 col-xs-12 order-1 order-lg-2"
              style={{
                paddingRight: 'calc(36px + 15px)',
                textAlign: 'right',
              }}
            >
              <img
                style={{ width: 160, height: 160 }}
                src={IconConsistent}
                alt="Consistent icon"
              />
            </div>
          </div>
          <div className="row align-items-center" style={{ marginTop: 84 }}>
            <div
              className="col-lg-4 col-xs-12"
              style={{ paddingLeft: 'calc(36px + 15px)' }}
            >
              <img
                style={{ width: 160, height: 160 }}
                src={IconCommunity}
                alt="Community icon"
              />
            </div>
            <div
              className="col-lg-8 col-xs-12"
              style={{ paddingLeft: 'calc(36px + 15px)' }}
            >
              <h3
                className="home_philosophy_section_title"
                style={{
                  color: '#0B269C',
                  fontFamily: 'Lato',
                  fontSize: 14,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                }}
              >
                Buffet is for the community
              </h3>
              <Paragraph style={{ marginTop: 8 }}>
                Created with the community in mind, Buffet.js is made by
                developers for developers. It is fully supported by the core
                team and by open-source contributors.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 offset-lg-3 d-none d-lg-block">
          <h2
            style={{
              marginTop: 120,
              textAlign: 'center',
              fontSize: 24,
              fontFamily: 'Lato',
              fontWeight: 900,
              color: '#3b3b3b',
            }}
          >
            Get updates about Buffet.js
          </h2>
          <form
            action="https://strapi.us8.list-manage.com/subscribe/post?u=eda9bfc8dd339b19e11e4b691&amp;id=60e952219b"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
            style={{
              position: 'relative',
              width: '100%',
              height: 50,
              marginTop: 52,
              borderRadius: 25,
              overflow: 'hidden',
            }}
          >
            <input
              id="mce-EMAIL"
              autoComplete="off"
              type="email"
              name="EMAIL"
              placeholder="Enter your email"
              style={{
                width: '100%',
                height: 50,
                padding: '0 36px',
                backgroundColor: '#ffffff',
                border: 'none',
                fontSize: 14,
                fontFamily: 'Lato',
                color: '#3B3B3B',
                outline: 'none',
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  document
                    .getElementById('mc-embedded-subscribe-form')
                    .submit();
                }
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: -5000,
              }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_eda9bfc8dd339b19e11e4b691_60e952219b"
                tabIndex="-1"
                value=""
                readOnly
              />
            </div>
            <Button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                document.getElementById('mc-embedded-subscribe-form').submit();
              }}
              type="secondary"
              target="_blank"
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                cursor: 'pointer',
              }}
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
};

const IndexPage = () => (
  <Layout>
    <SEO
      title="Buffetjs.io"
      keywords={[
        'buffetjs',
        'styled-components',
        'react',
        'design system',
        'component library',
        'open-source design system',
        'javascript component library',
        'strapi design system',
      ]}
    >
      <script
        type="text/javascript"
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
      />
    </SEO>
    <Fonts />
    <Header />
    <Main />
  </Layout>
);

export default IndexPage;
