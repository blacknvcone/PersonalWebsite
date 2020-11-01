export const MENUITEMS = [
   {
      title: 'Home', type: 'sub', children: [
         { path: '/layouts/agency', title: 'Agency', type: 'link' },
         { path: '/layouts/app1', title: 'App Landing1', type: 'link' },
         { path: '/layouts/app2', title: 'App Landing2', type: 'link', },
         { path: '/layouts/event', title: 'Event', type: 'link' },
         { path: '/layouts/gym', title: 'Gym', type: 'link' },
         { path: '/layouts/music', title: 'Music', type: 'link' },
         { path: '/layouts/resume', title: 'Resume', type: 'link' },
         { path: '/layouts/modern-sass', title: 'Sass1', type: 'link' },
         { path: '/layouts/enterprice-sass', title: 'Sass2', type: 'link' },
         { path: '/layouts/wedding', title: 'Wedding', type: 'link' },
         { path: '/layouts/yoga', title: 'Yoga', type: 'link' },
         { path: '/layouts/portfolioLayouts', title: 'Portfolio', type: 'link' }
      ],
   },
   {
      title: 'Features', megaMenu: true, megaMenuType: 'medium', type: 'sub', children: [
         {
            title: 'Header Style', type: 'link', children: [
               { path: '/features/header-light', title: 'Light Header', type: 'link' },
               { path: '/features/header-dark', title: 'Dark Header', type: 'link' },
               { path: '/features/header-transparent', title: 'Glass Header', type: 'link' },
               { path: '/features/header-right-navigation', title: 'Header Right Navigation', type: 'link' },
               { path: '/features/header-center-logo', title: 'Header Center Logo', type: 'link' }]
         },
         {
            title: 'Breadcrumb Style', type: 'link', children: [
               { path: '/features/breadcrumb-big-typography', title: 'Classic Type', type: 'link' },
               { path: '/features/breadcrumb-left', title: 'Breadcrumb Left', type: 'link' },
               { path: '/features/breadcrumb-right', title: 'Breadcrumb Right', type: 'link' },
               { path: '/features/breadcrumb-center', title: 'Breadcrumb Center', type: 'link' },
               { path: '/features/breadcrumb-dark', title: 'Breadcrumb Dark', type: 'link' },
               { path: '/features/breadcrumb-parallex-bg', title: 'Breadcrumb Parallex-Bg', type: 'link' },
               { path: '/features/breadcrumb-bg', title: 'Breadcrumb Bg', type: 'link' },
               { path: '/features/breadcrumb-gallery', title: 'Breadcrumb Gallery', type: 'link' },
               { path: '/features/breadcrumb-video', title: 'Breadcrumb Video', type: 'link' }]
         },
         {
            title: 'Footer Style', type: 'link', children: [
               { path: '/features/footer-default', title: 'Footer-Default', type: 'link' },
               { path: '/features/footer-light', title: 'Footer-Light', type: 'link' },
               { path: '/features/footer-dark', title: 'Footer-Dark', type: 'link' },
               { path: '/features/footer-light2', title: 'Footer Dark Light', type: 'link' },
               { path: '/features/footer-dark2', title: 'Footer Dark Gradient', type: 'link' },
               { path: '/features/footer-dark3', title: 'Footer Creative', type: 'link' }]

         },
         {
            title: 'Gallery', type: 'link', children: [
               { path: '/features/zoom-gallery', title: 'Zoom Gallery', type: 'link' },
               { path: '/features/form-popup', title: 'Form Popup', type: 'link' },
               { path: '/features/modal-popup', title: 'Modal Popup', type: 'link' },
               { path: '/features/youtube-popup', title: 'Youtube Popup', type: 'link' },
               { path: '/features/map-popup', title: 'Map Popup', type: 'link' }]
         }
      ]
   },
]
