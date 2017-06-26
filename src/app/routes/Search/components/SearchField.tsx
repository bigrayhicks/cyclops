/**
 * The contents of this file are subject to the CYPHON Proprietary Non-
 * Commercial Registered User Use License Agreement (the "Agreement”). You
 * may not use this file except in compliance with the Agreement, a copy
 * of which may be found at https://github.com/dunbarcyber/cyclops/. The
 * developer of the CYPHON technology and platform is Dunbar Security
 * Systems, Inc.
 *
 * The CYPHON technology or platform are distributed under the Agreement on
 * an “AS IS” basis, WITHOUT WARRANTY OF ANY KIND, either express or
 * implied. See the Agreement for specific terms.
 *
 * Copyright (C) 2017 Dunbar Security Solutions, Inc. All Rights Reserved.
 *
 * Contributor/Change Made By: ________________. [Only apply if changes
 * are made]
 */

// Vendor
import * as React from 'react';

// Local
import { Field } from '~/services/cyphon/types';

// --------------------------------------------------------------------------
// Interfaces/Types
// --------------------------------------------------------------------------

/** Properties of the SearchField component. */
interface Props {
  field: Field;
  onClick(field: Field): void;
}

// --------------------------------------------------------------------------
// Component
// --------------------------------------------------------------------------

/**
 * Displays the name of a search field to create a search filter from.
 */
export class SearchField extends React.Component<Props, {}> {
  /** Passes the field props to the onClick prop. */
  public onClick = (): void => {
    this.props.onClick(this.props.field);
  };

  public render() {
    return (
      <div>
        <button className="btn-basic" onClick={this.onClick}>
          <i className="fa fa-plus" />
        </button>
        {this.props.field.field_name}
      </div>
    );
  }
}