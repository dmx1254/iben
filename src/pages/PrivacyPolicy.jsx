import React from "react";
import { Container } from "@mui/material";

import { useSelector } from "react-redux";

const PrivacyPolicy = () => {
  const { language } = useSelector((state) => state.language);
  const { ipAddr } = useSelector((state) => state.ipAddr);
  return language === "anglais" ? (
    <Container
      sx={{
        textAlign: "center",
        background: "rgba(244, 244, 244, 0.8)",
        marginTop: "20px",
        borderRadius: "5px",
        paddingBottom: "10px",
      }}
      maxWidth="lg"
    >
      <h1
        style={{
          fontFamily: "Montserrat",
          fontWeight: 400,
          paddingTop: "20px",
          color: "#878484",
        }}
      >
        Privacy Policy
      </h1>
      <p
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <a
          href="http://ibendouma.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.ibendouma.com
        </a>{" "}
        and its affiliated companies (collectively, the 'Company' respect your
        privacy rights and recognize the importance of protecting the Personal
        Information (as defined below) provided by you to us. This Privacy
        Policy describes how the Company collects, stores, and uses the Personal
        Information you provide to us through the Company's web sites and
        through telephone or e-mail communications you may have with us. This
        Privacy Policy also describes the choices available to you regarding the
        Company's use of the Personal Information you provide to us, and the
        actions you can take to access this information and request that the
        Company correct it. You are required to provide Personal Information,
        which may include name, billing address, shipping address, telephone
        number, e-mail address. We use this information so that we may contact
        you about the services and products on the site(s) in which you have
        expressed interest or requested and to facilitate the completion of an
        order.
      </p>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          1-Consent :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          By using the Company's web sites, you acknowledge that you have read
          this Privacy Policy and you consent to the practices described herein
          with respect to the Company's collection, use and disclosure of the
          Personal Information provided by you to us. This is the Company's
          entire and exclusive Privacy Policy and it supersedes any earlier
          version. We reserve the right to change this Privacy Policy in
          accordance with the terms herein at any time, which is why we
          encourage you to visit this page often, review this Privacy Policy
          frequently, and remain informed about any changes to it. If, after
          review, you still have questions about any portion of this Privacy
          Policy, please contact the Company using the contact information
          provided at the bottom of this Privacy Policy.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          2-Information Collection and Use Personal Information :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Personal Information means information that can identify you as a
          specific individual, such as your name, address, phone number, e-mail
          address, or other contact information, whether at work or at home. On
          all Company web sites that collect Personal Information, we
          specifically describe what information is required in order to provide
          you with the product, service, or feature you have requested. We
          collect Personal Information when you contact us, when you register
          with us, when you use our products and services, when you submit an
          order with us, when you visit our web sites or the web sites of
          certain of the Company's partners, and when you enter promotions and
          sweepstakes.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          3-Registration :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          When you register with us on this site, you first complete the on-line
          registration form, which requires you to create a username and
          password. During registration, you are also required to provide
          Personal Information, which may include name, billing address,
          shipping address, telephone number, e-mail address. We use this
          information so that we may contact you about the services and products
          on the site(s) in which you have expressed interest or requested and
          to facilitate the completion of an order.
        </p>
      </div>

      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          4-Promotions, Contests and Sweepstakes :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          From time-to-time, the Company may provide you the opportunity to
          participate in promotions, contests or sweepstakes on its web site(s).
          Such promotions, contests and sweepstakes will also be governed by the
          rules and regulations posted with such promotions, contests and
          sweepstakes. If you participate, you will be required to register with
          the Company, which will require you to provide certain Personal
          Information. Participation in these promotions, contests and
          sweepstakes is completely voluntary and you therefore have a choice
          whether or not to register and provide your Personal Information. The
          requested information typically includes contact information, such as
          name, shipping address, e-mail address, and telephone number. We will
          use this information to notify winners and award prizes. Additionally,
          during your registration process you may opt-in to receiving
          additional related communications from us. If you decide to opt-in, we
          will use the information provided to send you communications described
          throughout this Privacy Policy.
        </p>
      </div>

      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          5-Other Information Collected :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Some information may be collected automatically every time you visit
          the Company's web sites, such as cookies and computer information. In
          addition, information may be collected from other independent,
          third-party sources. We also collect information about which pages you
          visit within this site. This site visitation data is identified only
          by a unique URL.
        </p>
      </div>

      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          6-Newsletters :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          If you wish to subscribe to the Company's newsletter(s), we will use
          your name and email address to send the newsletters to you.
        </p>
      </div>

      <div
        id="cookie-privacy"
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          7-Cookies :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          The Company uses both session ID cookies and persistent cookies as
          part of its interaction with your browser. A cookie is an alphanumeric
          identifier (a file) that the Company's web sites transfer to your
          computer's hard drive through a web browser to enable its systems to
          recognize your browser for record-keeping purposes. A session ID
          cookie expires when you close your browser, while a persistent cookie
          remains on your hard drive for an extended period of time. We use
          session ID cookies to make it easier for you to navigate our web
          sites. We use persistent cookies to identify and track which sections
          of its web site you most often visit. We also use persistent cookies
          in areas of its web site you must register, and you are able to
          customize the information you see, so that you don't have to enter
          your preferences more than once. By configuring the options in your
          browser, you may control how cookies are processed by your system.
          However, if you decline the use of cookies you may not be able to use
          certain features on this site and you may be required to reenter the
          information required to complete an order during new or interrupted
          browser sessions. Some of the Company's business partners (e.g.,
          advertisers) use cookies on the site. We have no access to or control
          over these cookies (see 'Third Party Advertising' and 'Third Party
          Cookies' below). Accordingly, this Privacy Policy covers the use of
          cookies by the Company only and does not cover the use of cookies by
          any advertisers.
        </p>
      </div>

      <div
        id="cookie-privacy"
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          8-Log Files :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          As is true of most web sites, the Company gathers certain information
          automatically and stores it in log files. This information includes
          internet protocol (IP) addresses, browser type, internet services
          provider (ISP), referring/exit pages, operating system, date/time
          stamp, and clickstream data. The Company uses this information to
          analyze trends, to screen for fraud, to administer the Company's
          sites, to track users' movements around the web sites and to gather
          demographic information about the Company's user base as a whole.
        </p>
      </div>

      <div
        id="cookie-privacy"
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          9-Clear Gifs (Web Beacons/Web Bugs) :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Clear Gifs (Web Beacons/Web Bugs) The Company employs a software
          technology called clear gifs (a.k.a. Web Beacons/Web Bugs), that helps
          it better manage content on its web sites by informing the Company
          what content is effective. Clear gifs are tiny graphics with a unique
          identifier, similar in function to cookies, and are used to track the
          online movements of web users. In contrast to cookies, which are
          stored on a user's computer hard drive, clear gifs are embedded
          invisibly on web pages and are about the size of the period at the end
          of this sentence. The Company uses clear gifs in its HTML-based emails
          to inform itself of which emails have been opened by you. This allows
          the Company to gauge the effectiveness of certain communications and
          the effectiveness of the Company's marketing campaigns. If you would
          like to opt-out of these emails, please see the 'Choice and Opt-Out'
          section of this Privacy Policy.
        </p>
      </div>

      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          10-Information Third Party Sources :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          To improve services and enhance personalization, the Company may
          periodically obtain information about your other independent third
          party sources and add it to our account information. For example, when
          you visit a site on which the Company advertises, and click through
          such advertisement, the Company may place cookies on your computer.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          11-Third Party Advertising :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          The ads that appear from time to time on the Company's web sites are
          delivered to you by a third party. Information about your visits to
          the sites, such as number of times you have viewed an ad (but not your
          name, address or other Personal Information), is used to serve ads to
          you.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          12-Special Offers and Updates :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          The Company collects information about which sections of its web site
          you visit most often, so that it can send you our newsletter and
          information about relevant offers, promotions, contests, and
          sweepstakes which may interest you. Accordingly, the Company will
          occasionally send you information on products, services, special
          deals, promotions and sweepstakes.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          13-Service-related Announcements :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          The Company may, but is not obligated, to send you strictly
          service-related announcements or rare occasions when it is necessary
          to do so. For example, if our service is temporarily suspended for
          maintenance, we might send you an email. Generally, you may not
          opt-out of these communications since they are not promotional in
          nature. If you do not wish to receive them, you may have the option to
          deactivate your account.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          14-Research :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          We also collect information for research purposes and to provide
          anonymous reporting for internal and external clients. The Company
          uses the information collected for its own internal marketing and
          demographic studies to improve customer service and product offerings.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          15-Customer Service :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          We will communicate with you in response to your inquiries, to provide
          the products and services you request, and to manage your account. We
          will communicate with you by email, live chat or telephone, in
          accordance with your wishes.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          16-Preferences :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          The Company stores information that it collects through cookies, log
          files, and third party sources to create a profile of your
          preferences, in order to improve the content of the Company's web site
          for you.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          17-Information Sharing and Disclosure :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          The Company does not sell or rent any of the information collected to
          third parties for any purposes, but it shares information with third
          parties as described below.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          18-Service Providers :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          The Company discloses the information collected to external service
          providers necessary to facilitate the following outsourced operations:
          address verification, fraud screening and order shipping.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          19-Other Third Parties :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          The Company shares information, including Personal Information, with
          trusted third-party partners so that customers can receive information
          about third-party offers and promotions that may interest them. These
          third-party partners do not have independent rights to share the
          information provided to them by us.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          20-Compliance with Legal Authorities :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          As required by law, and to enforce customers?or the Company's legal
          rights, and to comply with local, state, federal and international
          law, the Company may disclose information to law enforcement agencies.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          21-Choice and Opt-Out :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          If you no longer wish to receive the Company's promotional
          communications, you may 'opt-out' of receiving them by following the
          instructions included in each communication or by emailing the Company
          at <a href="mailto:sup@ibendouma.com">sup@ibendouma.com</a>
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          22-Links to Other Websites :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          There are several places throughout the Company's web sites that may
          link you to other websites that do not operate under this Privacy
          Policy. When you click through to these websites, this Privacy Policy
          no longer applies. The Company recommends that you examine the privacy
          statements for all third party websites to understand their procedures
          for collecting, using, and disclosing your Personal Information.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          23-Storage and Security of Personal Information Storage :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          The Company stores the information it collects on computers located in
          a controlled, secure facility protected physical or electronic
          unauthorized access, use, or disclosure.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          24-Security :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          The Company protects the privacy and integrity of the information it
          collects by employing appropriate administrative protocols, technical
          safeguards, and physical security controls designed to limit access,
          detect and prevent the unauthorized access, improper disclosure,
          alteration, or destruction of the information under its control. The
          Company transmits the information used by its external service
          providers for the specific outsourced operations listed above across
          public and private networks via recognized encryption technologies,
          such as by using Secure Sockets layer (SSL) software, which encrypts
          the information you input. Although the Company follows the procedures
          set forth above to protect the Personal Information submitted to the
          Company, no method of transmission over the Internet, or method of
          electronic storage, is 100% secure. Thus, while the Company strives to
          use commercially acceptable means to protect your Personal
          Information, the Company cannot guarantee its absolute security. If
          you have any questions about the Company's security on its web sites,
          please feel free to send us an email at{" "}
          <a href="mailto:sup@ibendouma.com">sup@ibendouma.com</a>
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          25-Internet Fraud :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          The Company has a ZERO TOLERANCE policy for Internet fraud or any
          attempt to access or acquire customer or other information on its web
          sites via illegal or surreptitious means. The Company works with
          local, national, and international fraud investigation agencies and
          employs a variety of electronic and other means to discourage, detect,
          and intercept fraudulent activities. The Company aggressively
          prosecutes, to the fullest extent of the law, those perpetrators
          apprehended conducting fraudulent activities on its web site. Agencies
          with which the Company cooperates are: state and local police
          authorities, the United States Federal Bureau of Investigation, US and
          International Customs Agencies, and Interpol.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          26-International Transfer :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Personal Information collected by the Company may be stored and
          processed in the United States or any other country in which the
          Company or its affiliates, subsidiaries or agents maintain facilities,
          and by using the Company's web sites, you consent to any such transfer
          of Personal Information outside of your country.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          27-Children :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          The Company's sites are not intended for or directed to persons under
          the age of 13. The Company does not buy or sell products or services
          or to children. Any person who provides their information to the
          Company through the Company's web sites represents to the Company that
          they are 13 years of age or older.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          28-Changes to this Statement :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          The Company will time-to-time update this Privacy Policy, each time
          revising the last updated date at the top of the Privacy Policy and
          indicate the nature of the revisions within the statement. The Company
          will notify customers of material changes to this statement by e-mail
          or by placing prominent notice on its web site.
        </p>
      </div>

      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          29-Contact Information :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          You may contact the Company by e-mail at{" "}
          <a href="mailto:sup@ibendouma.com">sup@ibendouma.com</a>
        </p>
      </div>
    </Container>
  ) : language === "espagnol" ? (
    <Container
      sx={{
        textAlign: "center",
        background: "rgba(244, 244, 244, 0.8)",
        marginTop: "20px",
        borderRadius: "5px",
        paddingBottom: "10px",
      }}
      maxWidth="lg"
    >
      <h1
        style={{
          fontFamily: "Montserrat",
          fontWeight: 400,
          paddingTop: "20px",
          color: "#878484",
        }}
      >
        Política de privacidad
      </h1>
      <p
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        Este sitio es propiedad de la empresa – JBIK INTERNATIONAL CO., LIMITED
        Registered address :ROOMS 1318-20,HOLLYWOODPLAZA, 610 NATHAN ROAD,
        MONGKOK KOWLOON . IBENDOUMA LIMITED (payment processing for Cardpay).
        Registered address:59 St Martin’s Lane, Suite 8, WC2N 4JS, London,
        United Kingdom. Estamos comprometidos a respetar su derecho a la
        privacidad y a reconocer la importancia de proteger la información
        personal que usted proporciona a a nosotros. Esta Política de privacidad
        describe cómo la Compañía recopila y utiliza información personal que
        nos proporciona a través de los sitios web y por teléfono o correo
        electrónico. Esta Política de Privacidad también describe las opciones
        disponible para usted con respecto al uso de la información personal que
        proporciona a nosotros, y las acciones que puede tomar para acceder a
        esa información y solicitar que la Compañía lo corrija o elimine.
      </p>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          1-Consentir :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Al utilizar los sitios web de la Compañía, usted reconoce que ha leído
          esta Política de privacidad y acepta las prácticas descritas en el
          momento con respecto a la recopilación, uso, almacenamiento,
          distribución y divulgación de los datos personales proporcionados por
          usted a nosotros. Reservamos el derecho a cambiar esta Política de
          privacidad de acuerdo con el presente términos en cualquier momento,
          por lo que le animamos a visitar esta página a menudo, revise esta
          Política de privacidad con frecuencia y manténgase informado sobre
          cualquier cambio en el mismo. Si, después de la revisión, todavía
          tiene preguntas sobre cualquier término de esta Política de
          privacidad, comuníquese con la Compañía utilizando los datos de
          contacto proporcionados al final de dichos términos.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          2-Recopilación y uso de datos personales Datos personales :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Información que puede identificarlo como individuo, como su nombre,
          dirección, número de teléfono, dirección de correo electrónico u otra
          información, es estrictamente confidencial. En cada uno de los sitios
          web de la Compañía que recopilan información personal, los datos
          almacenados son necesarios para el correcto funcionamiento del
          servicio o funcionalidad solicitada. Accedemos información personal
          cuando se registra con nosotros, se comunica con nosotros, cuando
          envía un pedido con nosotros, y cuando visita nuestros sitios web o
          los sitios web de algunos de nuestros socios.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          3-Registro :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Cuando se registra con nosotros en este sitio, primero completa el
          formulario en línea formulario de registro, que requiere que cree un
          nombre de usuario y clave. Durante el registro, también debe
          proporcionar Datos personales, que pueden incluir nombre, dirección de
          facturación, teléfono número, dirección de correo electrónico y los
          últimos 4 dígitos y fecha de vencimiento de la tarjeta de crédito.
          Utilizamos estos datos personales para que podamos contactarlo. sobre
          los servicios y productos del sitio web que le interesan y para
          facilitar la realización de un pedido.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          4-Galletas :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          La Compañía utiliza cookies de identificación de sesión y cookies
          persistentes como parte de su interacción con su navegador. Una cookie
          es un alfanumérico identificador (un archivo) que los sitios web de la
          Compañía transfieren a su disco duro de la computadora a través de un
          navegador web para permitir que sus sistemas reconocer su navegador
          con fines de mantenimiento de registros. Una identificación de sesión
          La cookie caduca cuando cierra su navegador, mientras que una cookie
          persistente permanece en su disco duro durante un período prolongado
          de tiempo. Entender que utilizamos cookies para facilitarte la
          navegación a través de nuestros sitios web y para ofrecerle el
          servicio más agradable. por como tu configurar su navegador, puede
          controlar cómo las cookies son procesadas por tu sistema. Sin embargo,
          si rechaza el uso de cookies, puede encontrar algunos retrasos y no
          poder usar ciertas funciones en este sitio y es posible que deba
          volver a ingresar la información requerida para completar un pedido
          durante sesiones de navegador nuevas o interrumpidas.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          5-Servicio al Cliente :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Nos comunicaremos con usted en respuesta a sus demandas, para
          brindarle los productos y servicios que solicita, y para administrar
          su cuenta. Nosotros se comunicará con usted por correo electrónico,
          chat en vivo o teléfono, en de acuerdo con sus deseos.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          6- Intercambio y divulgación de información. :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          La Compañía no planea vender o alquilar ninguna de la información
          recopilada a terceros para cualquier propósito, pero comparte la
          información con terceros como se describe a continuación:
          <br></br>
          <br></br> Instituciones financieras, proveedores de servicios de pago
          que en conexión con nuestros servicios de pago; personas e
          instituciones que se les permite solicitar sus datos personales bajo
          las leyes aplicables y reglamentos a través de una orden judicial u
          otro proceso legal, como órganos de control, reguladores o encargados
          de hacer cumplir la ley...
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          7-Cambiar a esta declaración :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          La Compañía actualizará esta Política de privacidad de vez en cuando,
          cada tiempo revisando la última fecha actualizada en la parte superior
          de la Política de Privacidad e indicando la naturaleza de las
          revisiones en la declaración. los La empresa notificará a los clientes
          de los cambios importantes en esta declaración por colocando un aviso
          destacado en su sitio web...
        </p>
      </div>
    </Container>
  ) : (
    <Container
      sx={{
        textAlign: "center",
        background: "rgba(244, 244, 244, 0.8)",
        marginTop: "20px",
        borderRadius: "5px",
        paddingBottom: "10px",
      }}
      maxWidth="lg"
    >
      <h1
        style={{
          fontFamily: "Montserrat",
          fontWeight: 400,
          paddingTop: "20px",
          color: "#878484",
        }}
      >
        POLITIQUE DE CONFIDENTIALITÉ
      </h1>
      <p
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <a
          href="http://ibendouma.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.ibendouma.com
        </a>{" "}
        ( la «société» à respecter votre droit à la vie privée et de reconnaître
        l'importance de protéger les renseignements personnels (tels que définis
        ci-dessous) que vous avez fournis pour nous. Cette politique de
        confidentialité décrit la façon dont la société perçoit , les magasins,
        et utilise les informations personnelles que vous nous fournissez par le
        biais de la Société des sites Web et par téléphone ou e-mail que vous
        nous avez donné. Cette politique de confidentialité décrit également les
        choix qui s'offrent à vous au sujet de la Société de l'utilisation des
        renseignements personnels vous nous fournir, et les actions que vous
        pouvez prendre pour accéder à cette information et demande que la
        société de corriger ou supprimer.
      </p>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          1-Consentement :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          En utilisant les sites Web de l'entreprise, vous reconnaissez que vous
          avez lu cette politique de confidentialité et vous consentez aux
          pratiques décrites ci-après à l'égard de la société collecte,
          l'utilisation et la divulgation de renseignements personnels fournis
          par vous à nous. C'est la société tout entière et exclusive de
          confidentialité, et il annule et remplace toute version précédente.
          Nous nous réservons le droit de modifier cette politique de
          confidentialité, conformément aux termes du présent document à tout
          moment, et c'est pourquoi nous vous encourageons à visiter cette page
          souvent, l'examen de cette politique de confidentialité fréquemment,
          et de rester informé de toute modification de celui-ci.Si, après
          examen, vous avez encore des questions à propos de toute portion de
          cette politique de confidentialité, s'il vous plaît contacter la
          société en utilisant les coordonnées fournies à la base de cette
          politique de confidentialité.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          2-Informations personnelles :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Les informations qui peuvent vous identifier comme un individu, telles
          que votre nom, adresse, numéro de téléphone, adresse e-mail, ou
          d'autres informations, que ce soit au travail ou à domicile.Sur tous
          les sites web des sociétés qui recueillent des renseignements
          personnels, nous décrire ce que l'information est nécessaire afin de
          vous fournir le produit, le service ou la fonctionnalité que vous avez
          demandé.Nous recueillons des renseignements personnels lorsque vous
          communiquez avec nous, lorsque vous vous enregistrez chez nous,
          lorsque vous utilisez nos produits et services, lorsque vous soumettez
          une commande avec nous, lorsque vous visitez nos sites Web ou des
          sites web de certains de ses partenaires, et lorsque vous entrez des
          promotions et des concours.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          3-Inscription :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Lorsque vous vous enregistrez avec nous sur ce site, vous devez
          remplir le formulaire d'inscription en ligne, qui vous oblige à créer
          un nom d'utilisateur et mot de passe. Lors de l'inscription, vous êtes
          également tenu de fournir des renseignements personnels, tels que le
          nom, l'adresse de facturation, l'adresse d'expédition, numéro de
          téléphone, adresse e-mail, les 4 derniers chiffres de la carte de
          crédit et l'expiration de la carte de crédit . Nous utilisons cette
          information afin que nous puissions communiquer avec vous au sujet des
          services et des produits sur le site qui vous ont exprimé leur intérêt
          ou à la demande et de faciliter l'achèvement d'une commande.
        </p>
      </div>

      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          4-Promotions, concours et concours :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          De temps à autre, la Société vous fournira l'occasion de participer à
          des promotions, des concours ou un tirage sur son site Web. Ces
          promotions, concours et tirages seront aussi régis par les règles et
          les règlements affichés avec de telles promotions, des concours et des
          administrateurs. Si vous participez, vous serez tenus de vous inscrire
          auprès de la Société, qui vous demandera de fournir certains
          renseignements personnels. La participation à ces promotions, des
          concours et des concours est entièrement volontaire et vous avez donc
          le choix de ne pas vous inscrire et de fournir vos renseignements
          personnels. Les informations demandées incluent généralement des
          informations de contact, telles que nom, adresse, adresse e-mail et
          numéro de téléphone. Nous utiliserons cette information pour informer
          les gagnants et attribuer les prix. En outre, lors de votre
          inscription, vous devez choisir de recevoir des communications de
          nous. Si vous décidez cette option, nous allons utiliser les
          informations fournies pour vous envoyer des communications décrites
          dans cette politique de confidentialité.
        </p>
      </div>

      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          5-Lettres d'information :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Si vous souhaitez vous abonner à la lettre d'information de la
          Société, nous utiliserons votre nom et votre adresse e-mail pour
          envoyer les bulletins d'information à vous. Autres renseignements
          recueillis Certaines informations peuvent être collectées
          automatiquement à chaque fois que vous visitez les sites Web de
          l'entreprise, tels que les cookies et des données informatiques. En
          outre, les informations collectées à partir de cela d'autres tiers
          indépendants sources. Nous recueillons également des informations sur
          les pages que vous consultez sur ce site. Ce site de visite de données
          est identifié uniquement par une URL unique
        </p>
      </div>

      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          6-Cookies :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          La Société utilise des cookies d'ID de session et des cookies
          persistants dans le cadre de son interaction avec votre navigateur. Un
          cookie est un code alphanumérique (un fichier) que de la Société des
          sites Web à votre disque dur de l'ordinateur par le biais d'un
          navigateur web pour permettre à ses systèmes de reconnaître votre
          navigateur pour fins de tenue de dossiers. Un cookie identifiant de
          session expire lorsque vous fermez votre navigateur, si un cookie
          persistant reste sur votre disque dur pendant une longue période de
          temps. Nous utilisons des cookies d'ID de session pour qu'il soit plus
          facile pour vous de naviguer dans les sites Web. Nous utilisons les
          cookies pour identifier et suivre les sections de son site Web que
          vous visitez le plus souvent. Nous utilisons également des cookies
          persistants dans les zones de son site Web où vous devez vous
          inscrire, et où vous êtes en mesure de personnaliser l'information que
          vous voyez, de sorte que vous n'avez pas à entrer vos préférences de
          plus d'une fois.En configurant les options de votre navigateur, vous
          pouvez contrôler la façon dont les témoins sont traités par votre
          système. Toutefois, si vous refusez l'utilisation de cookies, vous
          pouvez ne pas être en mesure d'utiliser certaines fonctionnalités de
          ce site et vous devrez nécessairement entrer de nouveau les
          informations requises pour exécuter une commande nouvelle ou
          interrompu pendant les sessions du navigateur.Certains de nos
          partenaires d'affaires utilisent des cookies sur le site. Nous n'avons
          pas d'accès ou de contrôle sur ces témoins (voir les «tiers de
          publicité" et "Cookies tierce partie" ci-dessous). En conséquence,
          cette politique de confidentialité couvre l'utilisation de cookies par
          la Société et ne pas couvrir l'utilisation de cookies par aucun
          partenaire.
        </p>
      </div>

      <div
        id="cookie-privacy"
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          7-Log Files :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Comme c'est le cas de la plupart des sites Web, la société recueille
          automatiquement certaines données et les stocke dans des fichiers
          journaux. Cette information comprend le protocole Internet (IP), le
          type de navigateur, fournisseur de services Internet (ISP), pages, le
          système d'exploitation, date / heure et séquence de navigation. La
          Société utilise ces informations pour analyser les tendances, pour le
          dépistage de la fraude, pour gérer les sites de la Société, de traquer
          les utilisateurs des mouvements autour des sites Web et à recueillir
          des informations démographiques sur la Société de l'utilisateur de
          base dans son ensemble.
        </p>
      </div>

      <div
        id="cookie-privacy"
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          8-Clair Gifs (Web Beacons / Web Bugs) :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          La société emploie une technologie logicielle appelée clair Gifs
          (alias Web Beacons / Web Bugs), qui aide à mieux gérer le contenu sur
          ses sites web et en informant la société que le contenu est efficace.
          Gifs invisibles sont de minuscules graphiques avec un identifiant
          unique, même en fonction de cookies, et sont utilisés pour suivre les
          mouvements en ligne des internautes. Contrairement aux cookies, qui
          sont stockés sur l'ordinateur d'un utilisateur de disque dur, clear
          gifs sont intégrés invisible sur les pages Web et sont à peu près la
          taille de la période à la fin de cette phrase.
        </p>
      </div>

      <div
        id="cookie-privacy"
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          10-Renseignements de tiers :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Pour améliorer les services et renforcer la personnalisation, la
          Société a périodiquement dû obtenir des informations sur d'autres
          sources tierces partie indépendante, et l'ajouter à votre compte. Par
          exemple, lorsque vous visitez un site sur lequel la Société annonce,
          puis cliquez sur la publicité, par exemple, la Société peut placer des
          cookies sur votre ordinateur.
        </p>
      </div>

      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          11-Partie Tiers Publicité :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Les annonces qui apparaissent de temps en temps sur les sites Web de
          l'entreprise sont livrées par un tiers. Informations relatives à vos
          visites sur les sites, tels que le nombre de fois que vous avez
          visualisé une publicité (mais pas votre nom, votre adresse ou d'autres
          renseignements personnels), est utilisé pour diffuser des annonces
          pour vous. Utilisation de l'information de vérification, de
          facturation et de commande La société recueille des renseignements
          personnels pour vérifier l'exactitude de votre nom, votre adresse de
          facturation, adresse d'expédition, les 4 derniers chiffres de la carte
          de crédit et l'expiration de carte de crédit prévue, pour le dépistage
          de la fraude, de facturer les produits et services achetés et de vous
          payer pour les produits et les services vendus. La Société utilise
          votre adresse e-mail adresse pour vous contacter au sujet de l'état de
          votre commande en cas de besoin et de vous envoyer un reçu d'achat /
          vente de confirmation de commande et d'expédition de notification.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          12-Offres spéciales et mises à jour :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          La Société recueille des informations sur les sections de son site Web
          que vous visitez le plus souvent, afin qu'il puisse vous envoyer notre
          bulletin et des informations sur les offres, promotions, concours,
          loteries et qui peuvent vous intéresser.En conséquence, la Société
          l'occasion de vous envoyer des informations sur les produits,
          services, offres spéciales, promotions et concours.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          13-Service liés Annonces :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          La Société peut, mais n'est pas obligé, pour vous envoyer strictement
          liée au service des annonces ou des rares occasions où il est
          nécessaire de le faire. Par exemple, si notre service est
          temporairement suspendu pour l'entretien, on peut vous envoyer un
          e-mail.En règle générale, vous ne pouvez pas vous désengager de ces
          communications, car ils ne sont pas de nature promotionnelle. Si vous
          ne souhaitez pas les recevoir,vous avez la possibilité de désactiver
          votre compte.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          14-Recherche :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Nous recueillons également des informations à des fins de recherche et
          de fournir des rapports anonymes pour des clients internes et
          externes. La Compagnie utilise les informations collectées pour son
          propre marketing interne et les études démographiques en vue
          d'améliorer le service à la clientèle et offre de produits.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          15-Service à la clientèle :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Nous communiquerons avec vous pour répondre à vos demandes, fournir
          les produits et services que vous demandez, et gérer votre compte.
          Nous communiquerons avec vous par e-mail, téléphone ou chat en direct,
          conformément à vos souhaits.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          16-Préférences :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          La société stocke des informations qu'elle recueille par le biais de
          cookies, de fichiers journaux et de tierces parties pour créer un
          profil de vos préférences, afin d'améliorer le contenu du site Web de
          la compagnie pour vous.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          17-Partage et divulgation des informations :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          La Société ne prévoit pas de vendre ou de louer l'une des informations
          collectées à des tiers à des fins, mais il partage l'information avec
          des tiers tels que décrits ci-dessous.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          18-Fournisseurs de services :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          La Société divulgue les renseignements obtenus à des prestataires
          externes nécessaires pour faciliter la sous-traitance des opérations
          suivantes: vérification de l'adresse, traitement des cartes de crédit,
          de fraude et de dépistage afin d'expédition.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          19-Autres tiers :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Les actions de la Société d'information, y compris des renseignements
          personnels, avec des tiers de confiance des partenaires, afin que les
          clients puissent recevoir des informations sur un tiers des offres et
          des promotions qui peuvent les intéresser. Ces tiers les partenaires
          n'ont pas de droits à partager les informations qui leur sont fournies
          par nous.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          20-Conformité avec les autorités judiciaires :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Comme requis par la loi, et à faire respecter les clients? Ou de la
          Société des droits juridiques, et de se conformer au niveau local,
          régional, fédéral et du droit international, la Société peut divulguer
          des informations aux services de répression.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          21-Choix et Désengagement :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Si vous ne souhaitez plus recevoir de la Société de promotion de la
          communication, vous pouvez vous 'désengager' et ne plus recevoir nos
          promotions en suivant les instructions incluses dans chaque
          communication ou par courriel à la Société à{" "}
          <a href="mailto:sup@ibendouma.com">sup@ibendouma.com</a>
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          22-Liens vers d'autres sites :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Il existe plusieurs endroits dans l'ensemble de l'entreprise sur le
          site Web qui peuvent vous envoyer vers d'autres liens et sites Web qui
          ne fonctionnent pas en vertu de la présente politique de
          confidentialité. Lorsque vous cliquez sur ces sites Web, cette
          politique de confidentialité ne s'applique plus. La société vous
          recommande d'examiner les déclarations de confidentialité de tous les
          sites Web de tierces parties à comprendre les procédures de collecte,
          d'utilisation et la divulgation de vos renseignements personnels.De
          stockage et de sécurité de l'information personnelle de stockage. La
          société stocke les informations qu'il recueille sur des ordinateurs
          situés dans un environnement contrôlé, sécurisé protégé de physique ou
          électronique de l'accès, l'utilisation ou la divulgation.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          23-Sécurité :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          La société protège la confidentialité et l'intégrité des informations
          qu'elle recueille par l'emploi approprié des protocoles
          administratifs, techniques, physiques et des contrôles de sécurité
          visant à limiter l'accès, de détecter et de prévenir l'accès non
          autorisé, une divulgation, l'altération ou la destruction de
          l'information dans le cadre de son contrôle . La Société transmet de
          l'information utilisés par ses fournisseurs de services externes pour
          la sous-traitance des opérations spécifiques énumérées ci-dessus à
          travers les réseaux publics et privés reconnus par l'intermédiaire des
          technologies de chiffrement, par exemple en utilisant SSL (Secure
          Sockets Layer), qui crypte les informations que vous entrez.Bien que
          la société suit les procédures énoncées ci-dessus pour protéger les
          renseignements personnels soumis à la Société, aucune méthode de
          transmission sur l'Internet, ou la méthode de stockage électronique,
          est sûr à 100%. Ainsi, alors que la société s'efforce d'utiliser des
          moyens commercialement acceptables pour protéger vos renseignements
          personnels, la Société ne peut garantir sa sécurité absolue. Si vous
          avez des questions à propos de la société en matière de sécurité sur
          ses sites web, s'il vous plaît n'hésitez pas à nous envoyer un e-mail
          à <a href="mailto:sup@ibendouma.com">sup@ibendouma.com</a>
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          24-Internet Fraud :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          La Société a une politique de tolérance zéro pour la fraude sur
          Internet ou de toute tentative d'accès ou d'acquérir un client ou
          d'autres informations sur ses sites web par des moyens illégaux ou
          clandestins. La Société travaille avec les autorités locales,
          nationales, et la fraude internationale et les organismes d'enquête à
          une variété d'appareils électroniques et d'autres moyens pour
          décourager, détecter et intercepter les activités frauduleuses. La
          Société poursuit agressivement, dans toute la mesure de la loi, les
          auteurs arrêtés pour mener des activités frauduleuses sur son site
          Web.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          25-Transfert international :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Les renseignements personnels recueillis par la Société peut être
          stockées et traitées aux États-Unis ou dans tout autre pays dans
          lequel la Société ou de ses sociétés affiliées, filiales ou agents
          possèdent des installations, et en utilisant de la Société des sites
          Web, vous consentez à un tel transfert de renseignements personnels en
          dehors de votre pays.
        </p>
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          26-Modifications de la présente Déclaration :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          La Société de temps à mettre à jour la présente politique de
          confidentialité, chaque fois que la révision de la dernière mise à
          jour à la date de début de la politique de confidentialité et
          d'indiquer la nature de la révision de la déclaration. La Société
          informera les clients de modifications à cette déclaration par e-mail
          ou en plaçant des avis bien visibles sur son site Web.
        </p>
      </div>

      <div
        style={{
          fontFamily: "Montserrat",
          margin: "10px 0px",
          lineHeight: "25px",
          fontSize: "16px",
        }}
      >
        <h4
          style={{
            fontFamily: "Montserrat",
            background: "#e7c80b",
            color: "rgba(244, 244, 244, 0.8)",
            padding: "5px",
          }}
        >
          29-Informations de Contact :
        </h4>
        <p
          style={{
            fontFamily: "Montserrat",
            margin: "10px 0px",
            lineHeight: "25px",
            fontSize: "16px",
          }}
        >
          Vous pouvez contacter la société par e-mail à{" "}
          <a href="mailto:sup@ibendouma.com">sup@ibendouma.com</a>
        </p>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;
