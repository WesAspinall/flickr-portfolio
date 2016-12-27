function AppSidebarCtrl() {
  var ctrl = this;

  ctrl.tags = [{
    label: 'All contacts',
    icon: 'star',
    state: 'none'
  }, {
    label: 'Contact',
    icon: 'people',
    state: 'contact'
  }, {
    label: 'Blog',
    icon: 'child_care',
    state: 'family'
  }];
  
  ctrl.socialLinks = [{
    label: 'IG',
    icon: 'star',
    state: 'none'
  }, {
    label: 'Twitter',
    icon: 'people',
    state: 'contact'
  }, {
    label: 'GitHub',
    icon: 'child_care',
    state: 'family'
  }];

  ctrl.isNavCollapsed = true;
  ctrl.isCollapsed = false;
  ctrl.isCollapsedHorizontal = false;
}

angular
  .module('app')
  .controller('AppSidebarCtrl', AppSidebarCtrl);