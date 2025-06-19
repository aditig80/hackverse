// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import React from 'react';
// import styled from 'styled-components';
// import { motion } from 'framer-motion';
// import 'swiper/css';
// import { useEffect, useState } from 'react';

// const Container = styled.div`
//   background-color: #1B2123;
//   color: white;
//   font-family: 'Segoe UI', sans-serif;
//   min-height: 100vh;
//   scroll-behaviour: smooth;
// `;

// const Navbar = styled.nav`
//   position: fixed;
//   top: 0;
//   width: 100%;
//   background-color: #1B2123;
//   padding: 1rem 2rem;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   z-index: 999;
//   box-shadow: 0 1px 5px rgba(0,0,0,0.3);
// `;

// const NavTitle = styled.h1`
//   font-size: 1.5rem;
//   font-weight: bold;
// `;

// const NavLinks = styled.ul`
//   list-style: none;
//   display: flex;
//   gap: 1.5rem;

//   li button {
//     background: none;
//     border: none;
//     color: white;
//     font: inherit;
//     cursor: pointer;
//     transition: color 0.3s;
//     padding: 0;
//   }

//   li button:hover {
//     color: #66E8FA;
//   }
// `;


// const HeroSection = styled.section`
// z-index: 1;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   padding-top: 6rem; /* increased from 4rem */
//   box-sizing: border-box;
// `;

// const HeroContent = styled.div`
//   max-width: 600px;
// `;

// const HeroTitle = styled.h1`
//   font-size: 3rem;
//   font-weight: bold;
//   margin-bottom: 1rem;

//   @media (min-width: 768px) {
//     font-size: 4rem;
//   }
// `;

// const HeroDescription = styled.p`
//   font-size: 1.1rem;
//   color: #cccccc;
//   margin-bottom: 2rem;
// `;

// const CTAButton = styled.button`
//   background-color: #66E8FA;
//   color: black;
//   padding: 0.75rem 2rem;
//   border: none;
//   border-radius: 50px;
//   font-weight: 500;
//   font-size: 1rem;
//   cursor: pointer;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: white;
//   }
// `;
// const FeaturesSection = styled.section`
//   background-color: #161A1C;
//   padding: 6rem 2rem;
//   text-align: center;
// `;

// const FeaturesTitle = styled.h2`
//   font-size: 2.5rem;
//   font-weight: bold;
//   margin-bottom: 3rem;
// `;

// const FeatureGrid = styled.div`
//   display: grid;
//   gap: 2rem;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   max-width: 1200px;
//   margin: 0 auto;
// `;

// const FeatureCard = styled.div`
//   background-color: #22282B;
//   padding: 2rem;
//   border-radius: 16px;
//   transition: transform 0.3s;
//   text-align: left;

//   &:hover {
//     transform: translateY(-10px);
//   }
// `;

// const FeatureIcon = styled.div`
//   font-size: 2rem;
//   margin-bottom: 1rem;
//   color: #66E8FA;
// `;

// const FeatureTitle = styled.h3`
//   font-size: 1.25rem;
//   font-weight: 600;
//   margin-bottom: 0.5rem;
// `;

// const FeatureDesc = styled.p`
//   color: #aaa;
//   font-size: 0.95rem;
//   line-height: 1.5;
// `;

// const TrustedSection = styled.section`
//   background-color: #1B2123;
//   padding: 4rem 2rem;
//   text-align: center;
// `;

// const TrustedTitle = styled.h2`
//   font-size: 2rem;
//   font-weight: bold;
//   margin-bottom: 2rem;
// `;

// const LogoImage = styled.img`
//   height: 40px;
//   filter: grayscale(100%);
//   opacity: 0.8;
//   transition: 0.3s ease;

//   &:hover {
//     filter: grayscale(0%);
//     opacity: 1;
//   }
// `;
// const ToolsSection = styled.section`
//   background-color: #161A1C;
//   padding: 6rem 2rem;
//   text-align: center;
// `;

// const ToolsTitle = styled.h2`
//   font-size: 2.5rem;
//   font-weight: bold;
//   margin-bottom: 3rem;
// `;

// const ToolsGrid = styled.div`
//   display: grid;
//   gap: 2rem;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   max-width: 1200px;
//   margin: 0 auto;
// `;

// const ToolCard = styled.div`
//   background-color: #22282B;
//   padding: 2rem;
//   border-radius: 16px;
//   text-align: left;
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: translateY(-8px);
//   }
// `;

// const ToolIcon = styled.div`
//   font-size: 2rem;
//   margin-bottom: 1rem;
//   color: #66E8FA;
// `;

// const ToolTitle = styled.h3`
//   font-size: 1.25rem;
//   font-weight: 600;
//   margin-bottom: 0.5rem;
// `;

// const ToolDesc = styled.p`
//   color: #aaa;
//   font-size: 0.95rem;
//   line-height: 1.5;
// `;


// const WhySection = styled.section`
//   background-color: #1B2123;
//   padding: 6rem 2rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   @media (min-width: 768px) {
//     flex-direction: row;
//     justify-content: space-between;
//   }
// `;

// const WhyText = styled.div`
//   flex: 1;
//   max-width: 600px;
//   padding: 1rem;
// `;

// const WhyTitle = styled.h2`
//   font-size: 2rem;
//   font-weight: bold;
//   margin-bottom: 1.5rem;
// `;

// const WhyPoints = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1.5rem;
// `;

// const WhyPoint = styled.div`
//   display: flex;
//   gap: 1rem;
//   align-items: flex-start;
// `;

// const IconCircle = styled.div`
//   background-color: #66E8FA;
//   color: #000;
//   font-weight: bold;
//   border-radius: 9999px;
//   padding: 0.5rem 0.7rem;
//   font-size: 1.2rem;
// `;

// const WhyDesc = styled.div`
//   h4 {
//     font-size: 1.1rem;
//     margin: 0 0 0.3rem;
//   }

//   p {
//     color: #aaa;
//     margin: 0;
//     font-size: 0.95rem;
//   }
// `;

// const WhyImage = styled.img`
//   flex: 1;
//   max-width: 500px;
//   width: 100%;
//   margin-top: 2rem;
//   border-radius: 12px;

//   @media (min-width: 768px) {
//     margin-top: 0;
//     margin-left: 3rem;
//   }
// `;
// const Footer = styled.footer`
//   background-color: #101416;
//   color: #aaa;
//   padding: 3rem 2rem;
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
//   align-items: center;
//   text-align: center;

//   @media (min-width: 768px) {
//     flex-direction: row;
//     justify-content: space-between;
//     text-align: left;
//   }
// `;

// const FooterLogo = styled.h3`
//   font-size: 1.5rem;
//   font-weight: bold;
//   color: white;
// `;

// const FooterLinks = styled.ul`
//   list-style: none;
//   display: flex;
//   gap: 2rem;
//   padding: 0;
//   margin: 0;

//   li a {
//     text-decoration: none;
//     color: #aaa;
//     transition: color 0.3s;
//   }

//   li a:hover {
//     color: #66E8FA;
//   }
// `;

// const Copyright = styled.div`
//   font-size: 0.875rem;
//   color: #555;
// `;
// const ContactSection = styled.section`
//   background-color: #161A1C;
//   padding: 6rem 2rem;
//   text-align: center;
// `;

// const ContactTitle = styled.h2`
//   font-size: 2.5rem;
//   font-weight: bold;
//   margin-bottom: 2rem;
// `;

// const ContactForm = styled.form`
//   max-width: 600px;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   gap: 1.5rem;
// `;

// const Input = styled.input`
//   padding: 0.75rem 1rem;
//   border-radius: 8px;
//   border: none;
//   background-color: #1B2123;
//   color: white;
//   font-size: 1rem;
//   outline: none;

//   &::placeholder {
//     color: #aaa;
//   }
// `;

// const TextArea = styled.textarea`
//   padding: 0.75rem 1rem;
//   border-radius: 8px;
//   border: none;
//   background-color: #1B2123;
//   color: white;
//   font-size: 1rem;
//   resize: none;
//   outline: none;

//   &::placeholder {
//     color: #aaa;
//   }
// `;

// const SubmitButton = styled.button`
//   background-color: #66E8FA;
//   color: black;
//   padding: 0.75rem 2rem;
//   border: none;
//   border-radius: 50px;
//   font-weight: 600;
//   font-size: 1rem;
//   cursor: pointer;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: white;
//   }
// `;
// const BackToTopButton = styled.button`
//   position: fixed;
//   bottom: 2rem;
//   right: 2rem;
//   background-color: #66E8FA;
//   color: black;
//   border: none;
//   border-radius: 50%;
//   width: 48px;
//   height: 48px;
//   font-size: 1.5rem;
//   cursor: pointer;
//   z-index: 999;
//   box-shadow: 0 4px 10px rgba(0,0,0,0.3);
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: white;
//   }
// `;

// const FadeIn = ({ children, delay = 0 }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 40 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.6, delay }}
//     viewport={{ once: true }}
//   >
//     {children}
//   </motion.div>
// );

// function App() {
//   const [showTopButton, setShowTopButton] = useState(false);

// useEffect(() => {
//   const handleScroll = () => {
//     setShowTopButton(window.scrollY > 300);
//   };
//   window.addEventListener('scroll', handleScroll);
//   return () => window.removeEventListener('scroll', handleScroll);
// }, []);

// const scrollToTop = () => {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// };
// const scrollToSection = (id) => {
//   const element = document.getElementById(id);
//   if (element) {
//     element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//   }
// };
//   return (
//     <Container>
//       <Navbar>
//         <NavTitle>EffortelClone</NavTitle>
//        <NavLinks>
//   <li><button onClick={() => scrollToSection('products')}>Products</button></li>
//   <li><button onClick={() => scrollToSection('solutions')}>Solutions</button></li>
//   <li><button onClick={() => scrollToSection('services')}>Services</button></li>
//   <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
// </NavLinks>
//       </Navbar>

//       {/* Hero Section */}
//       <HeroSection>
//         <FadeIn>
//           <HeroTitle>We Power MVNOs</HeroTitle>
//           <HeroDescription>Effortel helps you build, launch and manage telecom services with ease.</HeroDescription>
//           <CTAButton>Book a Meeting</CTAButton>
//         </FadeIn>
//       </HeroSection>

//       {/* Features Section */}
//       <FeaturesSection id="products">
//         <FadeIn>
//           <FeaturesTitle>Our Core Features</FeaturesTitle>
//         </FadeIn>
//         <FadeIn delay={0.2}>
//           <FeatureGrid>
//             <FeatureCard>
//               <FeatureIcon>📶</FeatureIcon>
//               <FeatureTitle>Real-Time Billing</FeatureTitle>
//               <FeatureDesc>Accurately bill customers for services with real-time updates and flexible billing cycles.</FeatureDesc>
//             </FeatureCard>

//             <FeatureCard>
//               <FeatureIcon>⚡</FeatureIcon>
//               <FeatureTitle>Charging Engine</FeatureTitle>
//               <FeatureDesc>High-performance rating and charging for data, voice, and messaging in real-time.</FeatureDesc>
//             </FeatureCard>

//             <FeatureCard>
//               <FeatureIcon>👥</FeatureIcon>
//               <FeatureTitle>Customer Care Tools</FeatureTitle>
//               <FeatureDesc>Provide your support teams with insights and tools to assist customers effectively.</FeatureDesc>
//             </FeatureCard>

//             <FeatureCard>
//               <FeatureIcon>📈</FeatureIcon>
//               <FeatureTitle>Analytics & Reports</FeatureTitle>
//               <FeatureDesc>View business performance metrics, usage reports, and customer trends.</FeatureDesc>
//             </FeatureCard>
//           </FeatureGrid>
//         </FadeIn>
//       </FeaturesSection>

//       {/* Trusted Section */}
//       <TrustedSection>
//         <FadeIn>
//           <TrustedTitle>Trusted By</TrustedTitle>
//         </FadeIn>
//         <Swiper
//           modules={[Autoplay]}
//           spaceBetween={30}
//           slidesPerView={4}
//           loop={true}
//           autoplay={{ delay: 2000 }}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             768: { slidesPerView: 3 },
//             1024: { slidesPerView: 5 }
//           }}
//         >
//           {[
//             "https://img.icons8.com/?size=100&id=YJfJ0JM5Imsj&format=png&color=000000",
//             "https://img.icons8.com/?size=100&id=OPoc3Wv99Ibz&format=png&color=000000",
//             "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
//             "https://img.icons8.com/?size=100&id=13930&format=png&color=000000",
//             "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
//           ].map((logo, index) => (
//             <SwiperSlide key={index}>
//               <LogoImage src={logo} alt={`Client logo ${index}`} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </TrustedSection>

//       {/* Tools Section */}
//       <ToolsSection>
//         <FadeIn>
//           <ToolsTitle>MVNO Tools for Your Success</ToolsTitle>
//         </FadeIn>
//         <FadeIn delay={0.2}>
//           <ToolsGrid>
//             <ToolCard>
//               <ToolIcon>📊</ToolIcon>
//               <ToolTitle>Analytics Dashboard</ToolTitle>
//               <ToolDesc>Track customer trends, usage stats, and business KPIs in real-time.</ToolDesc>
//             </ToolCard>

//             <ToolCard>
//               <ToolIcon>💬</ToolIcon>
//               <ToolTitle>CRM Platform</ToolTitle>
//               <ToolDesc>Manage customer profiles, queries, and support interactions efficiently.</ToolDesc>
//             </ToolCard>

//             <ToolCard>
//               <ToolIcon>🔌</ToolIcon>
//               <ToolTitle>Real-Time Engine</ToolTitle>
//               <ToolDesc>Instant updates for billing, charging, and service activation.</ToolDesc>
//             </ToolCard>

//             <ToolCard>
//               <ToolIcon>⚙️</ToolIcon>
//               <ToolTitle>Self-Service Portal</ToolTitle>
//               <ToolDesc>Give users access to their usage, recharge options, and more.</ToolDesc>
//             </ToolCard>

//             <ToolCard>
//               <ToolIcon>🔐</ToolIcon>
//               <ToolTitle>Security & Compliance</ToolTitle>
//               <ToolDesc>Robust infrastructure with full regulatory compliance and privacy controls.</ToolDesc>
//             </ToolCard>

//             <ToolCard>
//               <ToolIcon>🌍</ToolIcon>
//               <ToolTitle>Multi-Country Support</ToolTitle>
//               <ToolDesc>Launch and scale MVNO services across borders with local integration.</ToolDesc>
//             </ToolCard>
//           </ToolsGrid>
//         </FadeIn>
//       </ToolsSection>

//       {/* Why Effortel Section */}
//       <WhySection>
//         <FadeIn>
//           <WhyText>
//             <WhyTitle>Why Choose Effortel?</WhyTitle>
//             <WhyPoints>
//               <WhyPoint>
//                 <IconCircle>🚀</IconCircle>
//                 <WhyDesc>
//                   <h4>Faster Time to Market</h4>
//                   <p>Launch MVNOs in weeks, not months, using our ready-to-go platform.</p>
//                 </WhyDesc>
//               </WhyPoint>
//               <WhyPoint>
//                 <IconCircle>🔗</IconCircle>
//                 <WhyDesc>
//                   <h4>End-to-End Integration</h4>
//                   <p>From billing to analytics — everything you need in one place.</p>
//                 </WhyDesc>
//               </WhyPoint>
//               <WhyPoint>
//                 <IconCircle>🧠</IconCircle>
//                 <WhyDesc>
//                   <h4>Expertise That Guides</h4>
//                   <p>Backed by years of experience helping MVNOs scale across the globe.</p>
//                 </WhyDesc>
//               </WhyPoint>
//             </WhyPoints>
//           </WhyText>
//         </FadeIn>

//         <FadeIn delay={0.2}>
//           <WhyImage
//             src="https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=600&q=80"
//             alt="Why Effortel"
//           />
//         </FadeIn>
//       </WhySection>
//       <ContactSection id="contact">
//   <FadeIn>
//     <ContactTitle>Contact Us</ContactTitle>
//     <ContactForm onSubmit={(e) => {
//       e.preventDefault();
//       alert("Message submitted!");
//     }}>
//       <Input type="text" placeholder="Your Name" required />
//       <Input type="email" placeholder="Your Email" required />
//       <TextArea placeholder="Your Message" rows="5" required />
//       <SubmitButton type="submit">Send Message</SubmitButton>
//     </ContactForm>
//   </FadeIn>
// </ContactSection>


//       {/* Footer */}
//       <FadeIn>
//         <Footer>
//           <div>
//             <FooterLogo>EffortelClone</FooterLogo>
//             <Copyright>© {new Date().getFullYear()} EffortelClone. All rights reserved.</Copyright>
//           </div>
//           <FooterLinks>
//             <li><a href="#products">Products</a></li>
//             <li><a href="#solutions">Solutions</a></li>
//             <li><a href="#services">Services</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </FooterLinks>
//         </Footer>
//       </FadeIn>
 
//            {showTopButton && (
//   <BackToTopButton onClick={scrollToTop}>
//     ↑
//   </BackToTopButton>
// )}

//     </Container>
    
//   );
// }

// export default App;
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { useEffect, useState } from 'react';

// ========== STYLED COMPONENTS ==========
const Container = styled.div`
  background-color: #1B2123;
  color: white;
  font-family: 'Inter', 'Segoe UI', sans-serif;
  min-height: 100vh;
  scroll-behavior: smooth;
`;

const Navbar = styled(motion.nav)`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(27, 33, 35, 0.9);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  box-shadow: 0 1px 5px rgba(0,0,0,0.3);
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(27, 33, 35, 1);
  }
`;

const NavTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(to right, #66E8FA, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;

  li button {
    background: none;
    border: none;
    color: white;
    font: inherit;
    cursor: pointer;
    transition: all 0.3s;
    padding: 0.5rem 0;
    position: relative;
    font-weight: 500;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #66E8FA;
      transition: width 0.3s ease;
    }

    &:hover {
      color: #66E8FA;

      &::after {
        width: 100%;
      }
    }
  }
`;

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 100px;  /* ✅ Ensure enough space for fixed navbar */
  box-sizing: border-box;
  overflow: hidden;
`;

const HeroVideo = styled(motion.video)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  opacity: 0.3;
`;

const HeroContent = styled(motion.div)`
  max-width: 800px;
  position: relative;
  z-index: 2;
  padding: 0 2rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  background: linear-gradient(to right, #fff, #66E8FA);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 768px) {
    font-size: 5rem;
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.25rem;
  color: #cccccc;
  margin-bottom: 3rem;
  line-height: 1.6;
`;

const CTAButton = styled(motion.button)`
  background-color: #66E8FA;
  color: black;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(102, 232, 250, 0.3);

  &:hover {
    background-color: white;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(102, 232, 250, 0.4);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transform: translateX(-100%);
  }

  &:hover::after {
    animation: shimmer 1.5s infinite;
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  background: linear-gradient(to right, #ffffff, #66E8FA);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const FeaturesSection = styled.section`
  background-color: #161A1C;
  padding: 6rem 2rem;
  text-align: center;
`;

const FeatureGrid = styled(motion.div)`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled(motion.div)`
  background-color: #22282B;
  padding: 2rem;
  border-radius: 16px;
  text-align: left;
  position: relative;
  overflow: hidden;
  border: 1px solid transparent;
  background-clip: padding-box;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    background: linear-gradient(135deg, #66E8FA, #1B2123);
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover {
    transform: translateY(-10px);
    
    &::before {
      opacity: 1;
    }
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #66E8FA;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
`;

const FeatureDesc = styled.p`
  color: #aaa;
  font-size: 1rem;
  line-height: 1.6;
`;

const TrustedSection = styled.section`
  background-color: #1B2123;
  padding: 4rem 2rem;
  text-align: center;
`;

const LogoImage = styled(motion.img)`
  height: 50px;
  filter: grayscale(100%) brightness(2);
  opacity: 0.7;
  transition: all 0.3s ease;
  padding: 0 1rem;

  &:hover {
    filter: grayscale(0%) brightness(1);
    opacity: 1;
    transform: scale(1.1);
  }
`;

const ToolsSection = styled.section`
  background-color: #161A1C;
  padding: 6rem 2rem;
  text-align: center;
`;

const ToolsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  max-width: 1200px;
  margin: 0 auto;
`;

const ToolCard = styled(FeatureCard)`
  &:hover {
    .tool-icon {
      transform: rotate(10deg) scale(1.1);
    }
  }
`;

const ToolIcon = styled(FeatureIcon)`
  transition: transform 0.3s ease;
`;

const WhySection = styled.section`
  background-color: #1B2123;
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const WhyText = styled.div`
  flex: 1;
  max-width: 600px;
  padding: 1rem;
`;

const WhyPoints = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const WhyPoint = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  background: rgba(34, 40, 43, 0.5);
  padding: 1.5rem;
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(34, 40, 43, 0.8);
    transform: translateX(10px);
  }
`;

const IconCircle = styled.div`
  background-color: #66E8FA;
  color: #000;
  font-weight: bold;
  border-radius: 9999px;
  padding: 0.8rem;
  font-size: 1.2rem;
  min-width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const WhyDesc = styled.div`
  h4 {
    font-size: 1.25rem;
    margin: 0 0 0.5rem;
    color: white;
  }

  p {
    color: #aaa;
    margin: 0;
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const WhyImage = styled(motion.img)`
  flex: 1;
  max-width: 500px;
  width: 100%;
  margin-top: 3rem;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);

  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 3rem;
  }
`;

const StatsSection = styled.section`
  background-color: #161A1C;
  padding: 6rem 2rem;
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const StatCard = styled.div`
  padding: 2rem;
  text-align: center;
`;

const StatNumber = styled(motion.div)`
  font-size: 3.5rem;
  font-weight: 700;
  color: #66E8FA;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.p`
  font-size: 1.1rem;
  color: #ccc;
`;

const ContactSection = styled.section`
  background-color: #161A1C;
  padding: 6rem 2rem;
  text-align: center;
  scroll-margin-top: 100px;
`;

const ContactForm = styled(motion.form)`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled(motion.input)`
  padding: 1rem;
  border-radius: 8px;
  border: none;
  background-color: #1B2123;
  color: white;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    box-shadow: 0 0 0 2px #66E8FA;
  }
`;

const TextArea = styled(motion.textarea)`
  padding: 1rem;
  border-radius: 8px;
  border: none;
  background-color: #1B2123;
  color: white;
  font-size: 1rem;
  resize: none;
  outline: none;
  min-height: 150px;
  transition: all 0.3s;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    box-shadow: 0 0 0 2px #66E8FA;
  }
`;

const SubmitButton = styled(CTAButton)`
  align-self: center;
  margin-top: 1rem;
`;

const Footer = styled.footer`
  background-color: #101416;
  color: #aaa;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
    align-items: flex-start;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 400px;
`;

const FooterLogo = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  background: linear-gradient(to right, #66E8FA, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FooterDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
`;

const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  width: 100%;
`;

const LinkColumn = styled.div`
  h4 {
    color: white;
    font-size: 1.1rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  li a {
    text-decoration: none;
    color: #aaa;
    transition: color 0.3s;
    font-size: 0.95rem;

    &:hover {
      color: #66E8FA;
    }
  }
`;

const Copyright = styled.div`
  font-size: 0.875rem;
  color: #666;
  margin-top: 3rem;
  text-align: center;
  width: 100%;
`;

const BackToTopButton = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: #66E8FA;
  color: black;
  border: none;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 999;
  box-shadow: 0 4px 15px rgba(102, 232, 250, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: white;
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(102, 232, 250, 0.4);
  }
`;
const MVNOFeatureSection = styled.section`
  background-color: #1B2123;
  padding: 6rem 2rem;
  text-align: center;
`;

const MVNOFeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const HoverCard = styled(motion.div)`
  background-color: #22282B;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    transition: opacity 0.5s ease;
  }

  .hover-img {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }

  &:hover {
    .hover-img {
      opacity: 1;
    }

    .default-img {
      opacity: 0;
    }
  }

  .card-content {
    padding: 1.5rem;
    text-align: left;
  }
`;

const MVNOFeatureTitle = styled.h4`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const MVNOFeatureDesc = styled.p`
  color: #aaa;
  font-size: 0.95rem;
`;


// ========== ANIMATIONS ==========
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const scaleUp = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const slideInLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const slideInRight = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// ========== COMPONENTS ==========
const FadeIn = ({ children, delay = 0, variants = fadeInUp }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={variants}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);

const Counter = ({ from = 0, to, duration = 2 }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let start = from;
    const increment = (to - from) / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      setCount(Math.floor(start));
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [from, to, duration]);

  return <span>{count}</span>;
};


// ========== MAIN APP COMPONENT ==========
function App() {
  const [showTopButton, setShowTopButton] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
  const timeout = setTimeout(() => {
    setVideoLoaded(true);
  }, 5000); // fallback in case video fails to load
  return () => clearTimeout(timeout);
}, []);


  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  return (
    
    <Container>
      {/* Navbar */}
      <Navbar
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <NavTitle>Hackverse</NavTitle>
        <NavLinks>
          <li><button onClick={() => scrollToSection('products')}>Products</button></li>
          <li><button onClick={() => scrollToSection('solutions')}>Solutions</button></li>
          <li><button onClick={() => scrollToSection('services')}>Services</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
        </NavLinks>
      </Navbar>

      {/* Hero Section */}
      <HeroSection>
        <AnimatePresence>
          {!videoLoaded && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#1B2123',
                zIndex: 1
              }}
            />
          )}
        </AnimatePresence>
        
        <HeroVideo
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: videoLoaded ? 0.3 : 0 }}
          transition={{ duration: 1 }}
        >
          <source src="https://www.effortel.com/wp-content/uploads/2023/03/Effortel-Hero-Video-1.mp4" type="video/mp4" />
        </HeroVideo>
        
        <HeroContent
          initial="hidden"
          animate={videoLoaded ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <HeroTitle variants={itemVariants}>We Power MVNOs</HeroTitle>
          <HeroDescription variants={itemVariants}>
            Hackverse helps you build, launch and manage telecom services with our cloud-native, 
            fully digital BSS platform designed for MVNOs and digital brands.
          </HeroDescription>
          <CTAButton
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
          >
            Book a Meeting
          </CTAButton>
        </HeroContent>
      </HeroSection>

      {/* Features Section */}
      <FeaturesSection id="products">
        <FadeIn>
          <SectionTitle>Our Core Features</SectionTitle>
        </FadeIn>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <FeatureGrid>
            {[
              {
                icon: "📶",
                title: "Real-Time Billing",
                desc: "Accurately bill customers for services with real-time updates and flexible billing cycles."
              },
              {
                icon: "⚡",
                title: "Charging Engine",
                desc: "High-performance rating and charging for data, voice, and messaging in real-time."
              },
              {
                icon: "👥",
                title: "Customer Care Tools",
                desc: "Provide your support teams with insights and tools to assist customers effectively."
              },
              {
                icon: "📈",
                title: "Analytics & Reports",
                desc: "View business performance metrics, usage reports, and customer trends."
              }
            ].map((feature, index) => (
              <FeatureCard
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDesc>{feature.desc}</FeatureDesc>
              </FeatureCard>
            ))}
          </FeatureGrid>
        </motion.div>
      </FeaturesSection>

      {/* Trusted Section */}
      <TrustedSection>
        <FadeIn>
          <SectionTitle>Trusted By Industry Leaders</SectionTitle>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 }
            }}
          >
            {[
            "https://img.icons8.com/?size=100&id=YJfJ0JM5Imsj&format=png&color=000000",
            "https://img.icons8.com/?size=100&id=OPoc3Wv99Ibz&format=png&color=000000",
            "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
            "https://img.icons8.com/?size=100&id=13930&format=png&color=000000",
            "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
          ].map((logo, index) => (
              <SwiperSlide key={index}>
                <LogoImage src={logo} alt={`Client logo ${index}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </FadeIn>
      </TrustedSection>

      {/* Tools Section */}
      <ToolsSection id="solutions">
        <FadeIn>
          <SectionTitle>MVNO Tools for Your Success</SectionTitle>
        </FadeIn>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <ToolsGrid>
            {[
              {
                icon: "📊",
                title: "Analytics Dashboard",
                desc: "Track customer trends, usage stats, and business KPIs in real-time."
              },
              {
                icon: "💬",
                title: "CRM Platform",
                desc: "Manage customer profiles, queries, and support interactions efficiently."
              },
              {
                icon: "🔌",
                title: "Real-Time Engine",
                desc: "Instant updates for billing, charging, and service activation."
              },
              {
                icon: "⚙️",
                title: "Self-Service Portal",
                desc: "Give users access to their usage, recharge options, and more."
              },
              {
                icon: "🔐",
                title: "Security & Compliance",
                desc: "Robust infrastructure with full regulatory compliance and privacy controls."
              },
              {
                icon: "🌍",
                title: "Multi-Country Support",
                desc: "Launch and scale MVNO services across borders with local integration."
              }
            ].map((tool, index) => (
              <ToolCard
                key={index}
                variants={itemVariants}
              >
                <ToolIcon className="tool-icon">{tool.icon}</ToolIcon>
                <FeatureTitle>{tool.title}</FeatureTitle>
                <FeatureDesc>{tool.desc}</FeatureDesc>
              </ToolCard>
            ))}
          </ToolsGrid>
        </motion.div>
      </ToolsSection>
     
     <MVNOFeatureSection>
  <FadeIn>
    <SectionTitle>Smart MVNO Features</SectionTitle>
  </FadeIn>
  <FadeIn delay={0.2}>
    <MVNOFeatureGrid>
      {[{
        title: "AI-Based Billing",
        desc: "Optimize billing with AI-driven usage pattern recognition.",
        defaultImg: "/images/billing.jpg",
        hoverImg: "/images/billing2.jpg"
      }, {
        title: "Cloud Switching",
        desc: "High-performance switching over decentralized cloud infra.",
        defaultImg: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?fit=crop&w=600",
        hoverImg: "/images/cloud.jpg"
      }, {
        title: "Data Privacy Firewall",
        desc: "Ensure compliance and security for customer data.",
        defaultImg: "/images/privacy.jpg",
        hoverImg: "/images/privacy2.jpg"
      }, {
        title: "Global SIM Provisioning",
        desc: "Deploy eSIM and physical SIMs globally with zero touch.",
        defaultImg: "https://images.unsplash.com/photo-1556155092-490a1ba16284?fit=crop&w=600",
        hoverImg: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?fit=crop&w=600"
      }].map((item, index) => (
        <HoverCard key={index}>
          <img src={item.defaultImg} className="default-img" alt="default" />
          <img src={item.hoverImg} className="hover-img" alt="hover" />
          <div className="card-content">
            <MVNOFeatureTitle>{item.title}</MVNOFeatureTitle>
            <MVNOFeatureDesc>{item.desc}</MVNOFeatureDesc>
          </div>
        </HoverCard>
      ))}
    </MVNOFeatureGrid>
  </FadeIn>
</MVNOFeatureSection>


      {/* Stats Section */}
      <StatsSection>
        <FadeIn>
          <SectionTitle>By the Numbers</SectionTitle>
        </FadeIn>
        <FadeIn delay={0.2}>
          <StatsGrid>
            {[
              { number: 15, label: "Years in Business" },
              { number: 50, label: "Happy Clients" },
              { number: 12, label: "Countries Served" },
              { number: 100, suffix: "+", label: "Successful Launches" }
            ].map((stat, index) => (
              <StatCard key={index}>
                <StatNumber
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <Counter from={0} to={stat.number} />{stat.suffix}
                </StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </StatsGrid>
        </FadeIn>
      </StatsSection>

      {/* Why Section */}
      <WhySection id="services">
        <WhyText>
          <FadeIn>
            <SectionTitle>Why Choose Hackverse?</SectionTitle>
          </FadeIn>
          <WhyPoints
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <WhyPoint
              variants={slideInLeft}
              whileHover={{ x: 5 }}
            >
              <IconCircle>🚀</IconCircle>
              <WhyDesc>
                <h4>Faster Time to Market</h4>
                <p>Launch MVNOs in weeks, not months, using our ready-to-go platform.</p>
              </WhyDesc>
            </WhyPoint>
            <WhyPoint
              variants={slideInLeft}
              transition={{ delay: 0.1 }}
              whileHover={{ x: 5 }}
            >
              <IconCircle>🔗</IconCircle>
              <WhyDesc>
                <h4>End-to-End Integration</h4>
                <p>From billing to analytics — everything you need in one place.</p>
              </WhyDesc>
            </WhyPoint>
            <WhyPoint
              variants={slideInLeft}
              transition={{ delay: 0.2 }}
              whileHover={{ x: 5 }}
            >
              <IconCircle>🧠</IconCircle>
              <WhyDesc>
                <h4>Expertise That Guides</h4>
                <p>Backed by years of experience helping MVNOs scale across the globe.</p>
              </WhyDesc>
            </WhyPoint>
          </WhyPoints>
        </WhyText>

        <FadeIn delay={0.3}>
          <WhyImage
            src="https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=600&q=80"
            alt="Why Effortel"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </FadeIn>
      </WhySection>

      {/* Contact Section */}
      <ContactSection id="contact">
        <FadeIn>
          <SectionTitle>Get In Touch</SectionTitle>
        </FadeIn>
        <ContactForm
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message submitted!");
          }}
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <Input
            type="text"
            placeholder="Your Name"
            required
            variants={itemVariants}
          />
          <Input
            type="email"
            placeholder="Your Email"
            required
            variants={itemVariants}
          />
          <TextArea
            placeholder="Your Message"
            rows="5"
            required
            variants={itemVariants}
          />
          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </SubmitButton>
        </ContactForm>
      </ContactSection>

      {/* Footer */}
      <Footer>
        <FooterContent>
          <FadeIn>
            <FooterLogo>Hackverse</FooterLogo>
            <FooterDescription>
              We power MVNOs with our cloud-native, fully digital BSS platform designed for telecom services.
            </FooterDescription>
          </FadeIn>
        </FooterContent>

        <FadeIn delay={0.1}>
          <FooterLinks>
            <LinkColumn>
              <h4>Products</h4>
              <ul>
                <li><a href="#products">Billing System</a></li>
                <li><a href="#products">Charging Engine</a></li>
                <li><a href="#products">Analytics</a></li>
                <li><a href="#products">Customer Care</a></li>
              </ul>
            </LinkColumn>
            <LinkColumn>
              <h4>Solutions</h4>
              <ul>
                <li><a href="#solutions">MVNO Launch</a></li>
                <li><a href="#solutions">Digital Brand</a></li>
                <li><a href="#solutions">Multi-Country</a></li>
                <li><a href="#solutions">Enterprise</a></li>
              </ul>
            </LinkColumn>
            <LinkColumn>
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </LinkColumn>
          </FooterLinks>
        </FadeIn>

        <Copyright>
          © {new Date().getFullYear()} Hackverse. All rights reserved.
        </Copyright>
      </Footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showTopButton && (
          <BackToTopButton
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ↑
          </BackToTopButton>
        )}
      </AnimatePresence>
    </Container>
  );
}

export default App;