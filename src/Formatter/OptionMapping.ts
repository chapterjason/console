/*
 * This file is part of the @mscs/console package.
 *
 * Copyright (c) 2021 media-service consulting & solutions GmbH
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import { Style } from "./Style";

export interface OptionMapping {
    bold: Style;

    underscore: Style;

    blink: Style;

    reverse: Style;

    conceal: Style;
}
