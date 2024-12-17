// Initialize EmailJS
(function() {
  emailjs.init("gA2FYY9klOZg2Pxky"); // Add your EmailJS public key here
})();

// Initialize ScrollReveal
const sr = ScrollReveal({
  distance: "200px",
  duration: 3500,
  delay: 200,
  reset: true,
});

// Initialize DOM elements
const navlist = document.querySelector(".navlist");
const menuBtn = document.querySelector(".ri-menu-line");
const themeBtn = document.querySelector("#theme-btn");
const portfolioTabs = document.getElementsByClassName("portfolio-tab");
const tabContents = document.getElementsByClassName("tab-content");
const contactForm = document.getElementById('contact-form');

// Menu Navigation functionality
menuBtn.onclick = function() {
  navlist.classList.toggle("active");
  menuBtn.classList.toggle("ri-arrow-up-double-line");
};

// Sticky Navbar
window.addEventListener("scroll", () => {
  document.querySelector("nav").classList.toggle("scrolling", scrollY > 50);
});

// Dark Theme Toggle
themeBtn.onclick = function() {
  themeBtn.classList.toggle("ri-sun-line");
  if (themeBtn.classList.contains("ri-sun-line")) {
      document.body.classList.add("active");
  } else {
      document.body.classList.remove("active");
  }
};

// Portfolio Tabs functionality
function tabOpen(x) {
  for (let portfolioTab of portfolioTabs) {
      portfolioTab.classList.remove("active");
  }
  for (let tabContent of tabContents) {
      tabContent.classList.remove("active-content");
  }
  event.currentTarget.classList.add("active");
  document.getElementById(x).classList.add("active-content");
}

// Skills Progress Bar Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.style.width = entry.target.getAttribute('data-value');
      }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.progress').forEach(bar => observer.observe(bar));

// Typing Animation
const typed = new Typed(".multiple-text", {
  strings: ["Software Developer", "Systems Analyst", "UI/UX Designer", "Technology Consultant", "QC Tester"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Contact Form Functionality
if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
      event.preventDefault();

      // Get form elements
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const subjectInput = document.getElementById('subject');
      const messageInput = document.getElementById('message');
      const submitButton = this.querySelector('button[type="submit"]');

      // Save original button text
      const originalButtonText = submitButton.innerHTML;

      // Show loading state
      submitButton.innerHTML = '<span>Sending...</span>';
      submitButton.disabled = true;

      // Prepare template parameters
      const templateParams = {
          from_name: nameInput.value,
          from_email: emailInput.value,
          subject: subjectInput.value,
          message: messageInput.value
      };

      // Send email using EmailJS
      emailjs.send('service_kw3te4t', 'template_dazbx9h', templateParams) 
          .then(function(response) {
              // Success message
              alert('Thank you! Your message has been sent successfully.');
              
              // Reset form
              contactForm.reset();
          })
          .catch(function(error) {
              // Error message
              console.error('EmailJS Error:', error);
              alert('Oops! Something went wrong. Please try again later.');
          })
          .finally(function() {
              // Restore button state
              submitButton.innerHTML = originalButtonText;
              submitButton.disabled = false;
          });
  });
}

const projectData = {
  'apotakecare': {
      title: 'ApoTakeCare: Digital Pharmacy Management System',
      overview: 'A comprehensive digital solution designed to modernize pharmacy operations through an integrated web-based platform. The system streamlines pharmacy management, enhances customer experience, and enables digital health services.',
      techStack: ['React', 'SQL', 'Node.js', 'REST API', 'Figma', 'Visual Paradigm'],
      role: 'Lead Developer with 50% contribution, responsible for system architecture, frontend development, and database design.',
      features: [
          'Digital prescription handling with OCR technology',
          'Online consultation platform',
          'Medicine reminder system',
          'Inventory control system',
          'Real-time stock monitoring',
          'Sales analytics and reporting'
      ],
      challenges: [
          {
              challenge: 'Integration of OCR technology for prescription handling',
              solution: 'Implemented custom OCR solution with error correction algorithms and manual verification workflow.'
          },
          {
              challenge: 'Real-time inventory management',
              solution: 'Developed websocket-based system for instant stock updates across all connected clients.'
          }
      ],
      results: 'Successfully deployed system with 99.9% uptime, processing over 1000 daily transactions and reducing prescription processing time by 60%.',
      resources: [
        {
            type: 'Customer Prototype',
            url: 'https://www.figma.com/proto/SamC8X5XJhRbgIPBW31Vst/ApoTakeCare?page-id=0%3A1&node-id=24-1619&node-type=canvas&viewport=-194%2C140%2C0.11&t=CoYiK1vxerp4CrYK-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=241%3A3456&show-proto-sidebar=1',
            text: 'View Customer Interface'
        },
        {
            type: 'Admin Prototype',
            url: 'https://www.figma.com/proto/SamC8X5XJhRbgIPBW31Vst/ApoTakeCare?page-id=24%3A1028&node-id=160-3268&node-type=canvas&viewport=204%2C86%2C0.07&t=V8okwdBUpysIICl0-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=160%3A3268&show-proto-sidebar=1',
            text: 'View Admin Interface'
        },
        {
            type: 'Pharmacy Prototype',
            url: 'https://www.figma.com/proto/SamC8X5XJhRbgIPBW31Vst/ApoTakeCare?page-id=24%3A1029&node-id=51-3720&node-type=canvas&viewport=203%2C285%2C0.04&t=gsyzQVHHQW266qHR-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=51%3A3714&show-proto-sidebar=1',
            text: 'View Pharmacy Interface'
        },
        {
            type: 'Documentation',
            url: 'assets/files/Apotakecare.pdf',
            text: 'Download Documentation'
        }
    ]
  },

  'coffeebeans': {
      title: 'Coffee Bean\'s: Modern Coffee Shop E-commerce Platform',
      overview: 'A React-powered digital platform designed to deliver an exceptional digital coffee shop experience, combining elegant user interface design with robust functionality.',
      techStack: ['React.js', 'Context API', 'RESTful API', 'Modern CSS', 'CI/CD'],
      role: 'Frontend Developer with 50% contribution, leading the React implementation and UI/UX development.',
      features: [
          'User authentication and profile management',
          'Interactive menu system with categorized products',
          'Real-time cart management',
          'Order tracking functionality',
          'Responsive design across devices',
          'Secure payment processing'
      ],
      challenges: [
          {
              challenge: 'Complex state management across components',
              solution: 'Implemented Context API for efficient state management and data flow'
          },
          {
              challenge: 'Real-time order updates',
              solution: 'Developed a robust real-time notification system using WebSocket integration'
          }
      ],
      results: 'Achieved sub-3-second page load times, real-time transaction processing, and seamless cart management with instantaneous updates.',
      resources: [
        {
            type: 'Live Demo',
            url: 'https://coffee-bean-s.vercel.app/',
            text: 'View Live Project'
        },
        {
            type: 'Documentation',
            url: 'assets/files/Coffee Bean.pdf',
            text: 'Download Documentation'
        }
    ]
  },

  'morajayahub': {
      title: 'Mora Jaya Hub: E-commerce Platform with API Integration',
      overview: 'An integrated e-commerce solution supporting small business operations, featuring API integration and PostgreSQL database management.',
      techStack: ['Node.js', 'Express.js', 'PostgreSQL', 'RESTful API', 'HTML5', 'CSS3', 'JavaScript'],
      role: 'Full Stack Developer responsible for both frontend and backend implementation.',
      features: [
          'Dynamic product catalog display',
          'New arrivals showcase',
          'Detailed product information pages',
          'Shopping cart functionality',
          'Secure checkout process',
          'Administrative dashboard'
      ],
      challenges: [
          {
              challenge: 'Complex database relationships',
              solution: 'Implemented optimized PostgreSQL schema with proper indexing and relationships'
          },
          {
              challenge: 'API security',
              solution: 'Developed comprehensive authentication and authorization system with JWT'
          }
      ],
      results: 'Successfully deployed with response times under 200ms, 90% code coverage, and robust error handling.',
      resources: [
        {
            type: 'GitHub',
            url: 'https://github.com/achelars/24001155_47_Rac_Mora-Jaya-Hub_Challenge-Gold.git',
            text: 'View Source Code'
        },
        {
            type: 'Documentation',
            url: 'assets/files/Mora Jaya Hub.pdf',
            text: 'Download Documentation'
        }
    ]
  },

  'gogame': {
      title: 'GoGame: Retail Database Management System',
      overview: 'A comprehensive database solution designed to handle the complete operational flow of a gaming retail business using Microsoft SQL Server.',
      techStack: ['Microsoft SQL Server', 'SSMS', 'Database Design', 'ERD', 'Data Modeling'],
      role: 'Database Developer with 85% contribution, leading the database design and implementation.',
      features: [
          'Customer relationship management',
          'Employee data handling',
          'Supplier relationship management',
          'Game inventory tracking',
          'Transaction processing',
          'Sales analysis'
      ],
      challenges: [
          {
              challenge: 'Complex data relationships',
              solution: 'Implemented normalized database structure with optimized relationships and constraints'
          },
          {
              challenge: 'Performance optimization',
              solution: 'Created efficient indexes and optimized query execution plans'
          }
      ],
      results: 'Achieved query response times under 100ms, 100% data integrity, and successful backup recovery implementation.',
      resources: [
        {
            type: 'GitHub',
            url: 'https://github.com/achelars/GoGame.git',
            text: 'View Source Code'
        },
        {
            type: 'ERD',
            url: 'assets/images/GoGame ERD.png',
            text: 'View Database Diagram'
        }
    ]
  },

  'volunup': {
      title: 'VolunUp: Mobile Volunteer Management Platform',
      overview: 'A mobile application designed to streamline volunteer recruitment and management process in Indonesia, connecting volunteers with organizations.',
      techStack: ['Figma', 'Miro', 'UI/UX Design', 'Prototyping', 'User Research'],
      role: 'Lead Designer with 90% contribution, responsible for UX research and UI implementation.',
      features: [
          'User authentication and profile management',
          'Volunteer opportunity discovery',
          'CV generation from volunteer history',
          'Interactive forum for community engagement',
          'Real-time event updates',
          'Comprehensive FAQ system'
      ],
      challenges: [
          {
              challenge: 'Complex user flows',
              solution: 'Created intuitive navigation patterns based on extensive user research and testing'
          },
          {
              challenge: 'Mobile responsiveness',
              solution: 'Implemented responsive design system with consistent components'
          }
      ],
      results: 'Delivered a comprehensive design system with reusable components and intuitive user flows.',
      resources: [
        {
            type: 'Prototype',
            url: 'https://www.figma.com/proto/mwa12lX05JtZWmZbX9YFhq/VolunUp?node-id=1-290&node-type=canvas&t=BORYuS4ypnYE6XKz-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A243',
            text: 'View Interactive Prototype'
        },
        {
            type: 'Documentation',
            url: 'assets/files/VolunUp.pdf',
            text: 'Download Documentation'
        }
    ]
  },

  'kostmate': {
      title: 'KostMates: Digital Roommate Matching & Boarding House Management Platform',
      overview: 'A pioneering mobile application designed to revolutionize the boarding house experience by connecting compatible roommates and streamlining property management.',
      techStack: ['Figma', 'Mobile Design', 'UI/UX', 'User Research', 'Prototyping'],
      role: 'UI/UX Designer with 85% contribution, leading research and design implementation.',
      features: [
          'Personality and lifestyle compatibility assessment',
          'Interest-based matching algorithms',
          'Virtual property tours',
          'Booking management system',
          'Payment processing integration',
          'Analytics and reporting tools'
      ],
      challenges: [
          {
              challenge: 'Complex matching system UI',
              solution: 'Developed intuitive interface for compatibility assessment and matching'
          },
          {
              challenge: 'Property visualization',
              solution: 'Implemented efficient virtual tour interface with optimized image handling'
          }
      ],
      results: 'Created a user-centric design that effectively serves both traditional and modern user needs.',
      resources: [
        {
            type: 'Prototype',
            url: 'https://www.figma.com/proto/SetNV6B4GVcfRz6euFpwBe/KostMates-App-View-Only?page-id=0%3A1&node-id=29-4359&node-type=canvas&viewport=526%2C359%2C0.05&t=Um7ub3w6HllEMsqx-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=29%3A4330',
            text: 'View Interactive Prototype'
        },
        {
            type: 'Case Study',
            url: 'assets/files/KostMates.pdf',
            text: 'Download Case Study'
        }
    ]
  },

  'cryptobay': {
      title: 'Cryptobay: Dual-Payment E-commerce Platform',
      overview: 'An innovative e-commerce platform bridging traditional and cryptocurrency payment methods through thoughtful design and seamless user experience.',
      techStack: ['Figma', 'UI/UX Design', 'Payment Integration', 'Prototyping'],
      role: 'UI/UX Designer with 50% contribution, focusing on payment flow and user experience.',
      features: [
          'Seamless dual payment system',
          'Real-time cryptocurrency conversion',
          'QR code implementation',
          'Secure payment confirmation',
          'Integrated wishlist functionality',
          'Dynamic payment interfaces'
      ],
      challenges: [
          {
              challenge: 'Complex payment flows',
              solution: 'Designed intuitive payment process with clear user guidance'
          },
          {
              challenge: 'Cryptocurrency integration',
              solution: 'Created seamless interface for cryptocurrency transactions'
          }
      ],
      results: 'Successfully delivered a user-friendly interface that simplifies complex cryptocurrency transactions.',
      resources: [
        {
            type: 'Prototype',
            url: 'https://www.figma.com/proto/TyHGQw9eXDAXfQdPAALjx4/Cryptobay?page-id=0%3A1&node-id=1-1498&node-type=canvas&viewport=486%2C328%2C0.04&t=6QJYD4L8sm3j9BWx-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A1096',
            text: 'View Interactive Prototype'
        },
        {
            type: 'Documentation',
            url: 'assets/files/Cryptobay.pdf',
            text: 'Download Documentation'
        }
    ]
  },

  'wheelhub': {
      title: 'wHeel Hub: Advanced Automotive Technology Platform',
      overview: 'A sophisticated online platform designed to streamline the automotive technology shopping experience through a modern digital marketplace.',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      role: 'Frontend Developer with 50% contribution, leading the UI implementation.',
      features: [
          'Dynamic home page with featured products',
          'Comprehensive car catalog system',
          'Interactive promotional platform',
          'Secure user registration',
          'Advanced search capabilities',
          'Responsive product visualization'
      ],
      challenges: [
          {
              challenge: 'Complex product visualization',
              solution: 'Implemented responsive image handling and optimization'
          },
          {
              challenge: 'Search functionality',
              solution: 'Developed advanced filtering and search algorithm'
          }
      ],
      results: 'Achieved optimal performance with page load times under 3 seconds and full mobile responsiveness.',
      resources: [
        {
            type: 'GitHub',
            url: 'https://github.com/achelars/wheelhub.git',
            text: 'View Source Code'
        },
        {
            type: 'Documentation',
            url: 'assets/files/wHeel Hub.pdf',
            text: 'Download Documentation'
        }
    ]
  },

  'echo': {
    title: 'Echo: Gaming Peripherals E-commerce Platform',
    overview: 'A mobile application designed to revolutionize how gaming enthusiasts purchase and customize their gaming equipment, providing a streamlined interface for discovering, purchasing, and customizing gaming peripherals.',
    techStack: ['Figma', 'Miro', 'Mobile Design', 'UI/UX', 'Component Libraries', 'Prototyping'],
    role: 'Lead Designer with 90% contribution, focusing on UX research, wireframing, and prototype development.',
    features: [
        'Authentication system with profile management',
        'Gaming equipment catalog',
        'Customization interface',
        'Product reviews and ratings',
        'User support features',
        'Article repository',
        'Navigation framework',
        'Content display system'
    ],
    challenges: [
        {
            challenge: 'Complex customization interface',
            solution: 'Developed an intuitive customization system with real-time preview capabilities'
        },
        {
            challenge: 'User engagement',
            solution: 'Implemented comprehensive feedback and rating systems with interactive elements'
        }
    ],
    results: 'Created a comprehensive mobile interface with advanced interactions, custom animations, and a complete design system.',
    resources: [
      {
          type: 'Prototype',
          url: 'https://www.figma.com/proto/DzdEZ4XkUGe7KuD2ZLGlf8/Echo?node-id=1-81&node-type=canvas&t=MtEMqKfaMXnbdAW2-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A49',
          text: 'View Interactive Prototype'
      },
      {
          type: 'Documentation',
          url: 'assets/files/Echo.pdf',
          text: 'Download Documentation'
      }
  ]
},

'eventwhisper': {
    title: 'Event Whisper: Digital Event Management & Community Platform',
    overview: 'A comprehensive digital solution designed to bridge the gap between event organizers and attendees, streamlining event management processes while fostering community engagement.',
    techStack: ['Face Recognition', 'Social Media Integration', 'Analytics', 'Security Framework', 'Community Tools'],
    role: '50% contribution as lead developer, focusing on core functionality and security implementation.',
    features: [
        'Event creation and management tools',
        'Advanced RSVP and ticketing systems',
        'Integrated social media promotion',
        'Real-time analytics',
        'Facial recognition authentication',
        'Interactive discussion forums',
        'Secure payment processing'
    ],
    challenges: [
        {
            challenge: 'Complex security requirements',
            solution: 'Implemented robust face recognition authentication and fraud prevention systems'
        },
        {
            challenge: 'Real-time engagement tracking',
            solution: 'Developed comprehensive analytics system with performance metrics'
        }
    ],
    results: 'Achieved system response times under 2 seconds, 99.9% uptime, and successful implementation of facial recognition security.',
    resources: [
      {
          type: 'Prototype',
          url: 'https://www.figma.com/proto/WFJ4G74a9QEJynsWf1rmXV/EventWhisper?node-id=1-7651&node-type=canvas&t=sdS1jc2gKSYsDcoX-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A7651',
          text: 'View Interactive Prototype'
      },
      {
          type: 'Documentation',
          url: 'assets/files/Event Whisper.pdf',
          text: 'Download Documentation'
      },
      {
          type: 'Infographic',
          url: 'assets/images/eventwhisper_infographic.png',
          text: 'View Infographic'
      }
  ]
},

'coblosdigital': {
    title: 'Coblos Digital: Digital Voting System for Indonesian Elections',
    overview: 'A pioneering effort to modernize Indonesia\'s electoral system through a secure digital platform, addressing critical challenges in voter participation and electoral fraud prevention.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'NIK-based Authentication', 'Custom CSS Framework'],
    role: '50% contribution as primary developer, focusing on authentication and security implementation.',
    features: [
        'Secure NIK-based authentication',
        'Dual election support',
        'Real-time election countdown',
        'Interactive voting interface',
        'Fraud reporting system',
        'Vote confirmation system',
        'Election information center'
    ],
    challenges: [
        {
            challenge: 'Security and authenticity',
            solution: 'Implemented end-to-end encryption and secure NIK-based verification'
        },
        {
            challenge: 'System scalability',
            solution: 'Developed architecture supporting 1000+ concurrent users with response times under 100ms'
        }
    ],
    results: 'Successfully developed a secure voting platform with 99.9% uptime and robust fraud prevention capabilities.',
    resources: [
      {
          type: 'GitHub',
          url: 'https://github.com/achelars/coblos_digital.git',
          text: 'View Source Code'
      },
      {
          type: 'Documentation',
          url: 'assets/files/Coblos Digital.pdf',
          text: 'Download Documentation'
      }
  ]
},

'hoohdie': {
    title: 'hO-Ohdie: Java-Based E-commerce Platform',
    overview: 'A Java-based e-commerce application with XAMPP integration, providing a robust platform for managing hoodie merchandise sales with dual interfaces for customers and administrators.',
    techStack: ['Java', 'MySQL', 'XAMPP', 'Java Swing/AWT', 'phpMyAdmin', 'Git'],
    role: 'Backend Developer with 60% contribution, leading database integration and system architecture.',
    features: [
        'Dual-interface system',
        'Secure user authentication',
        'Product catalog management',
        'Shopping cart functionality',
        'Real-time price calculation',
        'Transaction processing',
        'Order history tracking'
    ],
    challenges: [
        {
            challenge: 'Database integration complexity',
            solution: 'Implemented efficient XAMPP connection management and data persistence'
        },
        {
            challenge: 'Real-time updates',
            solution: 'Developed robust transaction processing system with instant updates'
        }
    ],
    results: 'Achieved database response times under 100ms, supporting 100+ concurrent users with 99.9% system uptime.',
    resources: [
      {
          type: 'GitHub',
          url: 'https://github.com/achelars/hO-Ohdie.git',
          text: 'View Source Code'
      },
      {
          type: 'Documentation',
          url: 'assets/files/hO-Ohdie.pdf',
          text: 'Download Documentation'
      }
  ]
},

'librarymanagement': {
    title: 'Library Management Database System',
    overview: 'A sophisticated database solution designed to handle the complete operational workflow of a modern library, developed using Microsoft SQL Server Management Studio.',
    techStack: ['Microsoft SQL Server', 'SSMS', 'Visual Paradigm', 'Database Design', 'ERD'],
    role: 'Database Developer with 85% contribution, leading the database design and implementation.',
    features: [
        'Member management system',
        'Book acquisition tracking',
        'Location management',
        'Borrowing operations',
        'Fine assessment',
        'Package management',
        'Comprehensive reporting'
    ],
    challenges: [
        {
            challenge: 'Complex relationship management',
            solution: 'Implemented normalized database structure with optimized relationships'
        },
        {
            challenge: 'Performance optimization',
            solution: 'Created efficient indexes and query optimization strategies'
        }
    ],
    results: 'Achieved query response times under 100ms with 100% data integrity and successful backup recovery implementation.',
    rresources: [
      {
          type: 'GitHub',
          url: 'https://github.com/achelars/Library-Management-Database-System.git',
          text: 'View Source Code'
      },
      {
          type: 'ERD',
          url: 'assets/images/Library Management Database System ERD.png',
          text: 'View Database Diagram'
      },
      {
          type: 'Documentation',
          url: 'assets/files/AOL Introduction to Database Systems.pdf',
          text: 'View Project Documentation'
      }
  ]
},

'gramediawarehouse': {
    title: 'Gramedia Warehousing System',
    overview: 'An enterprise warehouse management solution designed to streamline and modernize warehouse operations for Gramedia, Indonesia\'s premier publishing company.',
    techStack: ['Microsoft SQL Server', 'Visual Paradigm', 'Database Design', 'Figma', 'ERD'],
    role: 'System Architect and Database Developer, focusing on system design and implementation.',
    features: [
        'Barcode/RFID integration',
        'Real-time stock tracking',
        'Category-based organization',
        'Branch store orders',
        'Online customer orders',
        'Delivery tracking',
        'Role-based access control'
    ],
    challenges: [
        {
            challenge: 'Complex inventory management',
            solution: 'Implemented advanced tracking system with real-time updates'
        },
        {
            challenge: 'Multi-channel distribution',
            solution: 'Developed integrated system for handling both online and branch store orders'
        }
    ],
    results: 'Implemented system supporting 100+ concurrent users with transaction processing in real-time and comprehensive audit trailing.',
    resources: [
      {
          type: 'Prototype',
          url: 'https://www.figma.com/proto/TV3skqrjfOKHSmV856xdZ7/Gramedia\'s-Prototype?node-id=5-3&node-type=canvas&t=SNcAwfzLNkdiRvm0-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A3&show-proto-sidebar=1',
          text: 'View Interactive Prototype'
      },
      {
          type: 'Documentation',
          url: 'assets/files/Sistem Informasi Pergudangan Gramedia.pdf',
          text: 'Download Documentation'
      }
  ]
}
};

// Add click event listeners to all portfolio images
document.addEventListener('DOMContentLoaded', function() {
  const portfolioImages = document.querySelectorAll('.portfolio .image');
  const modal = document.getElementById('portfolioModal');
  const closeBtn = document.querySelector('.close-modal');

  portfolioImages.forEach(image => {
      image.addEventListener('click', function() {
          const projectId = getProjectIdFromImage(this);
          if (projectId && projectData[projectId]) {
              openModal(projectId);
          }
      });
  });

  closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  });
});

function getProjectIdFromImage(imageElement) {
  // Extract project ID from image src
  const src = imageElement.querySelector('img').src;
  const filename = src.split('/').pop().split('.')[0];
  return filename.toLowerCase();
}

function openModal(projectId) {
  const project = projectData[projectId];
  const modal = document.getElementById('portfolioModal');

  // Populate modal content
  document.getElementById('modalTitle').textContent = project.title;
  document.getElementById('projectOverview').textContent = project.overview;
  
  // Populate tech stack
  const techStackDiv = document.getElementById('technicalStack');
  techStackDiv.innerHTML = project.techStack.map(tech => 
      `<span>${tech}</span>`
  ).join('');
  
  document.getElementById('roleContributions').textContent = project.role;
  
  // Populate features
  const featuresUl = document.getElementById('keyFeatures');
  featuresUl.innerHTML = project.features.map(feature => 
      `<li>${feature}</li>`
  ).join('');
  
  // Populate challenges
  const challengesDiv = document.getElementById('challenges');
  challengesDiv.innerHTML = project.challenges.map(item => `
      <div class="challenge-item">
          <h4>Challenge: ${item.challenge}</h4>
          <p>Solution: ${item.solution}</p>
      </div>
  `).join('');
  
  document.getElementById('results').textContent = project.results;
  
  // Populate resource links
  const resourceLinksDiv = document.getElementById('resourceLinks');
  resourceLinksDiv.innerHTML = project.resources.map(resource => 
      `<a href="${resource.url}" target="_blank">${resource.text}</a>`
  ).join('');

  // Show modal
  modal.style.display = 'block';
}

// ScrollReveal Animations
sr.reveal(".home-container h3", { origin: "top" });
sr.reveal(".home-container h1", { origin: "left" });
sr.reveal(".home-container p", { origin: "left" });
sr.reveal(".home-container .right", { origin: "right" });
sr.reveal(".social-icons-container", { origin: "right" });
sr.reveal(".about-container .title", { origin: "right" });
sr.reveal(".about-container h3", { origin: "bottom" });
sr.reveal(".about-container p", { origin: "bottom" });
sr.reveal(".about-container .left", { origin: "left" });
sr.reveal(".about-container .right", { origin: "right" });
sr.reveal(".services .title", { origin: "top" });
sr.reveal(".services .content-1", { origin: "left" });
sr.reveal(".services .content-2", { origin: "right" });
sr.reveal(".skills .title", { origin: "top" });
sr.reveal(".skill-category", { origin: "bottom", interval: 200 });
sr.reveal(".portfolio-container", { origin: "bottom" });
sr.reveal(".portfolio .title", { origin: "top" });
sr.reveal(".portfolio-buttons", { origin: "left" });
sr.reveal(".certificates .title", { origin: "top" });
sr.reveal(".certificate-category", { origin: "bottom", interval: 200 });
sr.reveal(".certificate-box", { origin: "bottom", interval: 300 });
sr.reveal(".contact .title", { origin: "top" });
sr.reveal(".contact .row .box", { origin: "right" });
sr.reveal(".contact .row .contact-form", { origin: "left" });