import Layout from "@/components/layout";
import Menu from "@/components/menu";

function Index() {
  const link = (text: string, link: string) => (
    <a href={link} target="_blank" className="underline text-blue-500">
      {text}
    </a>
  );

  return (
    <Layout>
      <Menu section="privacy" />
      <div className="p-5 md:px-20 md:py-20 ">
        <p className="font-bold text-center text-2xl mb-3">PRIVACY POLICY</p>
        <p className="mt-4">
          This privacy notice for Kuku Diary Limited(&quot;Company,&ldquo;
          &quot;we,&ldquo; &quot;us,&ldquo; or &quot;our&ldquo;), describes how
          and why we might collect, store, use, and/or share
          (&quot;process&ldquo;) your information when you use our services
          (&quot;Services&ldquo;), such as when you:
        </p>

        <ul className="list-inside list-disc mt-3">
          <li>
            Download and use our mobile application(kuku diary),or any other
            application of ours that links to this privacy notice
          </li>
          <li>
            Engage with us in other related ways, including any sales,
            marketing, or events
          </li>
        </ul>

        <p className="mt-4">
          Questions or concerns? Reading this privacy notice will help you
          understand your privacy rights and choices. If you do not agree with
          our policies and practices, please do not use our Services. If you
          still have any questions or concerns, please contact us at
          kukudiary@gmail.com.
        </p>

        <p className="font-bold mt-6">1. WHAT INFORMATION DO WE COLLECT? </p>
        <p className="font-bold mt-2">
          Personal information you disclose to us
        </p>
        <p className="italic mt-2">
          In Short: We collect personal information that you provide to us.
        </p>
        <p className="mt-2">
          We collect personal information that you voluntarily provide to us
          when you register on the Services, express an interest in obtaining
          information about us or our products and Services, when you
          participate in activities on the Services, or otherwise when you
          contact us.
        </p>
        <p className="mt-2">
          Personal Information Provided by You. The personal information that we
          collect depends on the context of your interactions with us and the
          Services, the choices you make, and the products and features you use.
          The personal information we collect may include the following:
        </p>
        <ul className="list-inside list-disc mt-3">
          <li>phone numbers</li>
          <li>names</li>
          <li>email addresses</li>
          <li>usernames</li>
          <li>passwords</li>
          <li>billing addresses</li>
          <li>debit/credit card numbers</li>
        </ul>

        <p className="mt-3">
          Sensitive Information. We do not process sensitive information.{" "}
        </p>

        <p className="mt-4">
          <span className="font-bold">Payment Data.</span> We may collect data
          necessary to process your payment if you make purchases, such as your
          payment instrument number (such as a credit card number), and the
          security code associated with your payment instrument. All payment
          data is stored by{" "}
          {link(
            "mpesa",
            "https://vodacom.co.tz/public/assets/files/M-PESA%20Customer%20Privacy%20Statement%20vr1%20English%20FCC%20approved%202020.pdf"
          )}
          , {link("tigopesa", "https://www.tigo.co.tz/privacy-policy")},{" "}
          {link("airtelmoney", "https://www.airtel.in/privacy-policy")} and{" "}
          {link("halopesa", "https://halotel.co.tz/halopesa/privacy-policy")}.
        </p>

        <p className="mt-4">
          <span className="font-bold">Social Media Login Data</span>. We may
          provide you with the option to register with us using your existing
          social media account details, like your Facebook, Twitter, or other
          social media account. If you choose to register in this way, we will
          collect the information described in the section called &quot;HOW DO
          WE HANDLE YOUR SOCIAL LOGINS?&ldquo; below.
        </p>

        <p>
          <span className="font-bold">Application Data</span>.If you use our
          application(s), we also may collect the following information if you
          choose to provide us with access or permission:
        </p>
        <ul className="list-inside list-disc mt-3">
          <li>
            Mobile Device Access. We may request access or permission to certain
            features from your mobile device, including your mobile
            device&ldquo;s calendar, reminders, sms messages, storage, and other
            features. If you wish to change our access or permissions, you may
            do so in your device&ldquo;s settings.
          </li>
          <li>
            Push Notifications. We may request to send you push notifications
            regarding your account or certain features of the application(s). If
            you wish to opt out from receiving these types of communications,
            you may turn them off in your device&ldquo;s settings.
          </li>
        </ul>

        <p className="mt-4">
          This information is primarily needed to maintain the security and
          operation of our application(s), for troubleshooting, and for our
          internal analytics and reporting purposes.
        </p>

        <p className="mt-4">
          All personal information that you provide to us must be true,
          complete, and accurate, and you must notify us of any changes to such
          personal information.
        </p>

        <p className="font-bold mt-2">Information automatically collected</p>

        <p className="mt-2">
          In Short: Some information — such as your Internet Protocol (IP)
          address and/or browser and device characteristics — is collected
          automatically when you visit our Services.
        </p>

        <p className="mt-2">
          We automatically collect certain information when you visit, use, or
          navigate the Services. This information does not reveal your specific
          identity (like your name or contact information) but may include
          device and usage information, such as your IP address, browser and
          device characteristics, operating system, language preferences,
          referring URLs, device name, country, location, information about how
          and when you use our Services, and other technical information. This
          information is primarily needed to maintain the security and operation
          of our Services, and for our internal analytics and reporting
          purposes.
          <br />
          <br />
          Like many businesses, we also collect information through cookies and
          similar technologies.
          <br />
          <br />
          The information we collect includes:
        </p>

        <ul className="list-inside list-disc mt-3">
          <li>
            Log and Usage Data. Log and usage data is service-related,
            diagnostic, usage, and performance information our servers
            automatically collect when you access or use our Services and which
            we record in log files. Depending on how you interact with us, this
            log data may include your IP address, device information, browser
            type, and settings and information about your activity in the
            Services (such as the date/time stamps associated with your usage,
            pages and files viewed, searches, and other actions you take such as
            which features you use), device event information (such as system
            activity, error reports (sometimes called &quot;crash dumps&ldquo;),
            and hardware settings).
          </li>
          <li>
            Device Data. We collect device data such as information about your
            computer, phone, tablet, or other device you use to access the
            Services. Depending on the device used, this device data may include
            information such as your IP address (or proxy server), device and
            application identification numbers, location, browser type, hardware
            model, Internet service provider and/or mobile carrier, operating
            system, and system configuration information.
          </li>
        </ul>

        <p className="font-bold mt-6">
          2. HOW DO WE PROCESS YOUR INFORMATION?{" "}
        </p>

        <p className="mt-4">
          In Short: We process your information to provide, improve, and
          administer our Services, communicate with you, for security and fraud
          prevention, and to comply with law. We may also process your
          information for other purposes with your consent.
        </p>

        <p className="mt-4">
          We process your personal information for a variety of reasons,
          depending on how you interact with our Services, including:
        </p>
        <ul className="list-inside list-disc mt-3">
          <li>
            To facilitate account creation and authentication and otherwise
            manage user accounts. We may process your information so you can
            create and log in to your account, as well as keep your account in
            working order.
          </li>
          <li>
            To respond to user inquiries/offer support to users. We may process
            your information to respond to your inquiries and solve any
            potential issues you might have with the requested service.
          </li>
          <li>
            To send administrative information to you. We may process your
            information to send you details about our products and services,
            changes to our terms and policies, and other similar information.
          </li>
          <li>
            To fulfill and manage your orders. We may process your information
            to fulfill and manage your orders, payments, returns, and exchanges
            made through the Services.
          </li>
          <li>
            To enable user-to-user communications. We may process your
            information if you choose to use any of our offerings that allow for
            communication with another user.
          </li>
          <li>
            To request feedback. We may process your information when necessary
            to request feedback and to contact you about your use of our
            Services.
          </li>
          <li>
            To send you marketing and promotional communications. We may process
            the personal information you send to us for our marketing purposes,
            if this is in accordance with your marketing preferences. You can
            opt out of our marketing emails at any time. (For more information,
            see &quot;WHAT ARE YOUR PRIVACY RIGHTS?&quot; below).
          </li>
          <li>
            To protect our Services. We may process your information as part of
            our efforts to keep our Services safe and secure, including fraud
            monitoring and prevention.
          </li>
          <li>
            To identify usage trends. We may process information about how you
            use our Services to better understand how they are being used so we
            can improve them.
          </li>
          <li>
            To comply with our legal obligations. We may process your
            information to comply with our legal obligations, respond to legal
            requests, and exercise, establish, or defend our legal rights.
          </li>
        </ul>

        <p className="font-bold mt-6">
          3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
        </p>

        <p className="mt-3">
          In Short: We may share information in specific situations described in
          this section and/or with the following third parties.
          <br />
          <br />
          We may need to share your personal information in the following
          situations:
        </p>

        <ul className="list-inside list-disc mt-3">
          <li>
            Business Transfers. We may share or transfer your information in
            connection with, or during negotiations of, any merger, sale of
            company assets, financing, or acquisition of all or a portion of our
            business to another company.
          </li>
          <li>
            When we use Google Maps Platform APIs. We may share your information
            with certain Google Maps Platform APIs (e.g., Google Maps API,
            Places API). To find out more about Googles Privacy Policy, please
            refer to this link.
          </li>
          <li>
            Business Partners. We may share your information with our business
            partners to offer you certain products, services, or promotions.
          </li>
        </ul>

        <p className="font-bold mt-6">
          4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
        </p>
        <p className="mt-3">
          In Short: We may use cookies and other tracking technologies to
          collect and store your information.
          <br />
          <br />
          We may use cookies and similar tracking technologies (like web beacons
          and pixels) to access or store information. Specific information about
          how we use such technologies and how you can refuse certain cookies is
          set out in our Cookie Notice.
        </p>

        <p className="font-bold mt-6">
          5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
        </p>
        <p className="mt-3">
          In Short: If you choose to register or log in to our services using a
          social media account, we may have access to certain information about
          you.
          <br />
          <br />
          Our Services offer you the ability to register and log in using your
          third-party social media account details (like your Facebook or
          Twitter logins). Where you choose to do this, we will receive certain
          profile information about you from your social media provider. The
          profile information we receive may vary depending on the social media
          provider concerned, but will often include your name, email address,
          friends list, and profile picture, as well as other information you
          choose to make public on such a social media platform.
          <br />
          <br />
          We will use the information we receive only for the purposes that are
          described in this privacy notice or that are otherwise made clear to
          you on the relevant Services. Please note that we do not control, and
          are not responsible for, other uses of your personal information by
          your third-party social media provider. We recommend that you review
          their privacy notice to understand how they collect, use, and share
          your personal information, and how you can set your privacy
          preferences on their sites and apps.
        </p>

        <p className="font-bold mt-6">
          6. HOW LONG DO WE KEEP YOUR INFORMATION?
        </p>
        <p className="mt-3">
          In Short: We keep your information for as long as necessary
          to fulfill the purposes outlined in this privacy notice unless
          otherwise required by law.
          <br />
          <br />
          We will only keep your personal information for as long as it is
          necessary for the purposes set out in this privacy notice, unless a
          longer retention period is required or permitted by law (such as tax,
          accounting, or other legal requirements). No purpose in this notice
          will require us keeping your personal information for longer than the
          period of time in which users have an account with us.
          <br />
          <br />
          When we have no ongoing legitimate business need to process your
          personal information, we will either delete or anonymize such
          information, or, if this is not possible (for example, because your
          personal information has been stored in backup archives), then we will
          securely store your personal information and isolate it from any
          further processing until deletion is possible.
        </p>

        <p className="font-bold mt-6">
          7. HOW DO WE KEEP YOUR INFORMATION SAFE?
        </p>
        <p className="mt-3">
          In Short: We aim to protect your personal information through a system
          of organizational and technical security measures.
          <br />
          <br />
          We have implemented appropriate and reasonable technical
          and organizational security measures designed to protect the security
          of any personal information we process. However, despite our
          safeguards and efforts to secure your information, no electronic
          transmission over the Internet or information storage technology can
          be guaranteed to be 100% secure, so we cannot promise or guarantee
          that hackers, cybercriminals, or other unauthorized third parties will
          not be able to defeat our security and improperly collect, access,
          steal, or modify your information. Although we will do our best to
          protect your personal information, transmission of personal
          information to and from our Services is at your own risk. You should
          only access the Services within a secure environment.
        </p>

        <p className="font-bold mt-6">8. WHAT ARE YOUR PRIVACY RIGHTS?</p>
        <p className="mt-3">
          In Short: You may review, change, or terminate your account at any
          time.  
          <br />
          <br />
          If you are located in the EEA or UK and you believe we are unlawfully
          processing your personal information, you also have the right to
          complain to your local data protection supervisory authority. You can
          find their contact details
          here: https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.
          <br />
          <br />
          If you are located in Switzerland, the contact details for the data
          protection authorities are available
          here: https://www.edoeb.admin.ch/edoeb/en/home.html.
          <br />
          <br />
          Withdrawing your consent: If we are relying on your consent to process
          your personal information, which may be express and/or implied consent
          depending on the applicable law, you have the right to withdraw your
          consent at any time. You can withdraw your consent at any time by
          contacting us by using the contact details provided in the
          section &quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&quot; below.
          <br />
          <br />
          However, please note that this will not affect the lawfulness of the
          processing before its withdrawal, nor when applicable law allows, will
          it affect the processing of your personal information conducted in
          reliance on lawful processing grounds other than consent.
          <br />
          <br />
          Opting out of marketing and promotional communications: You can
          unsubscribe from our marketing and promotional communications at any
          time by clicking on the unsubscribe link in the emails that we
          send, replying &quot;STOP&quot; or &quot;UNSUBSCRIBE&quot; to the SMS messages that we
          send, or by contacting us using the details provided in the
          section &quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&quot; below. You will
          then be removed from the marketing lists. However, we may still
          communicate with you — for example, to send you service-related
          messages that are necessary for the administration and use of your
          account, to respond to service requests, or for other non-marketing
          purposes.
        </p>
      </div>
    </Layout>
  );
}

export default Index;
