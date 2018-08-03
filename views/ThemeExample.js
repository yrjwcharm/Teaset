// ThemeExample.js

'use strict';

import React, {Component} from 'react';
import {View, ScrollView, ActivityIndicator} from 'react-native';

import {Theme, NavigationPage, ListRow, PullPicker} from 'teaset';

export default class ThemeExample extends NavigationPage {

  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'Theme',
    showBackButton: true,
  };

  changeTheme() {
    PullPicker.show(
      '选择主题',
      Object.keys(Theme.themes),
      -1,
      (item, index) => {
        Theme.set(Theme.themes[item]);
        this.navigator.popToTop();
      }
    );
  }

  renderPage() {
      const that = this;
      return (
          <ScrollView style={{flex: 1}}>
              <View style={{height: 20}}/>
              <ListRow title='Select theme' onPress={this.changeTheme} topSeparator='full' bottomSeparator='full'/>
          </ScrollView>
      );
  }

}
