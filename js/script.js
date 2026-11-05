/* Soporte Industrial QRO website interactions. */
(() => {
  "use strict";

  const whatsappPhone = "524423513829";
  const defaultLanguage = "es";
  let currentLanguage = defaultLanguage;

  const translations = {
    en: {
      industryService: "Industrial services for businesses",
      industryTagline: "Engineering, maintenance, and industrial supply",
      brandTagline: "Solutions for industry",
      navServices: "Services",
      navElectronics: "Electronics manufacturing",
      navProcess: "How we work",
      navAbout: "About us",
      navProjectCta: "Let's discuss your project",
      heroEyebrow: "Support for your operations",
      heroTitleLead: "Integrated solutions",
      heroTitleAccent: "for industry.",
      heroCopy:
        "One reliable partner to keep your operations running. We bring together maintenance, part manufacturing and machining, aluminum-profile structures, and industrial supply.",
      heroCta: "Tell us what you need",
      exploreServices: "Explore services",
      safetyNote: "Focused on safety, quality, and operational continuity.",
      industrialSolutions: "Industrial solutions",
      technicalFocus: "Technical focus",
      modularDesign: "MODULAR DESIGN",
      practicalEngineering: "Practical engineering",
      plantNeeds: "Based on your plant's needs",
      technicalSupport: "Technical support",
      maintenance: "Maintenance",
      tailoredSolutions: "Tailored solutions",
      manufacturingStructures: "Manufacturing and structures",
      trustIntro: "A partner for your operations",
      safetyQuality: "Safety and quality",
      operationalContinuity: "Operational continuity",
      tailoredSolutionsFull: "Customized solutions",
      whatWeDo: "What we do",
      servicesHeading: "Services to address real plant needs.",
      servicesIntro:
        "We combine technical support, manufacturing, and supply to meet specific maintenance and manufacturing needs.",
      machineMaintenance: "Machinery maintenance",
      machineMaintenanceDescription:
        "Preventive and corrective support, condition inspections, adjustments, and mechanical assistance according to the agreed scope.",
      machiningParts: "Machining and part manufacturing",
      machiningPartsDescription:
        "Manufacturing or adapting components and replacement parts from a sample, drawing, or specification.",
      aluminumStructures: "Aluminum-profile structures",
      aluminumStructuresDescription:
        "Design and assembly of racks, worktables, supports, guards, and modular structures made from aluminum profiles.",
      equipmentMoving: "Equipment relocation and alignment",
      equipmentMovingDescription:
        "Support for relocating and positioning equipment and workstations, subject to technical and safety assessment.",
      industrialSupply: "Industrial supply",
      industrialSupplyDescription:
        "Assistance sourcing and supplying industrial materials, components, tools, spare parts, and consumables.",
      productionLineSupport: "Production-line support",
      productionLineSupportDescription:
        "Technical assistance for plant and manufacturing needs, including auxiliary production equipment and workstations.",
      specializedFocus: "Specialized support",
      electronicsHeading: "Solutions for electronics manufacturing.",
      electronicsIntro:
        "Support focused on production needs. Specific scopes are defined with the client after reviewing the equipment, process, and working conditions.",
      safetyDisclaimer:
        "Interventions, equipment handling, electrical work, and specialized tasks are confirmed only after reviewing the scope, permits, and plant safety conditions.",
      equipmentStations: "Equipment and stations",
      equipmentStationsDescription:
        "Support for SMT, THT, backend, conveyor, oven, and auxiliary equipment needs, subject to prior assessment.",
      maintenanceReliability: "Maintenance and reliability",
      maintenanceReliabilityDescription:
        "Maintenance routines, recurring-fault reviews, and proposals to reduce unplanned downtime.",
      partsFixtures: "Parts and fixtures",
      partsFixturesDescription:
        "Manufacturing or adapting brackets, plates, bases, fixtures, and components required for operations.",
      structuresErgonomics: "Structures and ergonomics",
      structuresErgonomicsDescription:
        "Aluminum-profile racks, tables, carts, and modular structures to organize material flow.",
      materialsConsumables: "Materials and consumables",
      materialsConsumablesDescription:
        "On-request supply of materials, spare parts, and consumables to help maintain operational continuity.",
      practicalImprovement: "Practical improvement",
      practicalImprovementDescription:
        "Solutions tailored to actual plant needs, prioritizing safety, functionality, and ease of maintenance.",
      workApproach: "Our approach",
      processHeading: "A clear process from the start.",
      processIntro:
        "First, we understand your plant’s needs; then we define the scope, proposal, and follow-up.",
      stepListen: "We listen",
      stepListenDescription:
        "We learn about the need and your plant’s context.",
      stepDefine: "We define",
      stepDefineDescription:
        "We review the scope, materials, and requirements.",
      stepPropose: "We propose",
      stepProposeDescription: "We provide a proposal and quotation.",
      stepExecute: "We execute",
      stepExecuteDescription:
        "We carry out the agreed work and provide follow-up.",
      directAttention: "Direct communication",
      directAttentionDescription:
        "Clear communication from the initial request through completion.",
      customSolutions: "Customized solutions",
      customSolutionsDescription:
        "Proposals based on each need, space, and operation.",
      industrialFocus: "Industrial focus",
      industrialFocusDescription: "Safety, quality, and production continuity.",
      singleContact: "One point of contact",
      singleContactDescription: "Support coordinating multiple types of needs.",
      contactEyebrow: "Contact",
      contactHeading: "Let's discuss your next project.",
      contactDescription:
        "Tell us about the equipment, part, structure, or material you need. We will review the information to prepare a proposal based on the required scope.",
      phoneWhatsapp: "Phone and WhatsApp",
      whatsappLabel: "WhatsApp",
      emailLabel: "Email",
      footerEmail: "Email",
      locationReference: "Service area",
      contactFormHeading: "Tell us what you need",
      formIntro: "Complete the fields to prepare a WhatsApp message.",
      formNameLabel: "Name *",
      formCompanyLabel: "Company",
      formServiceLabel: "Service of interest *",
      selectOption: "Select an option",
      formDetailsLabel: "What do you need help with? *",
      formSubmit: "Prepare WhatsApp message",
      privacyNote:
        "No information is sent automatically from this page. WhatsApp will open so you can review the message before sending it.",
      footerContact: "Contact",
      footerWhatsapp: "WhatsApp ↗",
      footerTagline:
        "Engineering, maintenance, and industrial supply · Querétaro, Mexico",
      otherRequest: "Other request",
      location: "Querétaro, Mexico",
      brandHomeAria: "Soporte Industrial QRO, home",
      mainNavigationAria: "Main navigation",
      heroArtAria: "Technical illustration of a modular industrial structure",
      heroImageAlt: "Soporte Industrial QRO company presentation",
      trustStripAria: "Areas of focus",
      whatsappFabAria: "Contact Soporte Industrial QRO on WhatsApp",
      guadalupeWhatsappAria: "Contact Guadalupe Becerra on WhatsApp",
      bernabeWhatsappAria: "Contact Bernabé Martínez on WhatsApp",
      emailContactAria: "Email Soporte Industrial QRO",
      menuOpenAria: "Open menu",
      menuCloseAria: "Close menu",
      languageButton: "Español",
      languageButtonAria: "Change website language to Spanish",
      pageTitle:
        "Soporte Industrial QRO | Engineering, maintenance, and industrial supply",
      pageDescription:
        "Soporte Industrial QRO provides machinery maintenance, machining, aluminum-profile structures, and industrial supply in Querétaro, Mexico.",
      namePlaceholder: "Your name",
      companyPlaceholder: "Company name",
      detailsPlaceholder:
        "Briefly describe the equipment, part, material, or plant need...",

      // Error 404 page translations.
      errorPageTitle: "Page not found | Soporte Industrial QRO",
      errorNavHome: "Home",
      errorLabel: "ERROR 404",
      errorHeading: "It looks like this page doesn't exist.",
      errorDescription:
        "The page you're looking for may have moved or is no longer available. You can return to the homepage and continue exploring our industrial solutions.",
      errorBackHome: "Back to homepage",
      errorFooterHome: "Return to website",
    },
  };

  // Keep a reference to the original Spanish text so switching back does not need duplicate translations.
  const originalText = new Map();
  const originalAttributes = new Map();

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    originalText.set(element, element.textContent);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    originalAttributes.set(
      `${element.tagName}:placeholder:${element.id}`,
      element.getAttribute("placeholder") || "",
    );
  });

  document.querySelectorAll("[data-i18n-content]").forEach((element) => {
    originalAttributes.set(
      `${element.tagName}:content:${element.getAttribute("name")}`,
      element.getAttribute("content") || "",
    );
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    originalAttributes.set(
      `${element.tagName}:aria-label:${element.id || element.className}`,
      element.getAttribute("aria-label") || "",
    );
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    originalAttributes.set(
      `${element.tagName}:alt:${element.getAttribute("src")}`,
      element.getAttribute("alt") || "",
    );
  });

  // Apply the selected language to text, metadata, and accessible labels.
  function applyLanguage(language) {
    currentLanguage = language;
    const dictionary = translations[language] || {};

    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      const spanishText = originalText.get(element);
      element.textContent =
        language === "es" ? spanishText : (dictionary[key] ?? spanishText);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      const originalKey = `${element.tagName}:placeholder:${element.id}`;
      const originalValue = originalAttributes.get(originalKey) || "";
      element.setAttribute(
        "placeholder",
        language === "es" ? originalValue : (dictionary[key] ?? originalValue),
      );
    });

    document.querySelectorAll("[data-i18n-content]").forEach((element) => {
      const key = element.dataset.i18nContent;
      const originalKey = `${element.tagName}:content:${element.getAttribute("name")}`;
      const originalValue = originalAttributes.get(originalKey) || "";
      element.setAttribute(
        "content",
        language === "es" ? originalValue : (dictionary[key] ?? originalValue),
      );
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const key = element.dataset.i18nAriaLabel;
      const originalKey = `${element.tagName}:aria-label:${element.id || element.className}`;
      const originalValue = originalAttributes.get(originalKey) || "";
      element.setAttribute(
        "aria-label",
        language === "es" ? originalValue : (dictionary[key] ?? originalValue),
      );
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      const key = element.dataset.i18nAlt;
      const originalKey = `${element.tagName}:alt:${element.getAttribute("src")}`;
      const originalValue = originalAttributes.get(originalKey) || "";
      element.setAttribute(
        "alt",
        language === "es" ? originalValue : (dictionary[key] ?? originalValue),
      );
    });

    const floatingWhatsApp = document.querySelector(".whatsapp-fab");
    if (floatingWhatsApp) {
      const greeting =
        language === "es"
          ? "Hola, Soporte Industrial QRO. Me gustaría consultar un servicio."
          : "Hello, Soporte Industrial QRO. I would like to inquire about a service.";
      floatingWhatsApp.href = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(greeting)}`;
    }

    const languageButton = document.querySelector("#language-toggle");
    if (languageButton) {
      languageButton.setAttribute(
        "aria-label",
        language === "es"
          ? "Cambiar idioma del sitio a inglés"
          : "Change website language to Spanish",
      );
    }
  }

  // Manage the mobile navigation drawer, including keyboard and backdrop dismissal.
  const menuToggle = document.querySelector(".menu-toggle");
  const menuCloseButton = document.querySelector("#menu-close-button");
  const navigation = document.querySelector("#nav-links");

  function setMenuState(isOpen, restoreFocus = false) {
    if (!menuToggle || !navigation) return;

    navigation.classList.toggle("open", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      currentLanguage === "es"
        ? isOpen
          ? "Cerrar menú"
          : "Abrir menú"
        : isOpen
          ? "Close menu"
          : "Open menu",
    );

    if (isOpen) {
      menuCloseButton?.focus();
    } else if (restoreFocus) {
      menuToggle.focus();
    }
  }

  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navigation.classList.contains("open");
      setMenuState(!isOpen, isOpen);
    });

    menuCloseButton?.addEventListener("click", () => setMenuState(false, true));

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenuState(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && navigation.classList.contains("open")) {
        setMenuState(false, true);
      }
    });

    document.addEventListener("click", (event) => {
      if (!navigation.classList.contains("open")) return;
      if (
        navigation.contains(event.target) ||
        menuToggle.contains(event.target)
      )
        return;
      setMenuState(false);
    });

    // Close the mobile drawer if the viewport returns to the desktop layout.
    window
      .matchMedia("(min-width: 761px)")
      .addEventListener("change", (event) => {
        if (event.matches) setMenuState(false);
      });
  }

  // Switch between Spanish and English without reloading the page.
  const languageToggle = document.querySelector("#language-toggle");
  if (languageToggle) {
    languageToggle.addEventListener("click", () => {
      const nextLanguage = currentLanguage === "es" ? "en" : "es";
      applyLanguage(nextLanguage);
      if (menuToggle && navigation) {
        setMenuState(navigation.classList.contains("open"));
      }
    });
  }

  // Prepare a localized WhatsApp message from the contact form.
  const contactForm = document.querySelector("#contact-form");
  const formStatus = document.querySelector("#form-status");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;

      const formData = new FormData(contactForm);
      const name = String(formData.get("name") || "").trim();
      const company = String(formData.get("company") || "").trim();
      const selectedService = contactForm.elements.service.selectedOptions[0];
      const service = selectedService ? selectedService.textContent.trim() : "";
      const details = String(formData.get("details") || "").trim();

      const messageLines =
        currentLanguage === "es"
          ? [
              "Hola, Soporte Industrial QRO. Me gustaría solicitar información sobre un servicio.",
              "",
              `Nombre: ${name}`,
              company ? `Empresa: ${company}` : null,
              `Servicio de interés: ${service}`,
              `Necesidad: ${details}`,
            ]
          : [
              "Hello, Soporte Industrial QRO. I would like to request information about a service.",
              "",
              `Name: ${name}`,
              company ? `Company: ${company}` : null,
              `Service of interest: ${service}`,
              `Request: ${details}`,
            ];

      const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(messageLines.filter(Boolean).join("\n"))}`;
      if (formStatus) {
        formStatus.textContent =
          currentLanguage === "es"
            ? "Se abrirá WhatsApp con el mensaje preparado."
            : "WhatsApp will open with the message prepared.";
      }
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    });
  }

  // Respect reduced-motion preferences for the decorative hero video.
  const heroVideo = document.querySelector(".hero-video");
  const reducedMotionQuery = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  );

  function updateHeroVideoPlayback() {
    if (!heroVideo) return;
    if (reducedMotionQuery.matches) {
      heroVideo.pause();
    } else {
      heroVideo.play().catch(() => {
        // Autoplay may be blocked by the browser; the static layout remains usable.
      });
    }
  }

  updateHeroVideoPlayback();
  reducedMotionQuery.addEventListener?.("change", updateHeroVideoPlayback);

  // Initialize the site in Spanish and keep the footer year current when its element exists.
  applyLanguage(defaultLanguage);
  document
    .querySelector("#year")
    ?.replaceChildren(
      document.createTextNode(String(new Date().getFullYear())),
    );
})();
