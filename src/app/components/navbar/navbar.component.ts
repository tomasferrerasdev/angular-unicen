import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  navItems = [
    {
      path: '/',
      title: 'Home',
    },
    {
      path: '/about',
      title: 'About',
    },
    {
      path: '/pipes',
      title: 'Pipes',
    },
    {
      path: '/news',
      title: 'News',
    },
    {
      path: '/faq',
      title: 'FAQ',
    },
    {
      path: '/contact',
      title: 'Contact Us',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
