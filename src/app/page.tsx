"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Bed, Briefcase, Crown, Gift, Mail, MessageCircle, Newspaper, Star, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="small"
      sizing="small"
      background="aurora"
      cardStyle="solid-bordered"
      primaryButtonStyle="flat"
      secondaryButtonStyle="layered"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            {name: "Rooms", id: "product"},
            {name: "About", id: "about"},
            {name: "Amenities", id: "feature"},
            {name: "Contact", id: "contact"}
          ]}
          brandName="Azure Vista Hotel"
          button={{
            text: "Book Now",
            href: "https://booking.example.com"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Experience Luxury Redefined"
          description="Discover unparalleled comfort and elegance at Azure Vista Hotel, where every detail is crafted for the discerning traveler"
          tag="Welcome to Paradise"
          tagIcon={Crown}
          buttons={[
            {text: "Book Your Stay", href: "https://booking.example.com"},
            {text: "Explore Amenities", href: "feature"}
          ]}
          imageSrc="https://pixabay.com/get/gb1c81b79dc2b6ecd07b4734e39d352c3f02313e770c911772f0b3d020356b56687f99c971740fed1fd3fa004c1de1875f10e0b5c3eb6e6096dd8e8e50f6655a4_1280.jpg"
          imageAlt="Luxury hotel lobby with elegant interior design"
        />
      </div>
      
      <div id="about" data-section="about">
        <TextAbout
          title="Where timeless elegance meets modern luxury, creating unforgettable experiences for guests who appreciate the finest things in life"
          buttons={[
            {text: "Discover Our Story", href: "https://azure-vista.example.com/about"},
            {text: "View Gallery", href: "https://azure-vista.example.com/gallery"}
          ]}
        />
      </div>
      
      <div id="feature" data-section="feature">
        <FeatureCardSix
          title="World-Class Amenities"
          description="Indulge in our comprehensive range of luxury amenities designed to exceed your expectations"
          tag="Premium Services"
          tagIcon={Award}
          textboxLayout="default"
          features={[
            {
              id: 1,
              title: "Rejuvenating Spa & Wellness",
              description: "Unwind in our award-winning spa featuring therapeutic treatments, steam rooms, and wellness programs designed to rejuvenate your body and soul",
              imageSrc: "https://pixabay.com/get/g4c89f916fde94c6ab40cca3a26afc30981d2be4196a6dbb1813d4ac85767ee45829477934d38b1dd5c55934b7166e686de22422f108710f350ead0d93618e996_1280.jpg",
              imageAlt: "Luxury spa wellness center"
            },
            {
              id: 2,
              title: "Gourmet Dining Experience",
              description: "Savor exquisite cuisine at our signature restaurants, featuring internationally acclaimed chefs and locally sourced ingredients",
              imageSrc: "https://pixabay.com/get/gd6dbcf1bb8230f852f99a857d03e1a0335936ada6557d6beef03ab7e7dffe221fc7014ed0389a5ee2494a37aa580880faa8df652d7e90463426bbd945350e8ed_1280.jpg",
              imageAlt: "Fine dining restaurant elegant ambiance"
            },
            {
              id: 3,
              title: "Infinity Pool & Terrace",
              description: "Relax by our stunning rooftop infinity pool with panoramic city views, complete with poolside service and private cabanas",
              imageSrc: "https://pixabay.com/get/g033ff5985a957f5259527f191eaafd9fe2483755ac230028e9ec4e27c4eeee3fd7d1a8c3c11933ebdaaf9a17375e8d0f24a76341011c96b8a6874abb72f23a57_1280.jpg",
              imageAlt: "Luxury hotel swimming pool with city views"
            },
            {
              id: 4,
              title: "State-of-the-Art Fitness Center",
              description: "Maintain your fitness routine in our fully equipped gymnasium featuring the latest exercise equipment and personal training services",
              imageSrc: "https://pixabay.com/get/g676779c758fa5aea4e7630b45272397a7ee8e626bf6770342a09c9e005aab28f83e768b8338d2674c53f0b3f9d5b1a9374b444a05e5e870b62a16187aeb53a0e_1280.jpg",
              imageAlt: "Modern hotel gym fitness center"
            },
            {
              id: 5,
              title: "24/7 Concierge Service",
              description: "Our dedicated concierge team is available around the clock to assist with reservations, tours, and personalized recommendations",
              imageSrc: "https://pixabay.com/get/g717b6c41e7d45115f2671bad231bc122894a44606e39e37b3d39946cab29fa95959c7cce6b48e84e08fd14ebcb8f7246b914ec72daeaf1df2f400061425757d8_1280.jpg",
              imageAlt: "Professional hotel concierge service"
            },
            {
              id: 6,
              title: "Premium Room Service",
              description: "Enjoy gourmet meals and beverages delivered to your room at any hour, featuring our extensive in-room dining menu",
              imageSrc: "https://pixabay.com/get/g84c54a6dcb4d29d3abb39241b75a9010102f4f7b53108a8c628c9e685edf7ddf2d15e7a85da1b032f336e1cdabc715c483b4fa5b56d74c51965c66d59a234d3b_1280.jpg",
              imageAlt: "Hotel room service elegant breakfast tray"
            }
          ]}
        />
      </div>
      
      <div id="product" data-section="product">
        <ProductCardOne
          title="Luxury Accommodations"
          description="Choose from our selection of elegantly appointed suites and rooms, each designed for comfort and sophistication"
          tag="Our Rooms"
          tagIcon={Bed}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "deluxe-suite",
              name: "Deluxe Suite",
              price: "From $450/night",
              imageSrc: "https://pixabay.com/get/gd2de6de4bc80fa2efef32cca8291ce04a304e877adb4d89d2ad7baa850f25e411e016022c09d4c05369d3da14a96955c98b5618b015c216049d63518a3f0d923_1280.jpg",
              imageAlt: "Luxury deluxe suite with elegant furnishing"
            },
            {
              id: "standard-room",
              name: "Standard Room",
              price: "From $280/night",
              imageSrc: "https://pixabay.com/get/g2dcbe0de220623a583b6771443130a0fe5c1544f0deefa918ff0bf9fe8f471ec5593208e71b5addf33f1d20d41ceaa4777924a09612a5a495fbe3f5e1d31176f_1280.jpg",
              imageAlt: "Comfortable standard hotel room"
            },
            {
              id: "presidential-suite",
              name: "Presidential Suite",
              price: "From $1200/night",
              imageSrc: "https://pixabay.com/get/g2f340e05c7e1367bbfc0bfe191dd051b1734618e9bb1d61b631d7c1b60cb96feaceefc7f8abb352f2903795d6bf67583c5ca1afa378eb274c5abcef20763f06e_1280.jpg",
              imageAlt: "Presidential suite with luxury living room"
            }
          ]}
        />
      </div>
      
      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Accommodation Packages"
          description="Select the perfect package for your stay with our range of thoughtfully curated options"
          tag="Special Offers"
          tagIcon={Gift}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "weekend-escape",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$350/night",
              subtitle: "Perfect for romantic getaways",
              features: [
                "Deluxe room accommodation",
                "Complimentary breakfast",
                "Spa credit included",
                "Late checkout available"
              ]
            },
            {
              id: "business-traveler",
              badge: "Business Choice",
              badgeIcon: Briefcase,
              price: "$420/night",
              subtitle: "Ideal for corporate stays",
              features: [
                "Executive suite upgrade",
                "Business center access",
                "Express laundry service",
                "Airport shuttle included"
              ]
            }
          ]}
        />
      </div>
      
      <div id="metric" data-section="metric">
        <MetricCardTwo
          title="Excellence in Numbers"
          description="Our commitment to exceptional hospitality is reflected in these achievements"
          tag="Our Impact"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          metrics={[
            {
              id: "guest-satisfaction",
              value: "98%",
              description: "Guest Satisfaction Rate"
            },
            {
              id: "years-experience",
              value: "25+",
              description: "Years of Hospitality Excellence"
            },
            {
              id: "awards",
              value: "12",
              description: "International Awards Won"
            },
            {
              id: "guests-served",
              value: "50K+",
              description: "Happy Guests Served"
            }
          ]}
        />
      </div>
      
      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="Guest Experiences"
          description="Hear what our valued guests say about their unforgettable stays with us"
          tag="Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Thompson",
              role: "Travel Blogger",
              testimonial: "Azure Vista Hotel exceeded all my expectations. The attention to detail, impeccable service, and stunning amenities made this the perfect luxury retreat. I can't wait to return!",
              imageSrc: "https://pixabay.com/get/g2770eb3a7b152a03f15d60b7842e1b1b71f5fe82672a133abe496768667771d4e70b9d71f34bb7c67c88ce64f8da96bd75cdccd58641b06f318591dc9bde9bfc_1280.png",
              imageAlt: "Portrait of Sarah Thompson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Business Executive",
              testimonial: "As a frequent business traveler, I appreciate excellence in hospitality. Azure Vista delivers on every front - from the seamless check-in to the world-class dining. Highly recommended.",
              imageSrc: "https://pixabay.com/get/g2f4f11e8da048febd04e580cc0b3a1d70f262f8a70352f0fff242e4ae4b079ad3aab6d84a23c091ae5f10073a3afb4a8b34ac94ccdd5a7f24ff286a176f3a491_1280.jpg",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "The Rodriguez Family",
              role: "Vacation Guests",
              testimonial: "Our family vacation at Azure Vista was magical. The kids loved the pool, we enjoyed the spa, and the concierge helped us discover amazing local attractions. Perfect family destination!",
              imageSrc: "https://pixabay.com/get/gffd8da39cadffb8b341d4e38a1944ea712cb4aa7422fe9723dee42419079220740277f486370aad738ba4b262d85052ebe752e44216349155b12db37a78e1bbe_1280.jpg",
              imageAlt: "Portrait of the Rodriguez Family"
            },
            {
              id: "4",
              name: "Emma & James Wilson",
              role: "Honeymooners",
              testimonial: "Our honeymoon at Azure Vista was absolutely perfect. The romantic ambiance, exceptional service, and breathtaking views created memories we'll treasure forever. Pure luxury!",
              imageSrc: "https://pixabay.com/get/g8d11b5bfe1a31bcaabe24ef0dbce022e43d89e33c89f94134ae1bef600b0370fd6bc80a1ebe7f127ee18de4f6ff5a4dea5e918976f98b14d59337a08b02dffe0_1280.jpg",
              imageAlt: "Portrait of Emma and James Wilson"
            },
            {
              id: "5",
              name: "David Martinez",
              role: "Corporate Guest",
              testimonial: "I've stayed at many luxury hotels worldwide, but Azure Vista stands apart. The combination of elegant accommodations, outstanding cuisine, and personalized service is unmatched.",
              imageSrc: "https://pixabay.com/get/g80c33abdd8785ab102900a30bf4f752b193424cd2dcd092a8a257d5933ff7a8d1debdeb8335a3414cf564b7575094b985864ef5bf792ddb4bab10aa3a6c8c0f8_1280.jpg",
              imageAlt: "Portrait of David Martinez"
            }
          ]}
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Find answers to common questions about your stay with us"
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What is your check-in and check-out policy?",
              content: "Check-in is at 3:00 PM and check-out is at 12:00 PM. Early check-in and late check-out may be available upon request, subject to availability and additional charges."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide complimentary airport shuttle service for our guests. Please contact our concierge at least 24 hours in advance to arrange pickup times."
            },
            {
              id: "3",
              title: "What dining options are available at the hotel?",
              content: "We feature two signature restaurants, a rooftop bar, 24-hour room service, and a café. Our chefs specialize in international cuisine with locally sourced ingredients."
            },
            {
              id: "4",
              title: "Is parking available at the hotel?",
              content: "Yes, we offer both self-parking and valet parking services. Valet parking is complimentary for suite guests, while standard rooms have a nominal daily parking fee."
            },
            {
              id: "5",
              title: "Can I modify or cancel my reservation?",
              content: "Reservations can be modified or cancelled up to 48 hours before arrival without penalty. Cancellations made within 48 hours are subject to a one-night charge."
            }
          ]}
        />
      </div>
      
      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Hotel News & Insights"
          description="Stay updated with the latest from Azure Vista Hotel and discover insider tips for the perfect stay"
          tag="Latest Updates"
          tagIcon={Newspaper}
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              category: "Travel Guide",
              title: "Top 10 Hidden Gems in Our City",
              excerpt: "Discover the secret spots that locals love, from charming cafés to breathtaking viewpoints that most tourists never find",
              imageSrc: "https://pixabay.com/get/gc0641e5eefe71644a2db845c5072cdc5c0b9c2a99249ac7f387d12b93a7304be5808c8201705523e0d11f47f2bf87ef04443bc0f12a64271a84aa9c3c606b32c_1280.jpg",
              imageAlt: "City travel guide destination",
              authorName: "Isabella Martinez",
              authorAvatar: "https://pixabay.com/get/g2770eb3a7b152a03f15d60b7842e1b1b71f5fe82672a133abe496768667771d4e70b9d71f34bb7c67c88ce64f8da96bd75cdccd58641b06f318591dc9bde9bfc_1280.png",
              date: "15 Mar 2025"
            },
            {
              id: "2",
              category: "Culinary",
              title: "Behind the Scenes: Our Chef's Signature Dishes",
              excerpt: "Get an exclusive look into our kitchen as Executive Chef James reveals the inspiration and techniques behind our most beloved menu items",
              imageSrc: "https://pixabay.com/get/g5746b2b450b0e2ab4eac8ddd5b87baf70e25d760dbe2760c8cd2874b286b7a34735f8fe5af1161bd36b7602949b3477daa042112e9a77ca321a5386a4251d31a_1280.jpg",
              imageAlt: "Chef preparing signature dishes",
              authorName: "Chef James Anderson",
              authorAvatar: "https://pixabay.com/get/g2f4f11e8da048febd04e580cc0b3a1d70f262f8a70352f0fff242e4ae4b079ad3aab6d84a23c091ae5f10073a3afb4a8b34ac94ccdd5a7f24ff286a176f3a491_1280.jpg",
              date: "10 Mar 2025"
            },
            {
              id: "3",
              category: "Wellness",
              title: "The Art of Hotel Spa Relaxation",
              excerpt: "Learn how to maximize your spa experience with our wellness director's guide to treatments, meditation spaces, and rejuvenation techniques",
              imageSrc: "https://pixabay.com/get/g48f521f7d5ff983ecdd04406850de4867834bcc0a5a0bb67e91551c524f7f5faab11824a88d37069844a9295d9b4906c3793a591afaa245baea1f73b19d31986_1280.jpg",
              imageAlt: "Spa wellness relaxation experience",
              authorName: "Dr. Sofia Chen",
              authorAvatar: "https://pixabay.com/get/gffd8da39cadffb8b341d4e38a1944ea712cb4aa7422fe9723dee42419079220740277f486370aad738ba4b262d85052ebe752e44216349155b12db37a78e1bbe_1280.jpg",
              date: "5 Mar 2025"
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Stay Connected"
          tagIcon={Mail}
          title="Subscribe for Exclusive Offers"
          description="Be the first to know about special packages, seasonal promotions, and exclusive events at Azure Vista Hotel"
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive promotional emails from Azure Vista Hotel. You can unsubscribe at any time."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Azure Vista Hotel"
          columns={[
            {
              items: [
                {label: "Rooms & Suites", href: "product"},
                {label: "Amenities", href: "feature"},
                {label: "Dining", href: "https://azure-vista.example.com/dining"},
                {label: "Spa & Wellness", href: "https://azure-vista.example.com/spa"}
              ]
            },
            {
              items: [
                {label: "About Us", href: "about"},
                {label: "Gallery", href: "https://azure-vista.example.com/gallery"},
                {label: "Events", href: "https://azure-vista.example.com/events"},
                {label: "Careers", href: "https://azure-vista.example.com/careers"}
              ]
            },
            {
              items: [
                {label: "Contact", href: "contact"},
                {label: "Location", href: "https://azure-vista.example.com/location"},
                {label: "Reservations", href: "https://booking.example.com"},
                {label: "Guest Services", href: "https://azure-vista.example.com/services"}
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}