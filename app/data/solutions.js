// Pure, JSON-serializable data — no React or icon imports here on purpose.
// Icons are referenced by string key and resolved via `getIcon()` in
// `app/data/icon-map.js`, only inside components that actually render them.

export const SOLUTIONS = [
  {
    id: "restaurant-pos-software",

    seo: {
      title:
        "Restaurant POS Software for Fine Dining & Casual Restaurants | iMaker POS",
      description:
        "Manage tables, billing, KOT, inventory, staff, and reports with iMaker Restaurant POS Software.",
      keywords: [
        "Restaurant POS Software",
        "Restaurant Billing Software",
        "Restaurant Management Software",
        "Fine Dining POS",
        "Restaurant ERP",
      ],
    },

    card: {
      title: "Restaurant",
      description:
        "Manage tables, billing, KOT, inventory, staff, and reports with iMaker Restaurant POS Software.",
      image: "/Images/restaurant.png",
    },

    hero: {
      title: "Restaurant POS Software",
      subtitle: "Built for Restaurants & Fine Dining",
      tagline: "Complete control of your restaurant operations.",
      description:
        "Simplify restaurant management with an all-in-one POS that streamlines billing, kitchen operations, inventory, and customer service.",
      image: "/Images/restaurant.png",

      primaryCTA: {
        text: "Book Free Demo",
        link: "/contact",
      },

      secondaryCTA: {
        text: "Watch Demo",
        link: "/demo",
      },
    },

    idealFor: [
      "Fine Dining Restaurants",
      "Casual Dining Restaurants",
      "Family Restaurants",
      "Multi-floor Restaurants",
      "Hotel Restaurants",
    ],

    challenges: [
      {
        title: "Slow Billing",
        description:
          "Manual billing creates long queues and delays customer service.",
      },
      {
        title: "Kitchen Delays",
        description:
          "Paper KOTs increase communication gaps between staff and kitchen.",
      },
      {
        title: "Table Management",
        description:
          "Managing table availability during rush hours becomes difficult.",
      },
      {
        title: "Inventory Wastage",
        description:
          "Without stock tracking, ingredients are often overused or wasted.",
      },
    ],

    solution: {
      title: "Everything You Need to Run a Restaurant",
      description:
        "iMaker Restaurant POS brings billing, KOT, inventory, CRM, and reporting together in one platform to help restaurants serve customers faster and operate more efficiently.",
    },

    modules: [
      "Billing",
      "Table Management",
      "Floor Management",
      "Kitchen Order Ticket (KOT)",
      "Kitchen Display System",
      "Inventory",
      "Recipe Management",
      "Customer Management",
      "Loyalty Program",
      "GST Billing",
      "Staff Management",
      "Reports & Analytics",
      "Multi Outlet Management",
    ],

    features: [
      {
        icon: "Layers",
        title: "Table & Floor Management",
        description:
          "Monitor every table and floor in real time with live order status.",
      },
      {
        icon: "ChefHat",
        title: "Instant Kitchen Orders",
        description:
          "Automatically send orders to the kitchen without handwritten KOTs.",
      },
      {
        icon: "SplitSquareHorizontal",
        title: "Split Billing",
        description:
          "Split bills by guest, item, or amount with multiple payment options.",
      },
      {
        icon: "Boxes",
        title: "Inventory Tracking",
        description:
          "Track stock automatically and receive low inventory alerts.",
      },
    ],

    workflow: [
      {
        title: "Guest Seated",
        description:
          "Assign guests to available tables using the live floor view.",
      },
      {
        title: "Take Order",
        description: "Staff place orders directly from the POS.",
      },
      {
        title: "Kitchen Receives Order",
        description: "Digital KOT is sent instantly to the kitchen.",
      },
      {
        title: "Prepare & Serve",
        description: "Track preparation and serve customers on time.",
      },
      {
        title: "Generate Bill",
        description: "Create GST-compliant bills within seconds.",
      },
      {
        title: "Receive Payment",
        description: "Accept Cash, Card, UPI, Wallets, or mixed payments.",
      },
    ],

    benefits: [
      {
        title: "Faster Service",
        description:
          "Reduce customer waiting time with quick billing and digital KOTs.",
      },
      {
        title: "Better Kitchen Coordination",
        description:
          "Instant order communication improves preparation accuracy.",
      },
      {
        title: "Lower Food Wastage",
        description:
          "Inventory tracking helps control stock usage and reduce losses.",
      },
      {
        title: "Improved Customer Experience",
        description:
          "Serve guests faster with accurate billing and smoother operations.",
      },
    ],

    metrics: [
      {
        value: "+22%",
        label: "Table Turnover",
      },
      {
        value: "-40%",
        label: "Billing Time",
      },
      {
        value: "99.2%",
        label: "Order Accuracy",
      },
      {
        value: "-30%",
        label: "Food Wastage",
      },
    ],

    integrations: [
      "UPI Payments",
      "Thermal Printer",
      "Kitchen Printer",
      "Barcode Scanner",
      "QR Ordering",
      "Cash Drawer",
      "Cloud Backup",
    ],

    screenshots: [
      {
        title: "Restaurant Dashboard",
        image: "/Images/screens/restaurant-dashboard.webp",
      },
      {
        title: "Table Management",
        image: "/Images/screens/floor-management.webp",
      },
      {
        title: "Billing Screen",
        image: "/Images/screens/billing.webp",
      },
      {
        title: "Kitchen Display",
        image: "/Images/screens/kitchen-display.webp",
      },
    ],

    faqs: [
      {
        question: "Can I manage multiple restaurant floors?",
        answer:
          "Yes. View every floor and table in real time from a single dashboard.",
      },
      {
        question: "Does it support Kitchen Order Tickets (KOT)?",
        answer: "Yes. Orders are instantly sent to the kitchen digitally.",
      },
      {
        question: "Can customers split bills?",
        answer:
          "Yes. Split bills by guest, item, or amount with multiple payment methods.",
      },
      {
        question: "Does it work offline?",
        answer:
          "Yes. Billing continues offline and syncs automatically once the internet is restored.",
      },
      {
        question: "Can I manage multiple outlets?",
        answer:
          "Yes. Manage multiple restaurant branches from one centralized dashboard.",
      },
      {
        question: "Does it support GST billing?",
        answer:
          "Yes. Generate GST-compliant invoices and reports automatically.",
      },
    ],

    cta: {
      title: "Ready to Modernize Your Restaurant?",
      description:
        "Book a free demo and discover how iMaker Restaurant POS helps improve efficiency, speed, and customer satisfaction.",
      primaryButton: {
        text: "Book Free Demo",
        link: "/contact",
      },
      secondaryButton: {
        text: "Talk to Sales",
        link: "/contact",
      },
    },
  },
  {
    id: "cafe-pos-software",

    seo: {
      title: "Cafe POS Software for Coffee Shops & Bakeries | iMaker POS",
      description:
        "Speed up billing, manage orders, loyalty programs, inventory, and customer experience with iMaker Cafe POS Software.",
      keywords: [
        "Cafe POS Software",
        "Coffee Shop POS",
        "Cafe Billing Software",
        "Coffee Shop Management Software",
        "Cafe POS System",
      ],
    },

    card: {
      title: "Cafe",
      description:
        "Speed up billing, manage orders, loyalty programs, inventory, and customer experience with iMaker Cafe POS Software.",
      image: "/Images/cafe.png",
    },
    hero: {
      title: "Cafe POS Software",
      subtitle: "Built for Cafes & Coffee Shops",
      tagline: "Fast billing. Better customer experience.",
      description:
        "Keep your queues moving with a POS designed for busy cafés. Manage quick orders, menu items, inventory, loyalty programs, and payments from one intuitive system.",
      image: "/Images/cafe.png",

      primaryCTA: {
        text: "Book Free Demo",
        link: "/contact",
      },

      secondaryCTA: {
        text: "Watch Demo",
        link: "/demo",
      },
    },

    idealFor: [
      "Coffee Shops",
      "Tea Cafes",
      "Bakery Cafes",
      "Dessert Cafes",
      "Co-working Cafes",
    ],

    challenges: [
      {
        title: "Long Billing Queues",
        description:
          "Slow billing during busy hours leads to longer customer wait times.",
      },
      {
        title: "Managing Combo Offers",
        description:
          "Applying combo pricing and modifiers manually increases billing errors.",
      },
      {
        title: "Repeat Customer Tracking",
        description:
          "Without customer history, loyalty programs become difficult to manage.",
      },
      {
        title: "Stock Visibility",
        description:
          "Running out of popular menu items during peak hours affects customer satisfaction.",
      },
    ],

    solution: {
      title: "Built for Fast-Moving Cafe Operations",
      description:
        "iMaker Cafe POS helps you serve customers faster with quick billing, menu management, loyalty programs, inventory tracking, and real-time business insights.",
    },

    modules: [
      "Quick Billing",
      "Menu Management",
      "Modifier Management",
      "Combo Offers",
      "Inventory",
      "Customer Management",
      "Loyalty Program",
      "GST Billing",
      "Reports & Analytics",
      "Staff Management",
    ],

    features: [
      {
        icon: "Zap",
        title: "Lightning Fast Billing",
        description:
          "Complete orders in seconds with a streamlined billing interface.",
      },
      {
        icon: "Coffee",
        title: "Smart Menu Management",
        description:
          "Organize categories, sizes, add-ons, and modifiers with ease.",
      },
      {
        icon: "Gift",
        title: "Loyalty & Rewards",
        description:
          "Reward repeat customers with loyalty points and exclusive offers.",
      },
      {
        icon: "Boxes",
        title: "Inventory Tracking",
        description:
          "Track ingredients and receive alerts before stock runs low.",
      },
    ],

    workflow: [
      {
        title: "Take Customer Order",
        description:
          "Select menu items, sizes, and modifiers with just a few taps.",
      },
      {
        title: "Prepare Order",
        description: "The order is instantly sent to the preparation counter.",
      },
      {
        title: "Generate Bill",
        description:
          "Apply discounts, loyalty points, or combo offers automatically.",
      },
      {
        title: "Receive Payment",
        description:
          "Accept Cash, UPI, Card, Wallets, or mixed payment methods.",
      },
      {
        title: "Serve Customer",
        description:
          "Complete the order quickly and keep queues moving smoothly.",
      },
    ],

    benefits: [
      {
        title: "Serve More Customers",
        description:
          "Reduce waiting time with quick order processing and billing.",
      },
      {
        title: "Increase Repeat Business",
        description:
          "Reward loyal customers with personalized offers and loyalty points.",
      },
      {
        title: "Reduce Billing Errors",
        description: "Automatically calculate combos, modifiers, and taxes.",
      },
      {
        title: "Better Inventory Control",
        description:
          "Track ingredients in real time to reduce wastage and stock shortages.",
      },
    ],

    metrics: [
      {
        value: "+30%",
        label: "Orders Per Hour",
      },
      {
        value: "-35%",
        label: "Queue Wait Time",
      },
      {
        value: "<1 Day",
        label: "Setup Time",
      },
      {
        value: "+25%",
        label: "Repeat Customers",
      },
    ],

    integrations: [
      "UPI Payments",
      "Receipt Printer",
      "Barcode Scanner",
      "QR Ordering",
      "Cash Drawer",
      "Cloud Backup",
    ],

    screenshots: [
      {
        title: "Cafe Dashboard",
        image: "/Images/screens/cafe-dashboard.webp",
      },
      {
        title: "Quick Billing",
        image: "/Images/screens/cafe-billing.webp",
      },
      {
        title: "Menu Management",
        image: "/Images/screens/cafe-menu.webp",
      },
      {
        title: "Sales Reports",
        image: "/Images/screens/cafe-reports.webp",
      },
    ],

    faqs: [
      {
        question: "Can I create combo offers?",
        answer:
          "Yes. Create combo meals, meal upgrades, and promotional offers with automatic pricing.",
      },
      {
        question: "Does it support loyalty programs?",
        answer:
          "Yes. Reward repeat customers with loyalty points, discounts, and special offers.",
      },
      {
        question: "Can I customize menu items?",
        answer:
          "Yes. Add sizes, flavors, toppings, and other modifiers for every menu item.",
      },
      {
        question: "Does it work offline?",
        answer:
          "Yes. Continue billing even without internet, with automatic synchronization once you're back online.",
      },
      {
        question: "Can I track inventory?",
        answer:
          "Yes. Monitor ingredient usage and receive alerts when stock is running low.",
      },
      {
        question: "Is GST billing supported?",
        answer:
          "Yes. Generate GST-compliant invoices and tax reports automatically.",
      },
    ],

    cta: {
      title: "Run Your Cafe More Efficiently",
      description:
        "Discover how iMaker Cafe POS helps you serve customers faster, manage inventory, and grow your business.",
      primaryButton: {
        text: "Book Free Demo",
        link: "/contact",
      },
      secondaryButton: {
        text: "Talk to Sales",
        link: "/contact",
      },
    },
  },
  {
    id: "fast-food-pos-software",

    seo: {
      title: "Fast Food & Takeaway POS Software | iMaker POS",
      description:
        "Speed up billing, manage takeaway orders, kitchen operations, combos, and inventory with iMaker Fast Food POS Software.",
      keywords: [
        "Fast Food POS Software",
        "Takeaway POS",
        "Quick Service Restaurant POS",
        "Fast Food Billing Software",
        "QSR POS System",
      ],
    },

    card: {
      title: "Fast Food",
      description:
        "Speed up billing, manage takeaway orders, kitchen operations, combos, and inventory with iMaker Fast Food POS Software.",
      image: "/Images/fastfood.png",
    },

    hero: {
      title: "Fast Food POS Software",
      subtitle: "Built for Fast Food & Takeaways",
      tagline: "Serve more customers in less time.",
      description:
        "Handle high-volume orders with a POS built for speed. From quick billing and combo meals to takeaway management and kitchen coordination, everything works together to keep your service running efficiently.",
      image: "/Images/fastfood.png",

      primaryCTA: {
        text: "Book Free Demo",
        link: "/contact",
      },

      secondaryCTA: {
        text: "Watch Demo",
        link: "/demo",
      },
    },

    idealFor: [
      "Quick Service Restaurants (QSR)",
      "Fast Food Chains",
      "Takeaway Counters",
      "Food Courts",
      "Burger & Pizza Outlets",
      "Franchise Stores",
    ],

    challenges: [
      {
        title: "Long Customer Queues",
        description:
          "High customer volume during peak hours slows down billing and order processing.",
      },
      {
        title: "Order Accuracy",
        description:
          "Large numbers of takeaway and dine-in orders increase the chance of mistakes.",
      },
      {
        title: "Kitchen Bottlenecks",
        description:
          "Delayed communication between billing and the kitchen affects service speed.",
      },
      {
        title: "Combo Pricing",
        description:
          "Managing meal combos and customizations manually leads to billing errors.",
      },
    ],

    solution: {
      title: "Built for High-Volume Food Businesses",
      description:
        "iMaker Fast Food POS streamlines quick billing, order management, combo pricing, kitchen operations, and inventory so your team can serve more customers without slowing down.",
    },

    modules: [
      "Quick Billing",
      "Takeaway Management",
      "Dine-in Management",
      "Kitchen Order Ticket (KOT)",
      "Combo & Meal Deals",
      "Menu Management",
      "Inventory",
      "GST Billing",
      "Reports & Analytics",
      "Staff Management",
    ],

    features: [
      {
        icon: "Gauge",
        title: "Ultra-Fast Billing",
        description:
          "Process customer orders in seconds with an optimized billing interface.",
      },
      {
        icon: "PackageCheck",
        title: "Combo & Meal Deals",
        description:
          "Create meal combos, offers, and customizations with automatic pricing.",
      },
      {
        icon: "ChefHat",
        title: "Instant Kitchen Orders",
        description:
          "Orders are sent directly to the kitchen, reducing delays and preparation errors.",
      },
      {
        icon: "ClipboardList",
        title: "Live Order Tracking",
        description:
          "Track every order from billing to preparation and customer pickup.",
      },
    ],

    workflow: [
      {
        title: "Take Order",
        description:
          "Select menu items, combos, and customizations in just a few taps.",
      },
      {
        title: "Generate Bill",
        description:
          "Create the bill instantly with discounts and GST applied automatically.",
      },
      {
        title: "Kitchen Preparation",
        description:
          "The kitchen receives the order immediately and starts preparation.",
      },
      {
        title: "Pack Order",
        description:
          "Prepared food is packed and marked ready for pickup or takeaway.",
      },
      {
        title: "Complete Order",
        description:
          "Hand over the order and receive payment through any supported payment method.",
      },
    ],

    benefits: [
      {
        title: "Handle More Orders",
        description:
          "Serve more customers during busy hours without increasing billing delays.",
      },
      {
        title: "Reduce Order Errors",
        description:
          "Digital order management minimizes mistakes between the counter and kitchen.",
      },
      {
        title: "Improve Kitchen Efficiency",
        description:
          "Real-time order flow helps the kitchen prepare food faster and more accurately.",
      },
      {
        title: "Increase Customer Satisfaction",
        description:
          "Faster service and accurate orders create a better customer experience.",
      },
    ],

    metrics: [
      {
        value: "+45%",
        label: "Peak Hour Orders",
      },
      {
        value: "-50%",
        label: "Order Errors",
      },
      {
        value: "<90 Sec",
        label: "Average Order Time",
      },
      {
        value: "+35%",
        label: "Billing Speed",
      },
    ],

    integrations: [
      "UPI Payments",
      "Receipt Printer",
      "Kitchen Printer",
      "Barcode Scanner",
      "QR Ordering",
      "Cash Drawer",
      "Cloud Backup",
    ],

    screenshots: [
      {
        title: "Quick Billing Screen",
        image: "/Images/screens/fastfood-billing.webp",
      },
      {
        title: "Order Queue",
        image: "/Images/screens/order-queue.webp",
      },
      {
        title: "Kitchen Dashboard",
        image: "/Images/screens/fastfood-kitchen.webp",
      },
      {
        title: "Sales Reports",
        image: "/Images/screens/fastfood-reports.webp",
      },
    ],

    faqs: [
      {
        question: "Can I manage takeaway and dine-in orders together?",
        answer:
          "Yes. The POS handles takeaway, dine-in, and counter orders from one unified dashboard.",
      },
      {
        question: "Does it support combo meals?",
        answer:
          "Yes. Create meal deals, combo offers, and item customizations with automatic pricing.",
      },
      {
        question: "Can the kitchen receive orders instantly?",
        answer:
          "Yes. Orders are automatically sent to the kitchen through digital KOT.",
      },
      {
        question: "Does it work offline?",
        answer:
          "Yes. Continue billing without internet and sync data automatically once connectivity returns.",
      },
      {
        question: "Can I track daily sales?",
        answer:
          "Yes. View real-time sales reports, order summaries, and business performance from the dashboard.",
      },
      {
        question: "Does it support GST billing?",
        answer:
          "Yes. Generate GST-compliant invoices and detailed tax reports automatically.",
      },
    ],

    cta: {
      title: "Speed Up Every Order",
      description:
        "See how iMaker Fast Food POS helps you serve more customers, reduce queues, and simplify daily operations.",
      primaryButton: {
        text: "Book Free Demo",
        link: "/contact",
      },
      secondaryButton: {
        text: "Talk to Sales",
        link: "/contact",
      },
    },
  },
  {
    id: "cloud-kitchen-pos-software",

    seo: {
      title: "Cloud Kitchen POS Software for Delivery Kitchens | iMaker POS",
      description:
        "Manage multiple brands, delivery orders, kitchen operations, inventory, and reports from one centralized Cloud Kitchen POS Software.",
      keywords: [
        "Cloud Kitchen POS",
        "Cloud Kitchen Software",
        "Dark Kitchen POS",
        "Delivery Kitchen Management",
        "Multi Brand Kitchen POS",
      ],
    },

    card: {
      title: "Cloud Kitchen",
      description:
        "Manage multiple brands, delivery orders, kitchen operations, inventory, and reports from one centralized Cloud Kitchen POS Software.",
      image: "/Images/cloud-kitchen.png",
    },

    hero: {
      title: "Cloud Kitchen POS Software",
      subtitle: "Built for Cloud Kitchens & Delivery Brands",
      tagline: "Manage every order from one dashboard.",
      description:
        "Run multiple food brands from a single kitchen with a centralized POS. Consolidate delivery orders, manage inventory, monitor kitchen operations, and grow your delivery business with complete visibility.",
      image: "/Images/cloud.png",

      primaryCTA: {
        text: "Book Free Demo",
        link: "/contact",
      },

      secondaryCTA: {
        text: "Watch Demo",
        link: "/demo",
      },
    },

    idealFor: [
      "Cloud Kitchens",
      "Dark Kitchens",
      "Delivery-Only Restaurants",
      "Multi-Brand Kitchens",
      "Centralized Kitchen Operations",
    ],

    challenges: [
      {
        title: "Managing Multiple Brands",
        description:
          "Handling menus, pricing, and orders for several brands from one kitchen becomes difficult.",
      },
      {
        title: "Scattered Delivery Orders",
        description:
          "Orders arriving from different delivery channels make operations harder to manage.",
      },
      {
        title: "Inventory Synchronization",
        description:
          "Keeping stock updated across multiple brands is time-consuming and error-prone.",
      },
      {
        title: "Kitchen Coordination",
        description:
          "Without centralized order management, preparation delays and missed orders become common.",
      },
    ],

    solution: {
      title: "One Dashboard for Every Brand",
      description:
        "iMaker Cloud Kitchen POS centralizes order management, kitchen workflows, inventory, and reporting, helping delivery businesses operate efficiently while serving multiple brands from one location.",
    },

    modules: [
      "Order Management",
      "Multi Brand Management",
      "Menu Management",
      "Kitchen Order Ticket (KOT)",
      "Inventory Management",
      "Recipe Management",
      "Delivery Order Tracking",
      "GST Billing",
      "Reports & Analytics",
      "Staff Management",
      "Multi Kitchen Management",
    ],

    features: [
      {
        icon: "MonitorSmartphone",
        title: "Centralized Order Dashboard",
        description:
          "View and manage every incoming order from a single operational dashboard.",
      },
      {
        icon: "Layers",
        title: "Multi-Brand Management",
        description:
          "Manage multiple restaurant brands with independent menus, pricing, and operations.",
      },
      {
        icon: "Boxes",
        title: "Smart Inventory Control",
        description:
          "Automatically track ingredient consumption and stock availability across all brands.",
      },
      {
        icon: "ChefHat",
        title: "Kitchen Workflow Management",
        description:
          "Route orders to the correct kitchen station and monitor preparation in real time.",
      },
    ],

    workflow: [
      {
        title: "Receive Orders",
        description:
          "Orders from all connected brands arrive in one centralized dashboard.",
      },
      {
        title: "Assign to Kitchen",
        description:
          "Orders are automatically routed to the appropriate preparation station.",
      },
      {
        title: "Prepare Food",
        description:
          "Kitchen staff prepare orders while tracking live preparation status.",
      },
      {
        title: "Pack & Dispatch",
        description:
          "Completed orders are packed and marked ready for pickup or delivery.",
      },
      {
        title: "Track Performance",
        description:
          "Monitor sales, inventory, and operational performance through real-time reports.",
      },
    ],

    benefits: [
      {
        title: "Manage Multiple Brands Easily",
        description:
          "Operate several restaurant brands from one kitchen without increasing operational complexity.",
      },
      {
        title: "Reduce Missed Orders",
        description:
          "Centralized order management ensures every order is tracked from start to finish.",
      },
      {
        title: "Optimize Inventory",
        description:
          "Monitor ingredient usage across brands and reduce stock wastage.",
      },
      {
        title: "Improve Kitchen Productivity",
        description:
          "Organized kitchen workflows help teams prepare orders faster and more accurately.",
      },
    ],

    metrics: [
      {
        value: "1",
        label: "Central Dashboard",
      },
      {
        value: "-60%",
        label: "Missed Orders",
      },
      {
        value: "Real-Time",
        label: "Inventory Visibility",
      },
      {
        value: "+35%",
        label: "Kitchen Efficiency",
      },
    ],

    integrations: [
      "Delivery Platforms",
      "UPI Payments",
      "Kitchen Printer",
      "Receipt Printer",
      "Barcode Scanner",
      "Cloud Backup",
      "GST Billing",
    ],

    screenshots: [
      {
        title: "Central Order Dashboard",
        image: "/Images/screens/cloud-dashboard.webp",
      },
      {
        title: "Multi Brand Management",
        image: "/Images/screens/cloud-brands.webp",
      },
      {
        title: "Kitchen Operations",
        image: "/Images/screens/cloud-kitchen.webp",
      },
      {
        title: "Inventory Reports",
        image: "/Images/screens/cloud-inventory.webp",
      },
    ],

    faqs: [
      {
        question: "Can I manage multiple brands from one kitchen?",
        answer:
          "Yes. Manage separate menus, pricing, and operations for multiple brands through one centralized dashboard.",
      },
      {
        question: "Can I monitor inventory across all brands?",
        answer:
          "Yes. Inventory updates automatically as orders are processed, giving you complete stock visibility.",
      },
      {
        question: "Can multiple kitchen stations work together?",
        answer:
          "Yes. Orders are automatically assigned to the appropriate preparation station for efficient workflow management.",
      },
      {
        question: "Does it work offline?",
        answer:
          "Yes. Billing and kitchen operations continue even during internet interruptions, with automatic synchronization once connectivity returns.",
      },
      {
        question: "Can I monitor sales and reports?",
        answer:
          "Yes. Access real-time sales, inventory, kitchen, and performance reports from a centralized dashboard.",
      },
      {
        question: "Does it support GST billing?",
        answer:
          "Yes. Generate GST-compliant invoices and comprehensive tax reports automatically.",
      },
    ],

    cta: {
      title: "Scale Your Cloud Kitchen Operations",
      description:
        "Discover how iMaker Cloud Kitchen POS helps you manage multiple brands, streamline kitchen operations, and deliver orders more efficiently.",
      primaryButton: {
        text: "Book Free Demo",
        link: "/contact",
      },
      secondaryButton: {
        text: "Talk to Sales",
        link: "/contact",
      },
    },
  },
  {
    id: "food-truck-pos-software",

    seo: {
      title: "Food Truck POS Software for Mobile Food Businesses | iMaker POS",
      description:
        "Run your food truck or small food outlet with fast billing, offline support, inventory management, and real-time sales reporting using iMaker POS.",
      keywords: [
        "Food Truck POS Software",
        "Mobile POS",
        "Food Cart Billing Software",
        "Food Truck Billing System",
        "Portable POS",
      ],
    },

    card: {
      title: "Food Truck",
      description:
        "Run your food truck or small food outlet with fast billing, offline support, inventory management, and real-time sales reporting using iMaker POS.",
      image: "/Images/food-truck.png",
    },

    hero: {
      title: "Food Truck POS Software",
      subtitle: "Built for Food Trucks & Small Outlets",
      tagline: "Take your business anywhere.",
      description:
        "Whether you're serving from a food truck, kiosk, or pop-up stall, iMaker POS gives you everything you need to bill quickly, manage inventory, and keep operations running smoothly—even without internet.",
      image: "/Images/truck.png",

      primaryCTA: {
        text: "Book Free Demo",
        link: "/contact",
      },

      secondaryCTA: {
        text: "Watch Demo",
        link: "/demo",
      },
    },

    idealFor: [
      "Food Trucks",
      "Food Carts",
      "Pop-up Stores",
      "Street Food Vendors",
      "Festival Food Stalls",
      "Small Food Outlets",
    ],

    challenges: [
      {
        title: "Unstable Internet",
        description:
          "Outdoor locations often experience poor internet connectivity, interrupting billing.",
      },
      {
        title: "Limited Working Space",
        description:
          "Small workspaces require a simple and efficient billing system.",
      },
      {
        title: "Daily Inventory Tracking",
        description:
          "Managing stock manually while moving between locations is time-consuming.",
      },
      {
        title: "Cash Reconciliation",
        description:
          "Tracking daily sales and payments manually increases accounting errors.",
      },
    ],

    solution: {
      title: "Simple POS Built for Mobile Businesses",
      description:
        "iMaker Food Truck POS combines offline billing, inventory tracking, payment collection, and daily sales reporting into one lightweight solution designed for businesses on the move.",
    },

    modules: [
      "Quick Billing",
      "Offline Billing",
      "Menu Management",
      "Inventory Management",
      "GST Billing",
      "Sales Reports",
      "Expense Tracking",
      "Customer Management",
      "Payment Management",
      "Daily Closing Reports",
    ],

    features: [
      {
        icon: "WifiOff",
        title: "Offline Billing",
        description:
          "Continue billing without internet and sync data automatically once you're back online.",
      },
      {
        icon: "Zap",
        title: "Quick Billing",
        description:
          "Generate bills in seconds using a simple interface designed for fast-moving businesses.",
      },
      {
        icon: "Boxes",
        title: "Inventory Tracking",
        description:
          "Track ingredient consumption and receive alerts before stock runs out.",
      },
      {
        icon: "BarChart3",
        title: "Daily Sales Reports",
        description:
          "Monitor daily revenue, payment methods, and best-selling items from anywhere.",
      },
    ],

    workflow: [
      {
        title: "Take Customer Order",
        description:
          "Select menu items quickly using a simple touch-friendly interface.",
      },
      {
        title: "Generate Bill",
        description:
          "Create invoices instantly, even when there is no internet connection.",
      },
      {
        title: "Receive Payment",
        description:
          "Accept Cash, UPI, Card, Wallets, or mixed payment methods.",
      },
      {
        title: "Update Inventory",
        description:
          "Inventory is automatically adjusted after every completed sale.",
      },
      {
        title: "View Daily Reports",
        description:
          "Review sales, inventory, and payment summaries before closing the day.",
      },
    ],

    benefits: [
      {
        title: "Work Anywhere",
        description:
          "Run your business confidently with reliable offline billing support.",
      },
      {
        title: "Serve Customers Faster",
        description: "Reduce waiting time with a streamlined billing process.",
      },
      {
        title: "Stay in Control",
        description:
          "Track inventory, payments, and sales without manual record keeping.",
      },
      {
        title: "Grow with Confidence",
        description:
          "Access business reports that help you make better operational decisions.",
      },
    ],

    metrics: [
      {
        value: "<10 Min",
        label: "Setup Time",
      },
      {
        value: "100%",
        label: "Offline Billing",
      },
      {
        value: "Real-Time",
        label: "Sales Reports",
      },
      {
        value: "+30%",
        label: "Billing Speed",
      },
    ],

    integrations: [
      "UPI Payments",
      "Bluetooth Printer",
      "Thermal Printer",
      "Barcode Scanner",
      "Cash Drawer",
      "Cloud Backup",
    ],

    screenshots: [
      {
        title: "Mobile Billing",
        image: "/Images/screens/truck-billing.webp",
      },
      {
        title: "Sales Dashboard",
        image: "/Images/screens/truck-dashboard.webp",
      },
      {
        title: "Inventory Tracking",
        image: "/Images/screens/truck-inventory.webp",
      },
      {
        title: "Daily Reports",
        image: "/Images/screens/truck-reports.webp",
      },
    ],

    faqs: [
      {
        question: "Does the POS work without internet?",
        answer:
          "Yes. Continue billing offline and automatically sync all transactions once internet connectivity is restored.",
      },
      {
        question: "Can I accept digital payments?",
        answer:
          "Yes. Accept Cash, UPI, Cards, Wallets, and multiple payment methods.",
      },
      {
        question: "Can I track inventory?",
        answer:
          "Yes. Inventory updates automatically after every sale, helping you avoid stock shortages.",
      },
      {
        question: "Is the software suitable for pop-up stores?",
        answer:
          "Yes. It's ideal for food trucks, kiosks, pop-up restaurants, and temporary food stalls.",
      },
      {
        question: "Can I view daily sales reports?",
        answer:
          "Yes. Monitor daily sales, payment summaries, and inventory directly from the dashboard.",
      },
      {
        question: "Does it support GST billing?",
        answer:
          "Yes. Generate GST-compliant invoices and tax reports automatically.",
      },
    ],

    cta: {
      title: "Take Your Business Anywhere",
      description:
        "Experience a POS designed for mobile food businesses with fast billing, offline support, and real-time business insights.",
      primaryButton: {
        text: "Book Free Demo",
        link: "/contact",
      },
      secondaryButton: {
        text: "Talk to Sales",
        link: "/contact",
      },
    },
  },
];

// Get all
export const getAllSolutions = () => {
  return SOLUTIONS;
};

export const getAllSolutionsList = () => {
  return SOLUTIONS.map(({ id, card }) => ({
    id,
    ...card,
  }));
};

// Get by ID
export const getSolutionById = (id) => {
  const solution = SOLUTIONS.find((solution) => solution.id === id);
  if (!solution) return null;

  const { card, ...details } = solution;
  return details;
};
