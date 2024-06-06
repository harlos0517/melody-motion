/* eslint-disable max-len */

/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/bookmark
 *
 * The &lt;bookmark&gt; element serves as a well-defined target for an incoming
 * simple XLink.
 */
export interface Bookmark {
  /**
   * The identifier for this bookmark, unique within this document.
   */
  id: IDValue[]
  /**
   * The element attribute specifies an element type for a descendant of the next
   * sibling element that is not a &lt;link&gt; or &lt;bookmark&gt; element. When not
   * present, the &lt;bookmark&gt; or &lt;link&gt; element refers to the next sibling
   * element in the MusicXML file.
   */
  element?: NMTOKENValue[]
  /**
   * The name for this bookmark.
   */
  name?: TokenValue[]
  /**
   * The position attribute specifies the position of the descendant element
   * specified by the element attribute, where the first position is 1. The position
   * attribute is ignored if the element attribute is not present.<br><br>For
   * instance, an element value of "beam" and a position value of "2" defines the
   * &lt;link&gt; or &lt;bookmark&gt; to refer to the second beam descendant of the
   * next sibling element that is not a &lt;link&gt; or &lt;bookmark&gt; element.
   * This is equivalent to an XPath test of [.//beam[2]] done in the context of the
   * sibling element.
   */
  position?: PositiveIntegerValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/credit-image
 *
 * The &lt;credit-image&gt; element is similar to the &lt;image&gt; element for a
 * &lt;direction&gt;. However, since the &lt;credit&gt; is not part of a measure,
 * the default-x and default-y attributes adjust the origin relative to the bottom
 * left-hand corner of the page.
 */
export interface CreditImage {
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the bottom left-hand corner of the specified page. Positive
   * x is right and negative x is left.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the bottom left-hand corner of the specified page. Positive y is up
   * and negative y is down.
   */
  defaultY?: TenthsValue[]
  /**
   * Indicates horizontal alignment to the left, center, or right of the image.
   * Default is implementation-dependent.
   */
  halign?: LeftCenterRightValue[]
  /**
   * Used to size and scale an image. The image should be scaled independently in X
   * and Y if both height and width are specified. If only height is specified, the
   * image should be scaled proportionally to fit in the specified Y dimension.
   */
  height?: TenthsValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down.
   */
  relativeY?: TenthsValue[]
  /**
   * The URL for the image file.
   */
  source?: AnyURIValue[]
  /**
   * The MIME type for the image file format. Typical choices include
   * application/postscript, image/gif, image/jpeg, image/png, and image/tiff.
   */
  type?: TokenValue[]
  /**
   * Indicates vertical alignment to the top, middle, or bottom of the image. The
   * default is implementation-dependent.
   */
  valign?: ValignImageValue[]
  /**
   * Used to size and scale an image. The image should be scaled independently in X
   * and Y if both height and width are specified. If only width is specified, the
   * image should be scaled proportionally to fit in the specified X dimension.
   */
  width?: TenthsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/credit-symbol
 *
 * The &lt;credit-symbol&gt; element is similar to the &lt;symbol&gt; element for a
 * &lt;direction&gt;. However, since the &lt;credit&gt; is not part of a measure,
 * the default-x and default-y attributes adjust the origin relative to the bottom
 * left-hand corner of the page. The enclosure is none if not specified.
 */
export interface CreditSymbol {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the bottom left-hand corner of the specified page. Positive
   * x is right and negative x is left.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the bottom left-hand corner of the specified page. Positive y is up
   * and negative y is down.
   */
  defaultY?: TenthsValue[]
  /**
   * The text-direction attribute is used to adjust and override the Unicode
   * bidirectional text algorithm, similar to the Directionality data category in the
   * <a href="https://www.w3.org/TR/2007/REC-its-20070403/#directionality">W3C
   * Internationalization Tag Set recommendation</a>. The default value is ltr. This
   * attribute is typically used by applications that store text in left-to-right
   * visual order rather than logical order. Such applications can use the lro value
   * to better communicate with other applications that more fully support
   * bidirectional text.
   */
  dir?: TextDirectionValue[]
  /**
   * Formatting of an enclosure around text or symbols.
   */
  enclosure?: EnclosureShapeValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * In cases where text extends over more than one line, horizontal alignment and
   * justify values can be different. The most typical case is for credits, such
   * as:<br><br><pre>Words and music by<br>  Pat Songwriter</pre><br>Typically this
   * type of credit is aligned to the right, so that the position information refers
   * to the right-most part of the text. But in this example, the text is
   * center-justified, not right-justified.<br><br>The halign attribute is used in
   * these situations. If it is not present, its value is the same as for the justify
   * attribute. For elements where a justify attribute is not allowed, the default is
   * implementation-dependent.
   */
  halign?: LeftCenterRightValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Indicates left, center, or right justification. The default value varies for
   * different elements. For elements where the justify attribute is present but the
   * halign attribute is not, the justify attribute indicates horizontal alignment as
   * well as justification.
   */
  justify?: LeftCenterRightValue[]
  /**
   * Specifies text tracking. Values are either normal, which allows flexibility of
   * letter-spacing for purposes of text justification. or a number representing the
   * number of ems to add between each letter. The number may be negative in order to
   * subtract space. The value is normal if not specified.
   */
  letterSpacing?: NumberOrNormalValue[]
  /**
   * Specifies text leading. Values are either normal or a number representing the
   * percentage of the current font height to use for leading. It is normal if not
   * specified. The exact normal value is implementation-dependent, but values
   * between 100 and 120 are recommended.
   */
  lineHeight?: NumberOrNormalValue[]
  /**
   * Number of lines to use when striking through text.
   */
  lineThrough?: NumberOfLinesValue[]
  /**
   * Number of lines to use when overlining text.
   */
  overline?: NumberOfLinesValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down.
   */
  relativeY?: TenthsValue[]
  /**
   * Used to rotate text around the alignment point specified by the halign and
   * valign attributes. Positive values are clockwise rotations, while negative
   * values are counter-clockwise rotations.
   */
  rotation?: RotationDegreesValue[]
  /**
   * Number of lines to use when underlining text.
   */
  underline?: NumberOfLinesValue[]
  /**
   * Indicates vertical alignment to the top, middle, bottom, or baseline of the
   * text. The default is implementation-dependent.
   */
  valign?: ValignValue[]
  /**
   * {@link SmuflGlyphNameValue
   */
  v: SmuflGlyphNameValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/credit-type
 *
 *
 */
export interface CreditType {
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/credit-words
 *
 * The &lt;credit-words&gt; element is similar to the &lt;words&gt; element for a
 * &lt;direction&gt;. However, since the &lt;credit&gt; is not part of a measure,
 * the default-x and default-y attributes adjust the origin relative to the bottom
 * left-hand corner of the page. The enclosure is none if not specified.
 */
export interface CreditWords {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the bottom left-hand corner of the specified page. Positive
   * x is right and negative x is left.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the bottom left-hand corner of the specified page. Positive y is up
   * and negative y is down.
   */
  defaultY?: TenthsValue[]
  /**
   * The text-direction attribute is used to adjust and override the Unicode
   * bidirectional text algorithm, similar to the Directionality data category in the
   * <a href="https://www.w3.org/TR/2007/REC-its-20070403/#directionality">W3C
   * Internationalization Tag Set recommendation</a>. The default value is ltr. This
   * attribute is typically used by applications that store text in left-to-right
   * visual order rather than logical order. Such applications can use the lro value
   * to better communicate with other applications that more fully support
   * bidirectional text.
   */
  dir?: TextDirectionValue[]
  /**
   * Formatting of an enclosure around text or symbols.
   */
  enclosure?: EnclosureShapeValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * In cases where text extends over more than one line, horizontal alignment and
   * justify values can be different. The most typical case is for credits, such
   * as:<br><br><pre>Words and music by<br>  Pat Songwriter</pre><br>Typically this
   * type of credit is aligned to the right, so that the position information refers
   * to the right-most part of the text. But in this example, the text is
   * center-justified, not right-justified.<br><br>The halign attribute is used in
   * these situations. If it is not present, its value is the same as for the justify
   * attribute. For elements where a justify attribute is not allowed, the default is
   * implementation-dependent.
   */
  halign?: LeftCenterRightValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Indicates left, center, or right justification. The default value varies for
   * different elements. For elements where the justify attribute is present but the
   * halign attribute is not, the justify attribute indicates horizontal alignment as
   * well as justification.
   */
  justify?: LeftCenterRightValue[]
  /**
   * Specifies text tracking. Values are either normal, which allows flexibility of
   * letter-spacing for purposes of text justification. or a number representing the
   * number of ems to add between each letter. The number may be negative in order to
   * subtract space. The value is normal if not specified.
   */
  letterSpacing?: NumberOrNormalValue[]
  /**
   * Specifies text leading. Values are either normal or a number representing the
   * percentage of the current font height to use for leading. It is normal if not
   * specified. The exact normal value is implementation-dependent, but values
   * between 100 and 120 are recommended.
   */
  lineHeight?: NumberOrNormalValue[]
  /**
   * Number of lines to use when striking through text.
   */
  lineThrough?: NumberOfLinesValue[]
  /**
   * Number of lines to use when overlining text.
   */
  overline?: NumberOfLinesValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down.
   */
  relativeY?: TenthsValue[]
  /**
   * Used to rotate text around the alignment point specified by the halign and
   * valign attributes. Positive values are clockwise rotations, while negative
   * values are counter-clockwise rotations.
   */
  rotation?: RotationDegreesValue[]
  /**
   * Number of lines to use when underlining text.
   */
  underline?: NumberOfLinesValue[]
  /**
   * Indicates vertical alignment to the top, middle, bottom, or baseline of the
   * text. The default is implementation-dependent.
   */
  valign?: ValignValue[]
  /**
   * Specifies the language used in the element content. It is Italian ("it") if not
   * specified.
   */
  xmlLang?: XmlLangValue[]
  /**
   * Indicates whether white space should be preserved by applications.
   */
  xmlSpace?: XmlSpaceValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/link
 *
 * The &lt;link&gt; element serves as an outgoing simple XLink. If a relative link
 * is used within a document that is part of a compressed MusicXML file, the link
 * is relative to the root folder of the zip file.
 */
export interface Link {
  /**
   * The href attribute provides the data that allows an application to find a remote
   * resource or resource fragment. See the <a
   * href="https://www.w3.org/TR/xlink11/#link-locators">definition in the XML
   * Linking Language recommendation</a>.
   */
  xlinkHref: AnyURIValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the start of the entire current measure, at either the left
   * barline or the start of the system. Positive x is right and negative x is
   * left.<br><br>This attribute provides higher-resolution positioning data than the
   * &lt;offset&gt; element. Applications reading a MusicXML file that can understand
   * both features should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * The element attribute specifies an element type for a descendant of the next
   * sibling element that is not a &lt;link&gt; or &lt;bookmark&gt; element. When not
   * present, the &lt;bookmark&gt; or &lt;link&gt; element refers to the next sibling
   * element in the MusicXML file.
   */
  element?: NMTOKENValue[]
  /**
   * The name of this link.
   */
  name?: TokenValue[]
  /**
   * The position attribute specifies the position of the descendant element
   * specified by the element attribute, where the first position is 1. The position
   * attribute is ignored if the element attribute is not present.<br><br>For
   * instance, an element value of "beam" and a position value of "2" defines the
   * &lt;link&gt; or &lt;bookmark&gt; to refer to the second beam descendant of the
   * next sibling element that is not a &lt;link&gt; or &lt;bookmark&gt; element.
   * This is equivalent to an XPath test of [.//beam[2]] done in the context of the
   * sibling element.
   */
  position?: PositiveIntegerValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * The actuate attribute is used to communicate the desired timing of traversal
   * from the starting resource to the ending resource. The default value is
   * onRequest. See the <a
   * href="https://www.w3.org/TR/xlink11/#link-behaviors">definition in the XML
   * Linking Language recommendation</a>.
   */
  xlinkActuate?: XlinkActuateValue[]
  /**
   * The role attribute indicates a property of the link. See the <a
   * href="https://www.w3.org/TR/xlink11/#link-semantics">definition in the XML
   * Linking Language recommendation</a>.
   */
  xlinkRole?: TokenValue[]
  /**
   * The show attribute is used to communicate the desired presentation of the ending
   * resource on traversal from the starting resource. The default value is replace.
   * See the <a href="https://www.w3.org/TR/xlink11/#link-behaviors">definition in
   * the XML Linking Language recommendation</a>.
   */
  xlinkShow?: XlinkShowValue[]
  /**
   * The title attribute describes the meaning of a link or resource in a
   * human-readable fashion. See the <a
   * href="https://www.w3.org/TR/xlink11/#link-semantics">definition in the XML
   * Linking Language recommendation</a>.
   */
  xlinkTitle?: TokenValue[]
  /**
   * The type attribute identifies XLink element types. In MusicXML, the value is
   * always simple. See the <a
   * href="https://www.w3.org/TR/xlink11/#link-types">definition in the XML Linking
   * Language recommendation</a>.
   */
  xlinkType?: XlinkTypeValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/credit
 *
 * The &lt;credit&gt; element represents the appearance of the title, composer,
 * arranger, lyricist, copyright, dedication, and other text, symbols, and graphics
 * that commonly appear on the first page of a score. The &lt;credit-words&gt;,
 * &lt;credit-symbol&gt;, and &lt;credit-image&gt; elements are similar to the
 * &lt;words&gt;, &lt;symbol&gt;, and &lt;image&gt; elements for directions.
 * However, since the credit is not part of a measure, the default-x and default-y
 * attributes adjust the origin relative to the bottom left-hand corner of the
 * page. The enclosure for &lt;credit-words&gt; and &lt;credit-symbol&gt; is none
 * if not specified.
 */
export interface Credit {
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Specifies the page number where the &lt;credit&gt; should appear. This is an
   * integer value that starts with 1 for the first page. Its value is 1 if not
   * specified. Since credits occur before the music, these page numbers do not refer
   * to the page numbering specified by the &lt;print&gt; element's page-number
   * attribute.
   */
  page?: PositiveIntegerValue[]
  /**
   * {@link Bookmark}
   */
  bookmark?: Bookmark[]
  /**
   * {@link CreditImage}
   */
  creditImage?: CreditImage[]
  /**
   * {@link CreditSymbol}
   */
  creditSymbol?: CreditSymbol[]
  /**
   * {@link CreditType}
   */
  creditType?: CreditType[]
  /**
   * {@link CreditWords}
   */
  creditWords?: CreditWords[]
  /**
   * {@link Link}
   */
  link?: Link[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/distance
 *
 * The &lt;distance&gt; element represents standard distances between notation
 * elements in tenths.
 */
export interface Distance {
  /**
   * The type of distance being defined.
   */
  type: DistanceTypeValue[]
  /**
   * {@link TenthsValue
   */
  v: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/glyph
 *
 * The &lt;glyph&gt; element represents what Standard Music Font Layout (SMuFL)
 * glyph should be used for different variations of symbols that are semantically
 * identical. The type attribute specifies what type of glyph is being defined. The
 * element value specifies what SMuFL canonical glyph name to use, including
 * recommended stylistic alternates.
 */
export interface Glyph {
  /**
   * The type of glyph that is being defined.
   */
  type: GlyphTypeValue[]
  /**
   * {@link SmuflGlyphNameValue
   */
  v: SmuflGlyphNameValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/line-width
 *
 * The &lt;line-width&gt; element indicates the width of a specific line type in
 * tenths.
 */
export interface LineWidth {
  /**
   * The type of line whose width is being defined.
   */
  type: LineWidthTypeValue[]
  /**
   * {@link TenthsValue
   */
  v: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/note-size
 *
 * The &lt;note-size&gt; element indicates the numeric percentage of the regular
 * note size to use for notes with cue and large size, as defined in the
 * &lt;type&gt; element. A value of 100 would be identical to the size of a regular
 * note as defined by the music font.
 */
export interface NoteSize {
  /**
   * The type of note size being defined.
   */
  type: NoteSizeTypeValue[]
  /**
   * {@link NonNegativeDecimalValue
   */
  v: NonNegativeDecimalValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/other-appearance
 *
 * The &lt;other-appearance&gt; element is used to define any graphical settings
 * not yet in the current version of the MusicXML format. This allows extended
 * representation, though without application interoperability.
 */
export interface OtherAppearance {
  /**
   * The appearance type being specified.
   */
  type: TokenValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/appearance
 *
 * The &lt;appearance&gt; element controls general graphical settings for the
 * music's final form appearance on a printed page of display. This includes
 * support for line widths, definitions for note sizes, standard distances between
 * notation elements, and Standard Music Font Layout (SMuFL) glyphs, plus an
 * extension element for other aspects of appearance.
 */
export interface Appearance {
  /**
   * {@link Distance}
   */
  distance?: Distance[]
  /**
   * {@link Glyph}
   */
  glyph?: Glyph[]
  /**
   * {@link LineWidth}
   */
  lineWidth?: LineWidth[]
  /**
   * {@link NoteSize}
   */
  noteSize?: NoteSize[]
  /**
   * {@link OtherAppearance}
   */
  otherAppearance?: OtherAppearance[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/concert-score
 *
 * The presence of a &lt;concert-score&gt; element indicates that a score is
 * displayed in concert pitch. It is used for scores that contain parts for
 * transposing instruments.
 */
export interface ConcertScore {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/lyric-font
 *
 * The &lt;lyric-font&gt; element specifies the default font for a particular name
 * and number of lyric.
 */
export interface LyricFont {
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * The lyric name for which this is the default, corresponding to the name
   * attribute in the &lt;lyric&gt; element.
   */
  name?: TokenValue[]
  /**
   * The lyric number for which this is the default, corresponding to the number
   * attribute in the &lt;lyric&gt; element.
   */
  number?: NMTOKENValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/lyric-language
 *
 * The &lt;lyric-language&gt; element specifies the default language for a
 * particular name and number of lyric.
 */
export interface LyricLanguage {
  /**
   * The default language for the specified lyric name and number.
   */
  xmlLang: XmlLangValue[]
  /**
   * The lyric name for which this is the default, corresponding to the name
   * attribute in the &lt;lyric&gt; element.
   */
  name?: TokenValue[]
  /**
   * The lyric number for which this is the default, corresponding to the number
   * attribute in the &lt;lyric&gt; element.
   */
  number?: NMTOKENValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/music-font
 *
 * The &lt;music-font&gt; element represents the default values for the music font
 * in the score.
 */
export interface MusicFont {
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/page-height
 *
 * The &lt;page-height&gt; element specifies the page height in tenths.
 */
export interface PageHeight {
  /**
   * {@link TenthsValue
   */
  v: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/bottom-margin
 *
 * The &lt;bottom-margin&gt; element specifies the bottom page margin in tenths.
 */
export interface BottomMargin {
  /**
   * {@link TenthsValue
   */
  v: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/left-margin
 *
 * The &lt;left-margin&gt; element specifies the left margin for the parent element
 * in tenths.
 */
export interface LeftMargin {
  /**
   * {@link TenthsValue
   */
  v: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/right-margin
 *
 * The &lt;right-margin&gt; element specifies the right margin for the parent
 * element in tenths.
 */
export interface RightMargin {
  /**
   * {@link TenthsValue
   */
  v: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/top-margin
 *
 * The &lt;top-margin&gt; element specifies the top page margin in tenths.
 */
export interface TopMargin {
  /**
   * {@link TenthsValue
   */
  v: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/page-margins
 *
 * The &lt;page-margins&gt; element specifies page margins in tenths either for
 * both even and odd pages, or via separate odd and even page number values.
 */
export interface PageMargins {
  /**
   * Specifies whether the margins apply to even pages, odd pages, or both. This
   * attribute is not needed when used as part of a &lt;print&gt; element. The value
   * is both if omitted when used in the &lt;defaults&gt; element.
   */
  type?: MarginTypeValue[]
  /**
   * {@link BottomMargin}
   */
  bottomMargin?: BottomMargin[]
  /**
   * {@link LeftMargin}
   */
  leftMargin?: LeftMargin[]
  /**
   * {@link RightMargin}
   */
  rightMargin?: RightMargin[]
  /**
   * {@link TopMargin}
   */
  topMargin?: TopMargin[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/page-width
 *
 * The &lt;page-width&gt; element specifies the page width in tenths.
 */
export interface PageWidth {
  /**
   * {@link TenthsValue
   */
  v: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/page-layout
 *
 * Page layout can be defined both in score-wide &lt;defaults&gt; and in the
 * &lt;print&gt; element. If no &lt;page-layout&gt; element is present in the
 * &lt;defaults&gt; element, default page layout values are chosen by the
 * application.
 */
export interface PageLayout {
  /**
   * {@link PageHeight}
   */
  pageHeight?: PageHeight[]
  /**
   * {@link PageMargins}
   */
  pageMargins?: PageMargins[]
  /**
   * {@link PageWidth}
   */
  pageWidth?: PageWidth[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/millimeters
 *
 * The &lt;millimeters&gt; element contains the number of millimeters that
 * correspond to the given number of tenths within the &lt;scaling&gt; element
 * formula.
 */
export interface Millimeters {
  /**
   * {@link MillimetersValue
   */
  v: MillimetersValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tenths
 *
 * The &lt;tenths&gt; element contains the number of tenths that correspond to the
 * given number of millimeters within the &lt;scaling&gt; element formula. Setting
 * this to 40 allows the &lt;millimeters&gt; element to specify the size of a
 * 5-line staff.
 */
export interface Tenths {
  /**
   * {@link TenthsValue
   */
  v: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/scaling
 *
 * Margins, page sizes, and distances are all measured in tenths to keep MusicXML
 * data in a consistent coordinate system as much as possible. The translation to
 * absolute units is done with the &lt;scaling&gt; element, which specifies how
 * many millimeters are equal to how many tenths. For a staff height of 7 mm,
 * &lt;millimeters&gt; would be set to 7 while &lt;tenths&gt; is set to 40. The
 * ability to set a formula rather than a single scaling factor helps avoid
 * roundoff errors.
 */
export interface Scaling {
  /**
   * {@link Millimeters}
   */
  millimeters?: Millimeters[]
  /**
   * {@link Tenths}
   */
  tenths?: Tenths[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/staff-distance
 *
 * The &lt;staff-distance&gt; element represents the vertical distance from the
 * bottom line of the previous staff in this system to the top line of the current
 * staff.
 */
export interface StaffDistance {
  /**
   * {@link TenthsValue
   */
  v: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/staff-layout
 *
 * The &lt;staff-layout&gt; element includes the vertical distance from the bottom
 * line of the previous staff in this system to the top line of the staff specified
 * by the number attribute.
 */
export interface StaffLayout {
  /**
   * Refers to staff numbers within the part, from top to bottom on the system. A
   * value of 1 is used if not present.
   */
  number?: StaffNumberValue[]
  /**
   * {@link StaffDistance}
   */
  staffDistance?: StaffDistance[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/system-distance
 *
 * The &lt;system-distance&gt; is measured from the bottom line of the previous
 * system to the top line of the current system. It is ignored for the first system
 * on a page.
 */
export interface SystemDistance {
  /**
   * {@link TenthsValue
   */
  v: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/left-divider
 *
 * The &lt;left-divider&gt; element indicates the presence or absence of a system
 * divider (also known as a system separation mark) displayed on the left side of
 * the page.
 */
export interface LeftDivider {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * In cases where text extends over more than one line, horizontal alignment and
   * justify values can be different. The most typical case is for credits, such
   * as:<br><br><pre>Words and music by<br>  Pat Songwriter</pre><br>Typically this
   * type of credit is aligned to the right, so that the position information refers
   * to the right-most part of the text. But in this example, the text is
   * center-justified, not right-justified.<br><br>The halign attribute is used in
   * these situations. If it is not present, its value is the same as for the justify
   * attribute. For elements where a justify attribute is not allowed, the default is
   * implementation-dependent.
   */
  halign?: LeftCenterRightValue[]
  /**
   * Specifies whether or not to print an object. It is yes if not specified.
   */
  printObject?: YesNoValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Indicates vertical alignment to the top, middle, bottom, or baseline of the
   * text. The default is implementation-dependent.
   */
  valign?: ValignValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/right-divider
 *
 * The &lt;right-divider&gt; element indicates the presence or absence of a system
 * divider (also known as a system separation mark) displayed on the right side of
 * the page.
 */
export interface RightDivider {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * In cases where text extends over more than one line, horizontal alignment and
   * justify values can be different. The most typical case is for credits, such
   * as:<br><br><pre>Words and music by<br>  Pat Songwriter</pre><br>Typically this
   * type of credit is aligned to the right, so that the position information refers
   * to the right-most part of the text. But in this example, the text is
   * center-justified, not right-justified.<br><br>The halign attribute is used in
   * these situations. If it is not present, its value is the same as for the justify
   * attribute. For elements where a justify attribute is not allowed, the default is
   * implementation-dependent.
   */
  halign?: LeftCenterRightValue[]
  /**
   * Specifies whether or not to print an object. It is yes if not specified.
   */
  printObject?: YesNoValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Indicates vertical alignment to the top, middle, bottom, or baseline of the
   * text. The default is implementation-dependent.
   */
  valign?: ValignValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/system-dividers
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/system-dividers.png"><br>The
 * &lt;system-dividers&gt; element indicates the presence or absence of system
 * dividers (also known as system separation marks) between systems displayed on
 * the same page. Dividers on the left and right side of the page are controlled by
 * the &lt;left-divider&gt; and &lt;right-divider&gt; elements respectively.
 */
export interface SystemDividers {
  /**
   * {@link LeftDivider}
   */
  leftDivider?: LeftDivider[]
  /**
   * {@link RightDivider}
   */
  rightDivider?: RightDivider[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/system-margins
 *
 * System margins are relative to the page margins. Positive values indent and
 * negative values reduce the margin size.
 */
export interface SystemMargins {
  /**
   * {@link LeftMargin}
   */
  leftMargin?: LeftMargin[]
  /**
   * {@link RightMargin}
   */
  rightMargin?: RightMargin[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/top-system-distance
 *
 * The &lt;top-system-distance&gt; is measured from the page's top margin to the
 * top line of the first system. It is ignored for all but the first system on a
 * page.
 */
export interface TopSystemDistance {
  /**
   * {@link TenthsValue
   */
  v: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/system-layout
 *
 * A system is a group of staves that are read and played simultaneously. The
 * &lt;system-layout&gt; element includes left and right margins and the vertical
 * distance from the previous system.
 */
export interface SystemLayout {
  /**
   * {@link SystemDistance}
   */
  systemDistance?: SystemDistance[]
  /**
   * {@link SystemDividers}
   */
  systemDividers?: SystemDividers[]
  /**
   * {@link SystemMargins}
   */
  systemMargins?: SystemMargins[]
  /**
   * {@link TopSystemDistance}
   */
  topSystemDistance?: TopSystemDistance[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/word-font
 *
 * The &lt;word-font&gt; element represents the default values for the word font in
 * the score.
 */
export interface WordFont {
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/defaults
 *
 * The &lt;defaults&gt; element specifies score-wide defaults for scaling; whether
 * or not the file is a concert score; layout; and default values for the music
 * font, word font, lyric font, and lyric language. Except for the
 * &lt;concert-score&gt; element, if any defaults are missing, the choice of what
 * to use is determined by the application.
 */
export interface Defaults {
  /**
   * {@link Appearance}
   */
  appearance?: Appearance[]
  /**
   * {@link ConcertScore}
   */
  concertScore?: ConcertScore[]
  /**
   * {@link LyricFont}
   */
  lyricFont?: LyricFont[]
  /**
   * {@link LyricLanguage}
   */
  lyricLanguage?: LyricLanguage[]
  /**
   * {@link MusicFont}
   */
  musicFont?: MusicFont[]
  /**
   * {@link PageLayout}
   */
  pageLayout?: PageLayout[]
  /**
   * {@link Scaling}
   */
  scaling?: Scaling[]
  /**
   * {@link StaffLayout}
   */
  staffLayout?: StaffLayout[]
  /**
   * {@link SystemLayout}
   */
  systemLayout?: SystemLayout[]
  /**
   * {@link WordFont}
   */
  wordFont?: WordFont[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/creator
 *
 * The &lt;creator&gt; element describes the creators of the score. This is similar
 * to the <a
 * href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/creator/">Dublin
 * Core creator element</a>.  The MusicXML format does not use the creator /
 * contributor distinction from Dublin Core.
 */
export interface Creator {
  /**
   * Distinguishes different creative contributions. Thus there can be multiple
   * &lt;creator&gt; elements within an &lt;identification&gt; element. Standard
   * values are composer, lyricist, and arranger. Other values may be used for
   * different types of creative roles. This attribute should usually be used even if
   * there is just a single &lt;creator&gt; element.
   */
  type?: TokenValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/encoder
 *
 * The &lt;encoder&gt; element contains information about who did the digital
 * encoding.
 */
export interface Encoder {
  /**
   * Standard values are music, words, and arrangement, but other types may be used.
   * This attribute is only needed when there are multiple &lt;encoder&gt; elements.
   */
  type?: TokenValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/encoding-date
 *
 * The &lt;encoding-date&gt; element specifies the date of the digital encoding.
 */
export interface EncodingDate {
  /**
   * {@link YyyyMmDdValue
   */
  v: YyyyMmDdValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/encoding-description
 *
 * The &lt;encoding-description&gt; element contains descriptive information about
 * the digital encoding that is not provided in the other &lt;encoding&gt; child
 * elements.
 */
export interface EncodingDescription {
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/software
 *
 * The &lt;software&gt; element specifies what software created the digital
 * encoding.
 */
export interface Software {
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/supports
 *
 * The &lt;supports&gt; element indicates if a MusicXML encoding supports a
 * particular MusicXML element. This is recommended for elements like &lt;beam&gt;,
 * &lt;stem&gt;, and &lt;accidental&gt;, where the absence of an element is
 * ambiguous if you do not know if the encoding supports that element. It also
 * allows programs to indicate support for specific attributes, or specific
 * attributes with specific values. This lets applications communicate, for
 * example, that all system and/or page breaks are contained in the MusicXML file.
 */
export interface Supports {
  /**
   * Indicates the element that is supported or not by the encoding.
   */
  element: NMTOKENValue[]
  /**
   * If yes, the absence of a particular element with a specified attribute or value
   * is meaningful. It indicates that this information is not present in the score.
   * If no, the absence is not meaningful because the encoding does not include this
   * type of information.
   */
  type: YesNoValue[]
  /**
   * Indicates a specific element attribute that is supported or not by the encoding.
   */
  attribute?: NMTOKENValue[]
  /**
   * Indicates a specific attribute value that is supported or not by the encoding.
   * Only used together with the attribute attribute.
   */
  value?: TokenValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/encoding
 *
 * The &lt;encoding&gt; element contains information about who did the digital
 * encoding, when, with what software, and in what aspects.
 */
export interface Encoding {
  /**
   * {@link Encoder}
   */
  encoder?: Encoder[]
  /**
   * {@link EncodingDate}
   */
  encodingDate?: EncodingDate[]
  /**
   * {@link EncodingDescription}
   */
  encodingDescription?: EncodingDescription[]
  /**
   * {@link Software}
   */
  software?: Software[]
  /**
   * {@link Supports}
   */
  supports?: Supports[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/miscellaneous-field
 *
 * If a program has other metadata not yet supported in the MusicXML format, each
 * type of metadata can go in a &lt;miscellaneous-field&gt; element.
 */
export interface MiscellaneousField {
  /**
   * Indicates the type of metadata the element content represents.
   */
  name: TokenValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/miscellaneous
 *
 * If a program has other metadata not yet supported in the MusicXML format, it can
 * go in the &lt;miscellaneous&gt; element. The &lt;miscellaneous&gt; element puts
 * each separate part of metadata into its own &lt;miscellaneous-field&gt; element.
 */
export interface Miscellaneous {
  /**
   * {@link MiscellaneousField}
   */
  miscellaneousField?: MiscellaneousField[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/relation
 *
 * The &lt;relation&gt; element describes a related resource for the music that is
 * encoded. This is similar to the <a
 * href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/relation/">Dublin
 * Core relation element</a>.
 */
export interface Relation {
  /**
   * Standard type values are music, words, and arrangement, but other types may be
   * used.
   */
  type?: TokenValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/rights
 *
 * The &lt;rights&gt; element contains copyright and other intellectual property
 * notices. This is similar to the <a
 * href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/rights/">Dublin
 * Core rights element</a>. Words, music, and derivatives can have different types,
 * so multiple &lt;rights&gt; elements with different type attributes are
 * supported.
 */
export interface Rights {
  /**
   * Standard type values are music, words, and arrangement, but other types may be
   * used. This attribute is only needed when there are multiple &lt;rights&gt
   * elements.
   */
  type?: TokenValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/source
 *
 * The &lt;source&gt; element describes the source for the music that is encoded.
 * This is similar to the <a
 * href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/source/">Dublin
 * Core source element</a>.
 */
export interface Source {
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/identification
 *
 * The &lt;Identification&gt; element contains basic metadata about the score. It
 * includes information that may apply at a score-wide, movement-wide, or part-wide
 * level. The &lt;creator&gt;, &lt;rights&gt;, &lt;source&gt;, and &lt;relation&gt
 * elements are based on <a
 * href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/">Dublin
 * Core</a>.
 */
export interface Identification {
  /**
   * {@link Creator}
   */
  creator?: Creator[]
  /**
   * {@link Encoding}
   */
  encoding?: Encoding[]
  /**
   * {@link Miscellaneous}
   */
  miscellaneous?: Miscellaneous[]
  /**
   * {@link Relation}
   */
  relation?: Relation[]
  /**
   * {@link Rights}
   */
  rights?: Rights[]
  /**
   * {@link Source}
   */
  source?: Source[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/movement-number
 *
 * The &lt;movement-number&gt; element specifies the number of a movement.
 */
export interface MovementNumber {
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/movement-title
 *
 * The &lt;movement-title&gt; element specifies the title of a movement, not
 * including its number.
 */
export interface MovementTitle {
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/clef-octave-change
 *
 * The &lt;clef-octave-change&gt; element is used for transposing clefs. A treble
 * clef for tenors would have a value of -1.
 */
export interface ClefOctaveChange {
  v: number
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/line
 *
 * Line numbers are counted from the bottom of the staff. They are only needed with
 * the G, F, and C signs in order to position a pitch correctly on the staff.
 * Standard values are 2 for the G sign (treble clef), 4 for the F sign (bass
 * clef), and 3 for the C sign (alto clef). Line values can be used to specify
 * positions outside the staff, such as a C clef positioned in the middle of a
 * grand staff.
 */
export interface Line {
  /**
   * {@link StaffLinePositionValue
   */
  v: StaffLinePositionValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/sign
 *
 * The &lt;sign&gt; element represents the clef symbol.
 */
export interface Sign {
  /**
   * {@link ClefSignValue
   */
  v: ClefSignValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/clef
 *
 * Clefs are represented by a combination of &lt;sign&gt;, &lt;line&gt;, and
 * &lt;clef-octave-change&gt; elements.
 */
export interface Clef {
  /**
   * Sometimes clefs are added to the staff in non-standard line positions, either to
   * indicate cue passages, or when there are multiple clefs present simultaneously
   * on one staff. In this situation, the additional attribute is set to "yes" and
   * the line value is ignored.
   */
  additional?: YesNoValue[]
  /**
   * Sometimes clefs at the start of a measure need to appear after the barline
   * rather than before, as for cues or for use after a repeated section. The
   * after-barline attribute is set to "yes" in this situation. This attribute is
   * ignored for mid-measure clefs.
   */
  afterBarline?: YesNoValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Specifies the staff number from top to bottom within the part. The value is 1 if
   * not present.
   */
  number?: StaffNumberValue[]
  /**
   * Specifies whether or not to print an object. It is yes if not specified.
   */
  printObject?: YesNoValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * The size attribute is used for clefs where the additional attribute is "yes". It
   * is typically used to indicate cue clefs.
   */
  size?: SymbolSizeValue[]
  /**
   * {@link ClefOctaveChange}
   */
  clefOctaveChange?: ClefOctaveChange[]
  /**
   * {@link Line}
   */
  line?: Line[]
  /**
   * {@link Sign}
   */
  sign?: Sign[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/directive
 *
 * Directives are like directions, but can be grouped together with attributes for
 * convenience. This is typically used for tempo markings at the beginning of a
 * piece of music. This element was deprecated in Version 2.0 in favor of the
 * &lt;direction&gt; element's directive attribute.
 */
export interface Directive {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the start of the entire current measure, at either the left
   * barline or the start of the system. Positive x is right and negative x is
   * left.<br><br>This attribute provides higher-resolution positioning data than the
   * &lt;offset&gt; element. Applications reading a MusicXML file that can understand
   * both features should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Specifies the language used in the element content. It is Italian ("it") if not
   * specified.
   */
  xmlLang?: XmlLangValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/divisions
 *
 * Musical notation duration is commonly represented as fractions. The
 * &lt;divisions&gt; element indicates how many divisions per quarter note are used
 * to indicate a note's duration. For example, if duration = 1 and divisions = 2,
 * this is an eighth note duration. Duration and divisions are used directly for
 * generating sound output, so they must be chosen to take tuplets into account.
 */
export interface Divisions {
  /**
   * {@link PositiveDivisionsValue
   */
  v: PositiveDivisionsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/footnote
 *
 * The &lt;footnote&gt; element specifies editorial information that appears in
 * footnotes in the printed score.
 */
export interface Footnote {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. If the parent is a
   * &lt;part-group&gt; element, the origin is changed relative to the start of the
   * first measure on the system. Otherwise, the origin is changed relative to the
   * left-hand side of the note or the musical position within the bar. Positive x is
   * right and negative x is left.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is down.
   */
  defaultY?: TenthsValue[]
  /**
   * The text-direction attribute is used to adjust and override the Unicode
   * bidirectional text algorithm, similar to the Directionality data category in the
   * <a href="https://www.w3.org/TR/2007/REC-its-20070403/#directionality">W3C
   * Internationalization Tag Set recommendation</a>. The default value is ltr. This
   * attribute is typically used by applications that store text in left-to-right
   * visual order rather than logical order. Such applications can use the lro value
   * to better communicate with other applications that more fully support
   * bidirectional text.
   */
  dir?: TextDirectionValue[]
  /**
   * Formatting of an enclosure around text or symbols.
   */
  enclosure?: EnclosureShapeValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * In cases where text extends over more than one line, horizontal alignment and
   * justify values can be different. The most typical case is for credits, such
   * as:<br><br><pre>Words and music by<br>  Pat Songwriter</pre><br>Typically this
   * type of credit is aligned to the right, so that the position information refers
   * to the right-most part of the text. But in this example, the text is
   * center-justified, not right-justified.<br><br>The halign attribute is used in
   * these situations. If it is not present, its value is the same as for the justify
   * attribute. For elements where a justify attribute is not allowed, the default is
   * implementation-dependent.
   */
  halign?: LeftCenterRightValue[]
  /**
   * Indicates left, center, or right justification. The default value varies for
   * different elements. For elements where the justify attribute is present but the
   * halign attribute is not, the justify attribute indicates horizontal alignment as
   * well as justification.
   */
  justify?: LeftCenterRightValue[]
  /**
   * Specifies text tracking. Values are either normal, which allows flexibility of
   * letter-spacing for purposes of text justification. or a number representing the
   * number of ems to add between each letter. The number may be negative in order to
   * subtract space. The value is normal if not specified.
   */
  letterSpacing?: NumberOrNormalValue[]
  /**
   * Specifies text leading. Values are either normal or a number representing the
   * percentage of the current font height to use for leading. It is normal if not
   * specified. The exact normal value is implementation-dependent, but values
   * between 100 and 120 are recommended.
   */
  lineHeight?: NumberOrNormalValue[]
  /**
   * Number of lines to use when striking through text.
   */
  lineThrough?: NumberOfLinesValue[]
  /**
   * Number of lines to use when overlining text.
   */
  overline?: NumberOfLinesValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down.
   */
  relativeY?: TenthsValue[]
  /**
   * Used to rotate text around the alignment point specified by the halign and
   * valign attributes. Positive values are clockwise rotations, while negative
   * values are counter-clockwise rotations.
   */
  rotation?: RotationDegreesValue[]
  /**
   * Number of lines to use when underlining text.
   */
  underline?: NumberOfLinesValue[]
  /**
   * Indicates vertical alignment to the top, middle, bottom, or baseline of the
   * text. The default is implementation-dependent.
   */
  valign?: ValignValue[]
  /**
   * Specifies the language used in the element content. It is Italian ("it") if not
   * specified.
   */
  xmlLang?: XmlLangValue[]
  /**
   * Indicates whether white space should be preserved by applications.
   */
  xmlSpace?: XmlSpaceValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/part-clef
 *
 * The &lt;part-clef&gt; element is used for transpositions from concert scores
 * that also include a change of clef, as for instruments such as bass clarinet.
 */
export interface PartClef {
  /**
   * {@link ClefOctaveChange}
   */
  clefOctaveChange?: ClefOctaveChange[]
  /**
   * {@link Line}
   */
  line?: Line[]
  /**
   * {@link Sign}
   */
  sign?: Sign[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/chromatic
 *
 * The &lt;chromatic&gt; element represents the number of semitones needed to get
 * from written to sounding pitch. This value does not include
 * &lt;octave-change&gt; values; the values for both elements need to be added to
 * the written pitch to get the correct sounding pitch.
 */
export interface Chromatic {
  /**
   * {@link SemitonesValue
   */
  v: SemitonesValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/diatonic
 *
 * The &lt;diatonic&gt; element specifies the number of pitch steps needed to go
 * from written to sounding pitch. This allows for correct spelling of enharmonic
 * transpositions. This value does not include &lt;octave-change&gt; values; the
 * values for both elements need to be added to the written pitch to get the
 * correct sounding pitch.
 */
export interface Diatonic {
  v: number
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/double
 *
 * If the &lt;double&gt; element is present, it indicates that the music is doubled
 * one octave from what is currently written.
 */
export interface Double {
  /**
   * If the above attribute is set to yes, the doubling is one octave above what is
   * written, as for mixed flute / piccolo parts in band literature. Otherwise the
   * doubling is one octave below what is written, as for mixed cello / bass parts in
   * orchestral literature.
   */
  above?: YesNoValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/octave-change
 *
 * The &lt;octave-change&gt; element indicates how many octaves to add to get from
 * written pitch to sounding pitch. The &lt;octave-change&gt; element should be
 * included when using transposition intervals of an octave or more, and should not
 * be present for intervals of less than an octave.
 */
export interface OctaveChange {
  v: number
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/part-transpose
 *
 * The child elements of the &lt;part-transpose&gt; element have the same meaning
 * as for the &lt;transpose&gt; element. However that meaning applies to a
 * transposed part created from the existing score file.
 */
export interface PartTranspose {
  /**
   * {@link Chromatic}
   */
  chromatic?: Chromatic[]
  /**
   * {@link Diatonic}
   */
  diatonic?: Diatonic[]
  /**
   * {@link Double}
   */
  double?: Double[]
  /**
   * {@link OctaveChange}
   */
  octaveChange?: OctaveChange[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/for-part
 *
 * The &lt;for-part&gt; element is used in a concert score to indicate the
 * transposition for a transposed part created from that score. It is only used in
 * score files that contain a &lt;concert-score&gt; element in the &lt;defaults&gt
 * element. This allows concert scores with transposed parts to be represented in a
 * single uncompressed MusicXML file.
 */
export interface ForPart {
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Allows a transposition to apply to only the specified staff in the part. If
   * absent, the transposition applies to all staves in the part. Per-staff
   * transposition is most often used in parts that represent multiple instruments.
   */
  number?: StaffNumberValue[]
  /**
   * {@link PartClef}
   */
  partClef?: PartClef[]
  /**
   * {@link PartTranspose}
   */
  partTranspose?: PartTranspose[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/instruments
 *
 * The &lt;instruments&gt; element is only used if more than one instrument is
 * represented in the part (e.g., oboe I and II where they play together most of
 * the time). If absent, a value of 1 is assumed.
 */
export interface Instruments {
  /**
   * {@link NonNegativeIntegerValue
   */
  v: NonNegativeIntegerValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/cancel
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/cancel.png"><br>The
 * &lt;cancel&gt; element indicates that the old key signature should be cancelled
 * before the new one appears. This will always happen when changing to C major or
 * A minor and need not be specified then. The &lt;cancel&gt; element value matches
 * the fifths value of the cancelled key signature (e.g., a cancel of -2 will
 * provide an explicit cancellation for changing from B flat major to F major).
 */
export interface Cancel {
  /**
   * Indicates where the cancellation appears relative to the new key signature. It
   * is left if not specified.
   */
  location?: CancelLocationValue[]
  /**
   * {@link FifthsValue
   */
  v: FifthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/fifths
 *
 * The &lt;fifths&gt; element represents the number of flats or sharps in a
 * traditional key signature. Negative numbers are used for flats and positive
 * numbers for sharps, reflecting the key's placement within the circle of fifths
 * (hence the element name).
 */
export interface Fifths {
  /**
   * {@link FifthsValue
   */
  v: FifthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/key-accidental
 *
 * Non-traditional key signatures are represented using a list of altered tones.
 * The &lt;key-accidental&gt; element indicates the accidental to be displayed in
 * the key signature, represented in the same manner as the &lt;accidental&gt
 * element. It is used for disambiguating microtonal accidentals. The different
 * element names indicate the different meaning of altering notes in a scale versus
 * altering a sounding pitch.
 */
export interface KeyAccidental {
  /**
   * Specifies a Standard Music Font Layout (SMuFL) accidental character by its
   * canonical glyph name.
   */
  smufl?: SmuflAccidentalGlyphNameValue[]
  /**
   * {@link AccidentalValueValue
   */
  v: AccidentalValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/key-alter
 *
 * Non-traditional key signatures are represented using a list of altered tones.
 * The &lt;key-alter&gt; element represents the alteration for a given pitch step,
 * represented with semitones in the same manner as the &lt;alter&gt; element. The
 * different element names indicate the different meaning of altering notes in a
 * scale versus altering a sounding pitch.
 */
export interface KeyAlter {
  /**
   * {@link SemitonesValue
   */
  v: SemitonesValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/key-octave
 *
 * The &lt;key-octave&gt; element specifies in which octave an element of a key
 * signature appears. The content specifies the octave value using the same values
 * as the &lt;display-octave&gt; element.
 */
export interface KeyOctave {
  /**
   * A positive integer that refers to the key signature element in left-to-right
   * order.
   */
  number: PositiveIntegerValue[]
  /**
   * If set to yes, then the number refers to the canceling key signature specified
   * by the &lt;cancel&gt; element in the parent &lt;key&gt; element. It cannot be
   * set to yes if there is no corresponding &lt;cancel&gt; element within the parent
   * &lt;key&gt; element. It is no if absent.
   */
  cancel?: YesNoValue[]
  /**
   * {@link OctaveValue
   */
  v: OctaveValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/key-step
 *
 * Non-traditional key signatures are represented using a list of altered tones.
 * The &lt;key-step&gt; element indicates the pitch step to be altered, represented
 * using the same names as in the &lt;step&gt; element. The different element names
 * indicate the different meaning of altering notes in a scale versus altering a
 * sounding pitch.
 */
export interface KeyStep {
  /**
   * {@link StepValue
   */
  v: StepValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/mode
 *
 * The &lt;mode&gt; element is used to specify major/minor and other mode
 * distinctions. Valid mode values include major, minor, dorian, phrygian, lydian,
 * mixolydian, aeolian, ionian, locrian, and none.
 */
export interface Mode {
  /**
   * {@link ModeValue
   */
  v: ModeValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/key
 *
 * The &lt;key&gt; element represents a key signature. Both traditional and
 * non-traditional key signatures are supported. Key signatures appear at the start
 * of each system unless the print-object attribute has been set to "no".
 */
export interface Key {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Allows a key signature to apply to only the specified staff in the part. If
   * absent, the key signature applies to all staves in the part.
   */
  number?: StaffNumberValue[]
  /**
   * Specifies whether or not to print an object. It is yes if not specified.
   */
  printObject?: YesNoValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * {@link Cancel}
   */
  cancel?: Cancel[]
  /**
   * {@link Fifths}
   */
  fifths?: Fifths[]
  /**
   * {@link KeyAccidental}
   */
  keyAccidental?: KeyAccidental[]
  /**
   * {@link KeyAlter}
   */
  keyAlter?: KeyAlter[]
  /**
   * {@link KeyOctave}
   */
  keyOctave?: KeyOctave[]
  /**
   * {@link KeyStep}
   */
  keyStep?: KeyStep[]
  /**
   * {@link Mode}
   */
  mode?: Mode[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/level
 *
 * The &lt;level&gt; element is used to specify editorial information for different
 * MusicXML elements. The content contains identifying and/or descriptive text
 * about the editorial status of the parent element.
 */
export interface Level {
  /**
   * Specifies whether or not brackets are put around a symbol for an editorial
   * indication. If not specified, it is left to application defaults.
   */
  bracket?: YesNoValue[]
  /**
   * Specifies whether or not parentheses are put around a symbol for an editorial
   * indication. If not specified, it is left to application defaults.
   */
  parentheses?: YesNoValue[]
  /**
   * If the reference attribute is yes, this indicates editorial information that is
   * for display only and should not affect playback. For instance, a modern edition
   * of older music may set reference="yes" on the attributes containing the music's
   * original clef, key, and time signature. It is no if not specified.
   */
  reference?: YesNoValue[]
  /**
   * Specifies the symbol size to use for an editorial indication. If not specified,
   * it is left to application defaults.
   */
  size?: SymbolSizeValue[]
  /**
   * Indicates whether the editorial information applies to the start of a series of
   * symbols, the end of a series of symbols, or a single symbol. It is single if not
   * specified for compatibility with earlier MusicXML versions.
   */
  type?: StartStopSingleValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/except-voice
 *
 * The &lt;except-voice&gt; element is used to specify a combination of slash
 * notation and regular notation. Any &lt;note&gt; elements that are in voices
 * specified by the &lt;except-voice&gt; elements are displayed in normal notation,
 * in addition to the slash notation that is always displayed.
 */
export interface ExceptVoice {
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/slash-dot
 *
 * The &lt;slash-dot&gt; element is used to specify any augmentation dots in the
 * note type used to display repetition marks.
 */
export interface SlashDot {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/slash-type
 *
 * The &lt;slash-type&gt; element indicates the graphical note type to use for the
 * display of repetition marks.
 */
export interface SlashType {
  /**
   * {@link NoteTypeValueValue
   */
  v: NoteTypeValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/beat-repeat
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/beat-repeat.png">
 */
export interface BeatRepeat {
  /**
   * Indicates the starting or stopping point of the section displaying the beat
   * repeat symbols.
   */
  type: StartStopValue[]
  /**
   * Specifies the number of slashes to use in the symbol. The value is 1 if not
   * specified.
   */
  slashes?: PositiveIntegerValue[]
  /**
   * Indicates whether or not to use dots as well (for instance, with mixed rhythm
   * patterns). The value is no if not specified.
   */
  useDots?: YesNoValue[]
  /**
   * {@link ExceptVoice}
   */
  exceptVoice?: ExceptVoice[]
  /**
   * {@link SlashDot}
   */
  slashDot?: SlashDot[]
  /**
   * {@link SlashType}
   */
  slashType?: SlashType[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/measure-repeat
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/measure-repeat.png">
 */
export interface MeasureRepeat {
  /**
   * Indicates the starting or stopping point of the section displaying the measure
   * repeat symbols.
   */
  type: StartStopValue[]
  /**
   * Specifies the number of slashes to use in the symbol. The value is 1 if not
   * specified.
   */
  slashes?: PositiveIntegerValue[]
  /**
   * {@link PositiveIntegerOrEmptyValue
   */
  v: PositiveIntegerOrEmptyValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/multiple-rest
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/multiple-rest.png">
 */
export interface MultipleRest {
  /**
   * Specifies whether the multiple rests uses the 1-bar / 2-bar / 4-bar rest
   * symbols, or a single shape. It is no if not specified.
   */
  useSymbols?: YesNoValue[]
  /**
   * {@link PositiveIntegerValue
   */
  v: PositiveIntegerValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/slash
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/slash.png">
 */
export interface Slash {
  /**
   * Indicates the starting or stopping point of the section displaying slash
   * notation.
   */
  type: StartStopValue[]
  /**
   * Indicates whether or not to use dots as well (for instance, with mixed rhythm
   * patterns). The value is no if not specified. This attribute only has effect if
   * use-stems is no.
   */
  useDots?: YesNoValue[]
  /**
   * If the slash is on every beat, use-stems is no (the default). To indicate
   * rhythms but not pitches, use-stems is set to yes.
   */
  useStems?: YesNoValue[]
  /**
   * {@link ExceptVoice}
   */
  exceptVoice?: ExceptVoice[]
  /**
   * {@link SlashDot}
   */
  slashDot?: SlashDot[]
  /**
   * {@link SlashType}
   */
  slashType?: SlashType[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/measure-style
 *
 * The &lt;measure-style&gt; element indicates a special way to print partial to
 * multiple measures within a part. This includes multiple rests over several
 * measures, repeats of beats, single, or multiple measures, and use of slash
 * notation.
 */
export interface MeasureStyle {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Allows a measure style to apply to only the specified staff in the part. If
   * absent, the measure style applies to all staves in the part.
   */
  number?: StaffNumberValue[]
  /**
   * {@link BeatRepeat}
   */
  beatRepeat?: BeatRepeat[]
  /**
   * {@link MeasureRepeat}
   */
  measureRepeat?: MeasureRepeat[]
  /**
   * {@link MultipleRest}
   */
  multipleRest?: MultipleRest[]
  /**
   * {@link Slash}
   */
  slash?: Slash[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/part-symbol
 *
 * The &lt;part-symbol&gt; element indicates how a symbol for a multi-staff part is
 * indicated in the score; brace is the default value.
 */
export interface PartSymbol {
  /**
   * Specifies the bottom staff of the symbol when it does not extend across the
   * entire part.
   */
  bottomStaff?: StaffNumberValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Specifies the top staff of the symbol when it does not extend across the entire
   * part.
   */
  topStaff?: StaffNumberValue[]
  /**
   * {@link GroupSymbolValueValue
   */
  v: GroupSymbolValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/capo
 *
 * The &lt;capo&gt; element indicates at which fret a capo should be placed on a
 * fretted instrument. This changes the open tuning of the strings specified by the
 * &lt;staff-tuning&gt; element by the specified number of half-steps.
 */
export interface Capo {
  /**
   * {@link NonNegativeIntegerValue
   */
  v: NonNegativeIntegerValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/line-detail
 *
 * If the &lt;staff-lines&gt; element is present, the appearance of each line may
 * be individually specified with a &lt;line-detail&gt; element.
 */
export interface LineDetail {
  /**
   * Indicates the staff line affected, numbered from bottom to top.
   */
  line: StaffLineValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Specifies if the line is solid, dashed, dotted, or wavy.
   */
  lineType?: LineTypeValue[]
  /**
   * Specifies whether or not to print an object. It is yes if not specified.
   */
  printObject?: YesNoValue[]
  /**
   * Staff line width in tenths.
   */
  width?: TenthsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/staff-lines
 *
 * The &lt;staff-lines&gt; element specifies the number of lines and is usually
 * used for a non 5-line staff. If the &lt;staff-lines&gt; element is present, the
 * appearance of each line may be individually specified with a &lt;line-detail&gt
 * element.
 */
export interface StaffLines {
  /**
   * {@link NonNegativeIntegerValue
   */
  v: NonNegativeIntegerValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/staff-size
 *
 * The &lt;staff-size&gt; element indicates how large a staff space is on this
 * staff, expressed as a percentage of the work's default scaling. Values less than
 * 100 make the staff space smaller while values over 100 make the staff space
 * larger. A &lt;staff-type&gt; of cue, ossia, or editorial implies a
 * &lt;staff-size&gt; of less than 100, but the exact value is
 * implementation-dependent unless specified here. Staff size affects staff height
 * only, not the relationship of the staff to the left and right margins.
 */
export interface StaffSize {
  /**
   * Specifies the percentage scaling that applies to the notation. Values less that
   * 100 make the notation smaller while values over 100 make the notation larger.
   */
  scaling?: NonNegativeDecimalValue[]
  /**
   * {@link NonNegativeDecimalValue
   */
  v: NonNegativeDecimalValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tuning-alter
 *
 * The &lt;tuning-alter&gt; element is represented like the &lt;alter&gt; element,
 * with a different name to reflect its different function in string tuning.
 */
export interface TuningAlter {
  /**
   * {@link SemitonesValue
   */
  v: SemitonesValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tuning-octave
 *
 * The &lt;tuning-octave&gt; element is represented like the &lt;octave&gt
 * element, with a different name to reflect its different function in string
 * tuning.
 */
export interface TuningOctave {
  /**
   * {@link OctaveValue
   */
  v: OctaveValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tuning-step
 *
 * The &lt;tuning-step&gt; element is represented like the &lt;step&gt; element,
 * with a different name to reflect its different function in string tuning.
 */
export interface TuningStep {
  /**
   * {@link StepValue
   */
  v: StepValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/staff-tuning
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/staff-tuning.png">
 */
export interface StaffTuning {
  /**
   * Indicates the staff line for this tuning, numbered from bottom to top.
   */
  line: StaffLineValue[]
  /**
   * {@link TuningAlter}
   */
  tuningAlter?: TuningAlter[]
  /**
   * {@link TuningOctave}
   */
  tuningOctave?: TuningOctave[]
  /**
   * {@link TuningStep}
   */
  tuningStep?: TuningStep[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/staff-type
 *
 * The &lt;staff-type&gt; element specifies different uses for the staff, as listed
 * in the staff-type data type.
 */
export interface StaffType {
  /**
   * {@link StaffTypeValue
   */
  v: StaffTypeValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/staff-details
 *
 * The &lt;staff-details&gt; element is used to indicate different types of staves.
 */
export interface StaffDetails {
  /**
   * Specifies the staff number from top to bottom within the part. The value is 1 if
   * not present.
   */
  number?: StaffNumberValue[]
  /**
   * Specifies whether or not to print an object. It is yes if not specified.
   */
  printObject?: YesNoValue[]
  /**
   * Controls whether or not spacing is left for an invisible note or object. It is
   * used only if no note, dot, or lyric is being printed. The value is yes (leave
   * spacing) if not specified.
   */
  printSpacing?: YesNoValue[]
  /**
   * Indicates whether to show tablature frets as numbers (0, 1, 2) or letters (a, b,
   * c). It is numbers if not specified.
   */
  showFrets?: ShowFretsValue[]
  /**
   * {@link Capo}
   */
  capo?: Capo[]
  /**
   * {@link LineDetail}
   */
  lineDetail?: LineDetail[]
  /**
   * {@link StaffLines}
   */
  staffLines?: StaffLines[]
  /**
   * {@link StaffSize}
   */
  staffSize?: StaffSize[]
  /**
   * {@link StaffTuning}
   */
  staffTuning?: StaffTuning[]
  /**
   * {@link StaffType}
   */
  staffType?: StaffType[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/staves
 *
 * The &lt;staves&gt; element is used if there is more than one staff represented
 * in the given part (e.g., 2 staves for typical piano parts). If absent, a value
 * of 1 is assumed. Staves are ordered from top to bottom in a part in numerical
 * order, with staff 1 above staff 2.
 */
export interface Staves {
  /**
   * {@link NonNegativeIntegerValue
   */
  v: NonNegativeIntegerValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/beat-type
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/beat-type.png"><br>The
 * &lt;beat-type&gt; element indicates the beat unit, as found in the denominator
 * of a time signature.
 */
export interface BeatType {
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/beats
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/beats.png"><br>The
 * &lt;beats&gt; element indicates the number of beats, as found in the numerator
 * of a time signature.
 */
export interface Beats {
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/time-relation
 *
 * The &lt;time-relation&gt; element indicates the symbol used to represent the
 * interchangeable aspect of dual time signatures, as specified in the
 * time-relation type.
 */
export interface TimeRelation {
  /**
   * {@link TimeRelationValue
   */
  v: TimeRelationValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/interchangeable
 *
 * The &lt;interchangeable&gt; element is used to represent the second in a pair of
 * interchangeable dual time signatures, such as the 6/8 in 3/4 (6/8).
 */
export interface Interchangeable {
  /**
   * Indicates how to display the arrangement between the &lt;beats&gt; and
   * &lt;beat-type&gt; values in the second of the dual time signatures.
   */
  separator?: TimeSeparatorValue[]
  /**
   * Indicates how to display the second of the dual time signatures, such as by
   * using common and cut time symbols or a single number display.
   */
  symbol?: TimeSymbolValue[]
  /**
   * {@link BeatType}
   */
  beatType?: BeatType[]
  /**
   * {@link Beats}
   */
  beats?: Beats[]
  /**
   * {@link TimeRelation}
   */
  timeRelation?: TimeRelation[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/senza-misura
 *
 * A &lt;senza-misura&gt; element explicitly indicates that no time signature is
 * present. The optional element content indicates the symbol to be used, if any,
 * such as an X. The &lt;time&gt; element's symbol attribute is not used when a
 * &lt;senza-misura&gt; element is present.
 */
export interface SenzaMisura {
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/time
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/time.png">
 */
export interface Time {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * In cases where text extends over more than one line, horizontal alignment and
   * justify values can be different. The most typical case is for credits, such
   * as:<br><br><pre>Words and music by<br>  Pat Songwriter</pre><br>Typically this
   * type of credit is aligned to the right, so that the position information refers
   * to the right-most part of the text. But in this example, the text is
   * center-justified, not right-justified.<br><br>The halign attribute is used in
   * these situations. If it is not present, its value is the same as for the justify
   * attribute. For elements where a justify attribute is not allowed, the default is
   * implementation-dependent.
   */
  halign?: LeftCenterRightValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Allows a time signature to apply to only the specified staff in the part. If
   * absent, the time signature applies to all staves in the part.
   */
  number?: StaffNumberValue[]
  /**
   * Specifies whether or not to print an object. It is yes if not specified.
   */
  printObject?: YesNoValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Indicates how to display the arrangement between the &lt;beats&gt; and
   * &lt;beat-type&gt; values in a time signature.
   */
  separator?: TimeSeparatorValue[]
  /**
   * Indicates how to display a time signature, such as by using common and cut time
   * symbols or a single number display.
   */
  symbol?: TimeSymbolValue[]
  /**
   * Indicates vertical alignment to the top, middle, bottom, or baseline of the
   * text. The default is implementation-dependent.
   */
  valign?: ValignValue[]
  /**
   * {@link BeatType}
   */
  beatType?: BeatType[]
  /**
   * {@link Beats}
   */
  beats?: Beats[]
  /**
   * {@link Interchangeable}
   */
  interchangeable?: Interchangeable[]
  /**
   * {@link SenzaMisura}
   */
  senzaMisura?: SenzaMisura[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/transpose
 *
 * The &lt;transpose&gt; element represents what must be added to a written pitch
 * to get a correct sounding pitch. It is used for encoding parts for transposing
 * instruments that are in written vs. concert pitch.
 */
export interface Transpose {
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Allows a transposition to apply to only the specified staff in the part. If
   * absent, the transposition applies to all staves in the part. Per-staff
   * transposition is most often used in parts that represent multiple instruments.
   */
  number?: StaffNumberValue[]
  /**
   * {@link Chromatic}
   */
  chromatic?: Chromatic[]
  /**
   * {@link Diatonic}
   */
  diatonic?: Diatonic[]
  /**
   * {@link Double}
   */
  double?: Double[]
  /**
   * {@link OctaveChange}
   */
  octaveChange?: OctaveChange[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/attributes
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/attributes.png">
 */
export interface Attributes {
  /**
   * {@link Clef}
   */
  clef?: Clef[]
  /**
   * {@link Directive}
   */
  directive?: Directive[]
  /**
   * {@link Divisions}
   */
  divisions?: Divisions[]
  /**
   * {@link Footnote}
   */
  footnote?: Footnote[]
  /**
   * {@link ForPart}
   */
  forPart?: ForPart[]
  /**
   * {@link Instruments}
   */
  instruments?: Instruments[]
  /**
   * {@link Key}
   */
  key?: Key[]
  /**
   * {@link Level}
   */
  level?: Level[]
  /**
   * {@link MeasureStyle}
   */
  measureStyle?: MeasureStyle[]
  /**
   * {@link PartSymbol}
   */
  partSymbol?: PartSymbol[]
  /**
   * {@link StaffDetails}
   */
  staffDetails?: StaffDetails[]
  /**
   * {@link Staves}
   */
  staves?: Staves[]
  /**
   * {@link Time}
   */
  time?: Time[]
  /**
   * {@link Transpose}
   */
  transpose?: Transpose[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/duration
 *
 * Duration is a positive number specified in division units. The &lt;duration&gt
 * element represents the intended duration vs. the notated duration (for instance,
 * differences in dotted notes in Baroque-era music). Differences in duration
 * specific to an interpretation or performance should be represented using the
 * &lt;note&gt; element's attack and release attributes.
 */
export interface Duration {
  /**
   * {@link PositiveDivisionsValue
   */
  v: PositiveDivisionsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/backup
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/backup.png"><br>The
 * &lt;backup&gt; and &lt;forward&gt; elements are required to coordinate multiple
 * voices in one part, including music on multiple staves. The &lt;backup&gt
 * element is generally used to move between voices and staves. Thus it does not
 * include &lt;voice&gt; or &lt;staff&gt; elements. Duration values should always
 * be positive, and should not cross measure boundaries or mid-measure changes in
 * the &lt;divisions&gt; value.
 */
export interface Backup {
  /**
   * {@link Duration}
   */
  duration?: Duration[]
  /**
   * {@link Footnote}
   */
  footnote?: Footnote[]
  /**
   * {@link Level}
   */
  level?: Level[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/bar-style
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/bar-style.png">
 */
export interface BarStyle {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * {@link BarStyleValue
   */
  v: BarStyleValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/coda
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/coda.png">
 */
export interface Coda {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * In cases where text extends over more than one line, horizontal alignment and
   * justify values can be different. The most typical case is for credits, such
   * as:<br><br><pre>Words and music by<br>  Pat Songwriter</pre><br>Typically this
   * type of credit is aligned to the right, so that the position information refers
   * to the right-most part of the text. But in this example, the text is
   * center-justified, not right-justified.<br><br>The halign attribute is used in
   * these situations. If it is not present, its value is the same as for the justify
   * attribute. For elements where a justify attribute is not allowed, the default is
   * implementation-dependent.
   */
  halign?: LeftCenterRightValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Specifies the exact Standard Music Font Layout (SMuFL) coda character used for
   * the coda sign, using its SMuFL canonical glyph name.
   */
  smufl?: SmuflCodaGlyphNameValue[]
  /**
   * Indicates vertical alignment to the top, middle, bottom, or baseline of the
   * text. The default is implementation-dependent.
   */
  valign?: ValignValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/ending
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/ending.png">
 */
export interface Ending {
  /**
   * Indicates which times the ending is played, similar to the time-only attribute
   * used by other elements. While this often represents the numeric values for what
   * is under the ending line, it can also indicate whether an ending is played
   * during a larger dal segno or da capo repeat. Single endings such as "1" or
   * comma-separated multiple endings such as "1,2" may be used.
   */
  number: EndingNumberValue[]
  /**
   * Typically, the start type is associated with the left barline of the first
   * measure in an ending. The stop and discontinue types are associated with the
   * right barline of the last measure in an ending. Stop is used when the ending
   * mark concludes with a downward jog, as is typical for first endings. Discontinue
   * is used when there is no downward jog, as is typical for second endings that do
   * not conclude a piece.
   */
  type: StartStopDiscontinueValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * Specifies the length of the ending jog.
   */
  endLength?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Specifies whether or not to print an object. It is yes if not specified.
   */
  printObject?: YesNoValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Distinguishes elements that are associated with a system rather than the
   * particular part where the element appears.
   */
  system?: SystemRelationValue[]
  /**
   * An offset that specifies where the start of the ending text appears, relative to
   * the start of the ending line.
   */
  textX?: TenthsValue[]
  /**
   * An offset that specifies where the baseline of ending text appears, relative to
   * the start of the ending line.
   */
  textY?: TenthsValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/fermata
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/fermata.png">
 */
export interface Fermata {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * The type describes whether a fermata is upright or inverted. It is upright if
   * not specified.
   */
  type?: UprightInvertedValue[]
  /**
   * {@link FermataShapeValue
   */
  v: FermataShapeValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/repeat
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/repeat.png">
 */
export interface Repeat {
  /**
   * The start of the repeat has a forward direction while the end of the repeat has
   * a backward direction.
   */
  direction: BackwardForwardValue[]
  /**
   * Indicates if the repeats are played after a jump due to a da capo or dal segno.
   * It is only used with backward repeats that are not part of an ending.
   */
  afterJump?: YesNoValue[]
  /**
   * Indicates the number of times the repeated section is played. It is only used
   * with backward repeats that are not part of an ending.
   */
  times?: NonNegativeIntegerValue[]
  /**
   * Indicates whether the repeat has winged extensions that appear above and below
   * the barline.
   */
  winged?: WingedValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/segno
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/segno.png">
 */
export interface Segno {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * In cases where text extends over more than one line, horizontal alignment and
   * justify values can be different. The most typical case is for credits, such
   * as:<br><br><pre>Words and music by<br>  Pat Songwriter</pre><br>Typically this
   * type of credit is aligned to the right, so that the position information refers
   * to the right-most part of the text. But in this example, the text is
   * center-justified, not right-justified.<br><br>The halign attribute is used in
   * these situations. If it is not present, its value is the same as for the justify
   * attribute. For elements where a justify attribute is not allowed, the default is
   * implementation-dependent.
   */
  halign?: LeftCenterRightValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Specifies the exact glyph to be used for the segno sign.
   */
  smufl?: SmuflSegnoGlyphNameValue[]
  /**
   * Indicates vertical alignment to the top, middle, bottom, or baseline of the
   * text. The default is implementation-dependent.
   */
  valign?: ValignValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/wavy-line
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/wavy-line.png"><br>Wavy
 * lines are one way to indicate trills and vibrato.
 */
export interface WavyLine {
  /**
   * Indicates if this is the start, stop, or continuation of the wavy line. The
   * value should be continue whenever used within a &lt;barline&gt; element.
   */
  type: StartStopContinueValue[]
  /**
   * If yes, the trill accelerates during playback. It is no if not specified.
   */
  accelerate?: YesNoValue[]
  /**
   * The number of distinct notes during playback, counting the starting note but not
   * the two-note turn. It is 4 if not specified.
   */
  beats?: TrillBeatsValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * The percentage of the way through the duration for landing on the last beat. It
   * is 75 if not specified.
   */
  lastBeat?: PercentValue[]
  /**
   * Distinguishes multiple wavy lines when they overlap in MusicXML document order.
   */
  number?: NumberLevelValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * The percentage of the way through the duration for landing on the second beat.
   * It is 25 if not specified.
   */
  secondBeat?: PercentValue[]
  /**
   * Specifies a particular wavy line glyph from the Standard Music Font Layout
   * (SMuFL) <a
   * href="https://www.w3.org/2021/03/smufl14/tables/multi-segment-lines.html">Multi-segment
   * lines</a> range.
   */
  smufl?: SmuflWavyLineGlyphNameValue[]
  /**
   * The starting note for playback, relative to the current note. It is upper if not
   * specified.
   */
  startNote?: StartNoteValue[]
  /**
   * The alternating note for playback, relative to the current note. It is whole if
   * not specified.
   */
  trillStep?: TrillStepValue[]
  /**
   * Specifies the two-note turn included at the end of the trill, if any. It is none
   * if not specified.
   */
  twoNoteTurn?: TwoNoteTurnValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/barline
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/barline.png">
 */
export interface Barline {
  /**
   * {@link Coda}
   */
  coda?: Coda[]
  /**
   * If the segno or coda attributes are used, the divisions attribute can be used to
   * indicate the number of divisions per quarter note. Otherwise sound and MIDI
   * generating programs may have to recompute this.
   */
  divisions?: DivisionsValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Barlines have a location attribute to make it easier to process barlines
   * independently of the other musical data in a score. It is often easier to set up
   * measures separately from entering notes. The location attribute must match where
   * the &lt;barline&gt; element occurs within the rest of the musical data in the
   * score. If location is left, it should be the first element in the measure, aside
   * from the &lt;print&gt;, &lt;bookmark&gt;, and &lt;link&gt; elements. If location
   * is right, it should be the last element, again with the possible exception of
   * the &lt;print&gt;, &lt;bookmark&gt;, and &lt;link&gt; elements. The default
   * value is right.
   */
  location?: RightLeftMiddleValue[]
  /**
   * {@link Segno}
   */
  segno?: Segno[]
  /**
   * {@link BarStyle}
   */
  barStyle?: BarStyle[]
  /**
   * {@link Ending}
   */
  ending?: Ending[]
  /**
   * {@link Fermata}
   */
  fermata?: Fermata[]
  /**
   * {@link Footnote}
   */
  footnote?: Footnote[]
  /**
   * {@link Level}
   */
  level?: Level[]
  /**
   * {@link Repeat}
   */
  repeat?: Repeat[]
  /**
   * {@link WavyLine}
   */
  wavyLine?: WavyLine[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/accordion-high
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/accordion-high.png"><br>The
 * &lt;accordion-high&gt; element indicates the presence of a dot in the high (4')
 * section of the registration symbol. This element is omitted if no dot is
 * present.
 */
export interface AccordionHigh {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/accordion-low
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/accordion-low.png"><br>The
 * &lt;accordion-low&gt; element indicates the presence of a dot in the low (16')
 * section of the registration symbol. This element is omitted if no dot is
 * present.
 */
export interface AccordionLow {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/accordion-middle
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/accordion-middle.png"><br>The
 * &lt;accordion-middle&gt; element indicates the presence of 1 to 3 dots in the
 * middle (8') section of the registration symbol. This element is omitted if no
 * dots are present.
 */
export interface AccordionMiddle {
  /**
   * {@link AccordionMiddleValue
   */
  v: AccordionMiddleValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/accordion-registration
 *
 * The &lt;accordion-registration&gt; element is used for accordion registration
 * symbols. These are circular symbols divided horizontally into high, middle, and
 * low sections that correspond to 4', 8', and 16' pipes. Each
 * &lt;accordion-high&gt;, &lt;accordion-middle&gt;, and &lt;accordion-low&gt
 * element represents the presence of one or more dots in the registration diagram.
 * An &lt;accordion-registration&gt; element needs to have at least one of the
 * child elements present.
 */
export interface AccordionRegistration {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the start of the entire current measure, at either the left
   * barline or the start of the system. Positive x is right and negative x is
   * left.<br><br>This attribute provides higher-resolution positioning data than the
   * &lt;offset&gt; element. Applications reading a MusicXML file that can understand
   * both features should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * In cases where text extends over more than one line, horizontal alignment and
   * justify values can be different. The most typical case is for credits, such
   * as:<br><br><pre>Words and music by<br>  Pat Songwriter</pre><br>Typically this
   * type of credit is aligned to the right, so that the position information refers
   * to the right-most part of the text. But in this example, the text is
   * center-justified, not right-justified.<br><br>The halign attribute is used in
   * these situations. If it is not present, its value is the same as for the justify
   * attribute. For elements where a justify attribute is not allowed, the default is
   * implementation-dependent.
   */
  halign?: LeftCenterRightValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Indicates vertical alignment to the top, middle, bottom, or baseline of the
   * text. The default is implementation-dependent.
   */
  valign?: ValignValue[]
  /**
   * {@link AccordionHigh}
   */
  accordionHigh?: AccordionHigh[]
  /**
   * {@link AccordionLow}
   */
  accordionLow?: AccordionLow[]
  /**
   * {@link AccordionMiddle}
   */
  accordionMiddle?: AccordionMiddle[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/bracket
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/bracket.png"><br>Brackets
 * are combined with words in a variety of modern directions. The line-type is
 * solid if not specified.
 */
export interface Bracket {
  /**
   * Specifies if there is a jog up or down (or both), an arrow, or nothing at the
   * start or end of the bracket.
   */
  lineEnd: LineEndValue[]
  /**
   * Indicates if this is the start, stop, or continuation of the bracket.
   */
  type: StartStopContinueValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * The length of dashes in a dashed line. Ignored if the corresponding line-type
   * attribute is not dashed.
   */
  dashLength?: TenthsValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the start of the entire current measure, at either the left
   * barline or the start of the system. Positive x is right and negative x is
   * left.<br><br>This attribute provides higher-resolution positioning data than the
   * &lt;offset&gt; element. Applications reading a MusicXML file that can understand
   * both features should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * Specifies the length of the jog if the line-end attribute is up or down.
   */
  endLength?: TenthsValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Specifies if the line is solid, dashed, dotted, or wavy.
   */
  lineType?: LineTypeValue[]
  /**
   * Distinguishes multiple brackets when they overlap in MusicXML document order.
   */
  number?: NumberLevelValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * The length of spaces in a dashed line. Ignored if the corresponding line-type
   * attribute is not dashed.
   */
  spaceLength?: TenthsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/damp
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/damp.png">
 */
export interface Damp {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the start of the entire current measure, at either the left
   * barline or the start of the system. Positive x is right and negative x is
   * left.<br><br>This attribute provides higher-resolution positioning data than the
   * &lt;offset&gt; element. Applications reading a MusicXML file that can understand
   * both features should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * In cases where text extends over more than one line, horizontal alignment and
   * justify values can be different. The most typical case is for credits, such
   * as:<br><br><pre>Words and music by<br>  Pat Songwriter</pre><br>Typically this
   * type of credit is aligned to the right, so that the position information refers
   * to the right-most part of the text. But in this example, the text is
   * center-justified, not right-justified.<br><br>The halign attribute is used in
   * these situations. If it is not present, its value is the same as for the justify
   * attribute. For elements where a justify attribute is not allowed, the default is
   * implementation-dependent.
   */
  halign?: LeftCenterRightValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Indicates vertical alignment to the top, middle, bottom, or baseline of the
   * text. The default is implementation-dependent.
   */
  valign?: ValignValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/damp-all
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/damp-all.png">
 */
export interface DampAll {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the start of the entire current measure, at either the left
   * barline or the start of the system. Positive x is right and negative x is
   * left.<br><br>This attribute provides higher-resolution positioning data than the
   * &lt;offset&gt; element. Applications reading a MusicXML file that can understand
   * both features should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * In cases where text extends over more than one line, horizontal alignment and
   * justify values can be different. The most typical case is for credits, such
   * as:<br><br><pre>Words and music by<br>  Pat Songwriter</pre><br>Typically this
   * type of credit is aligned to the right, so that the position information refers
   * to the right-most part of the text. But in this example, the text is
   * center-justified, not right-justified.<br><br>The halign attribute is used in
   * these situations. If it is not present, its value is the same as for the justify
   * attribute. For elements where a justify attribute is not allowed, the default is
   * implementation-dependent.
   */
  halign?: LeftCenterRightValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Indicates vertical alignment to the top, middle, bottom, or baseline of the
   * text. The default is implementation-dependent.
   */
  valign?: ValignValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/dashes
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/dashes.png">
 */
export interface Dashes {
  /**
   * Indicates if this is the start, stop, or continuation of the dashes.
   */
  type: StartStopContinueValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * The length of dashes in a dashed line.
   */
  dashLength?: TenthsValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the start of the entire current measure, at either the left
   * barline or the start of the system. Positive x is right and negative x is
   * left.<br><br>This attribute provides higher-resolution positioning data than the
   * &lt;offset&gt; element. Applications reading a MusicXML file that can understand
   * both features should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Distinguishes multiple dashes when they overlap in MusicXML document order.
   */
  number?: NumberLevelValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * The length of spaces in a dashed line.
   */
  spaceLength?: TenthsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/f
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/f.png">
 */
export interface F {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/ff
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/ff.png">
 */
export interface Ff {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/fff
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/fff.png">
 */
export interface Fff {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/ffff
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/ffff.png">
 */
export interface Ffff {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/fffff
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/fffff.png">
 */
export interface Fffff {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/ffffff
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/ffffff.png">
 */
export interface Ffffff {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/fp
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/fp.png">
 */
export interface Fp {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/fz
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/fz.png">
 */
export interface Fz {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/mf
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/mf.png">
 */
export interface Mf {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/mp
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/mp.png">
 */
export interface Mp {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/n
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/n.png">
 */
export interface N {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/other-dynamics
 *
 * The &lt;other-dynamics&gt; element allows other dynamic marks that are not
 * covered by combinations of the individual &lt;dynamics&gt; child elements.
 */
export interface OtherDynamics {
  /**
   * Indicates a particular Standard Music Font Layout (SMuFL) character using its
   * canonical glyph name. Sometimes this is a formatting choice, and sometimes this
   * is a refinement of the semantic meaning of an element.
   */
  smufl?: SmuflGlyphNameValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/p
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/p.png">
 */
export interface P {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pf
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/pf.png">
 */
export interface Pf {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pp
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/pp.png">
 */
export interface Pp {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/ppp
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/ppp.png">
 */
export interface Ppp {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pppp
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/pppp.png">
 */
export interface Pppp {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/ppppp
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/ppppp.png">
 */
export interface Ppppp {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pppppp
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/pppppp.png">
 */
export interface Pppppp {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/rf
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/rf.png">
 */
export interface Rf {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/rfz
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/rfz.png">
 */
export interface Rfz {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/sf
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/sf.png">
 */
export interface Sf {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/sffz
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/sffz.png">
 */
export interface Sffz {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/sfp
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/sfp.png">
 */
export interface Sfp {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/sfpp
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/sfpp.png">
 */
export interface Sfpp {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/sfz
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/sfz.png">
 */
export interface Sfz {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/sfzp
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/sfzp.png">
 */
export interface Sfzp {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/dynamics
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/dynamics.png">
 */
export interface Dynamics {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * Formatting of an enclosure around text or symbols.
   */
  enclosure?: EnclosureShapeValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * In cases where text extends over more than one line, horizontal alignment and
   * justify values can be different. The most typical case is for credits, such
   * as:<br><br><pre>Words and music by<br>  Pat Songwriter</pre><br>Typically this
   * type of credit is aligned to the right, so that the position information refers
   * to the right-most part of the text. But in this example, the text is
   * center-justified, not right-justified.<br><br>The halign attribute is used in
   * these situations. If it is not present, its value is the same as for the justify
   * attribute. For elements where a justify attribute is not allowed, the default is
   * implementation-dependent.
   */
  halign?: LeftCenterRightValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Number of lines to use when striking through text.
   */
  lineThrough?: NumberOfLinesValue[]
  /**
   * Number of lines to use when overlining text.
   */
  overline?: NumberOfLinesValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Number of lines to use when underlining text.
   */
  underline?: NumberOfLinesValue[]
  /**
   * Indicates vertical alignment to the top, middle, bottom, or baseline of the
   * text. The default is implementation-dependent.
   */
  valign?: ValignValue[]
  /**
   * {@link F}
   */
  f?: F[]
  /**
   * {@link Ff}
   */
  ff?: Ff[]
  /**
   * {@link Fff}
   */
  fff?: Fff[]
  /**
   * {@link Ffff}
   */
  ffff?: Ffff[]
  /**
   * {@link Fffff}
   */
  fffff?: Fffff[]
  /**
   * {@link Ffffff}
   */
  ffffff?: Ffffff[]
  /**
   * {@link Fp}
   */
  fp?: Fp[]
  /**
   * {@link Fz}
   */
  fz?: Fz[]
  /**
   * {@link Mf}
   */
  mf?: Mf[]
  /**
   * {@link Mp}
   */
  mp?: Mp[]
  /**
   * {@link N}
   */
  n?: N[]
  /**
   * {@link OtherDynamics}
   */
  otherDynamics?: OtherDynamics[]
  /**
   * {@link P}
   */
  p?: P[]
  /**
   * {@link Pf}
   */
  pf?: Pf[]
  /**
   * {@link Pp}
   */
  pp?: Pp[]
  /**
   * {@link Ppp}
   */
  ppp?: Ppp[]
  /**
   * {@link Pppp}
   */
  pppp?: Pppp[]
  /**
   * {@link Ppppp}
   */
  ppppp?: Ppppp[]
  /**
   * {@link Pppppp}
   */
  pppppp?: Pppppp[]
  /**
   * {@link Rf}
   */
  rf?: Rf[]
  /**
   * {@link Rfz}
   */
  rfz?: Rfz[]
  /**
   * {@link Sf}
   */
  sf?: Sf[]
  /**
   * {@link Sffz}
   */
  sffz?: Sffz[]
  /**
   * {@link Sfp}
   */
  sfp?: Sfp[]
  /**
   * {@link Sfpp}
   */
  sfpp?: Sfpp[]
  /**
   * {@link Sfz}
   */
  sfz?: Sfz[]
  /**
   * {@link Sfzp}
   */
  sfzp?: Sfzp[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/eyeglasses
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/eyeglasses.png"><br>The
 * &lt;eyeglasses&gt; element represents the eyeglasses symbol, common in
 * commercial music.
 */
export interface Eyeglasses {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the start of the entire current measure, at either the left
   * barline or the start of the system. Positive x is right and negative x is
   * left.<br><br>This attribute provides higher-resolution positioning data than the
   * &lt;offset&gt; element. Applications reading a MusicXML file that can understand
   * both features should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * In cases where text extends over more than one line, horizontal alignment and
   * justify values can be different. The most typical case is for credits, such
   * as:<br><br><pre>Words and music by<br>  Pat Songwriter</pre><br>Typically this
   * type of credit is aligned to the right, so that the position information refers
   * to the right-most part of the text. But in this example, the text is
   * center-justified, not right-justified.<br><br>The halign attribute is used in
   * these situations. If it is not present, its value is the same as for the justify
   * attribute. For elements where a justify attribute is not allowed, the default is
   * implementation-dependent.
   */
  halign?: LeftCenterRightValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Indicates vertical alignment to the top, middle, bottom, or baseline of the
   * text. The default is implementation-dependent.
   */
  valign?: ValignValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pedal-alter
 *
 * The &lt;pedal-alter&gt; element defines the chromatic alteration for a single
 * harp pedal.
 */
export interface PedalAlter {
  /**
   * {@link SemitonesValue
   */
  v: SemitonesValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pedal-step
 *
 * The &lt;pedal-step&gt; element defines the pitch step for a single harp pedal.
 */
export interface PedalStep {
  /**
   * {@link StepValue
   */
  v: StepValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pedal-tuning
 *
 * The &lt;pedal-tuning&gt; element specifies the tuning of a single harp pedal.
 */
export interface PedalTuning {
  /**
   * {@link PedalAlter}
   */
  pedalAlter?: PedalAlter[]
  /**
   * {@link PedalStep}
   */
  pedalStep?: PedalStep[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/harp-pedals
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/harp-pedals.png"><br>The
 * &lt;harp-pedals&gt; element represents harp pedal diagrams. The
 * &lt;pedal-step&gt; and &lt;pedal-alter&gt; elements use the same values as the
 * &lt;step&gt; and &lt;alter&gt; elements. For easiest reading, the
 * &lt;pedal-tuning&gt; elements should follow standard harp pedal order, with
 * &lt;pedal-step&gt; values of D, C, B, E, F, G, and A.
 */
export interface HarpPedals {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the start of the entire current measure, at either the left
   * barline or the start of the system. Positive x is right and negative x is
   * left.<br><br>This attribute provides higher-resolution positioning data than the
   * &lt;offset&gt; element. Applications reading a MusicXML file that can understand
   * both features should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * In cases where text extends over more than one line, horizontal alignment and
   * justify values can be different. The most typical case is for credits, such
   * as:<br><br><pre>Words and music by<br>  Pat Songwriter</pre><br>Typically this
   * type of credit is aligned to the right, so that the position information refers
   * to the right-most part of the text. But in this example, the text is
   * center-justified, not right-justified.<br><br>The halign attribute is used in
   * these situations. If it is not present, its value is the same as for the justify
   * attribute. For elements where a justify attribute is not allowed, the default is
   * implementation-dependent.
   */
  halign?: LeftCenterRightValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Indicates vertical alignment to the top, middle, bottom, or baseline of the
   * text. The default is implementation-dependent.
   */
  valign?: ValignValue[]
  /**
   * {@link PedalTuning}
   */
  pedalTuning?: PedalTuning[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/image
 *
 * The &lt;image&gt; element is used to include graphical images in a score.
 */
export interface Image {
  /**
   * The URL for the image file.
   */
  source: AnyURIValue[]
  /**
   * The MIME type for the image file format. Typical choices include
   * application/postscript, image/gif, image/jpeg, image/png, and image/tiff.
   */
  type: TokenValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * Indicates horizontal alignment to the left, center, or right of the image.
   * Default is implementation-dependent.
   */
  halign?: LeftCenterRightValue[]
  /**
   * Used to size and scale an image. The image should be scaled independently in X
   * and Y if both height and width are specified. If only height is specified, the
   * image should be scaled proportionally to fit in the specified Y dimension.
   */
  height?: TenthsValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Indicates vertical alignment to the top, middle, or bottom of the image. The
   * default is implementation-dependent.
   */
  valign?: ValignImageValue[]
  /**
   * Used to size and scale an image. The image should be scaled independently in X
   * and Y if both height and width are specified. If only width is specified, the
   * image should be scaled proportionally to fit in the specified X dimension.
   */
  width?: TenthsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/beat-unit
 *
 * The &lt;beat-unit&gt; element indicates the graphical note type to use in a
 * metronome mark.
 */
export interface BeatUnit {
  /**
   * {@link NoteTypeValueValue
   */
  v: NoteTypeValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/beat-unit-dot
 *
 * The &lt;beat-unit-dot&gt; element is used to specify any augmentation dots for a
 * metronome mark note.
 */
export interface BeatUnitDot {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/beat-unit-tied
 *
 * The &lt;beat-unit-tied&gt; element indicates a &lt;beat-unit&gt; within a
 * metronome mark that is tied to the preceding &lt;beat-unit&gt;. This allows two
 * or more tied notes to be associated with a per-minute value in a metronome mark,
 * whereas the &lt;metronome-tied&gt; element is restricted to metric relationship
 * marks.
 */
export interface BeatUnitTied {
  /**
   * {@link BeatUnit}
   */
  beatUnit?: BeatUnit[]
  /**
   * {@link BeatUnitDot}
   */
  beatUnitDot?: BeatUnitDot[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/metronome-arrows
 *
 * If the &lt;metronome-arrows&gt; element is present, it indicates that metric
 * modulation arrows are displayed on both sides of the metronome mark.
 */
export interface MetronomeArrows {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/metronome-beam
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/metronome-beam.png"><br>The
 * &lt;metronome-beam&gt; element works like the &lt;beam&gt; element in defining
 * metric relationships, but does not include all the attributes available in the
 * &lt;beam&gt; element.
 */
export interface MetronomeBeam {
  /**
   * Indicates eighth note through 1024th note beams using number values 1 thru 8
   * respectively. The default value is 1.
   */
  number?: BeamLevelValue[]
  /**
   * {@link BeamValueValue
   */
  v: BeamValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/metronome-dot
 *
 * The metronome-dot element works like the dot element in defining metric
 * relationships.
 */
export interface MetronomeDot {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/metronome-tied
 *
 * The &lt;metronome-tied&gt; element indicates the presence of a tie within a
 * metric relationship mark. As with the &lt;tied&gt; element, both the start and
 * stop of the tie should be specified, in this case within separate
 * &lt;metronome-note&gt; elements.
 */
export interface MetronomeTied {
  /**
   * Indicates if this is the start or stop of the tie.
   */
  type: StartStopValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/actual-notes
 *
 * The &lt;actual-notes&gt; element describes how many notes are played in the time
 * usually occupied by the number in the &lt;normal-notes&gt; element.
 */
export interface ActualNotes {
  /**
   * {@link NonNegativeIntegerValue
   */
  v: NonNegativeIntegerValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/normal-dot
 *
 * The &lt;normal-dot&gt; element is used to specify dotted normal tuplet types.
 */
export interface NormalDot {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/normal-notes
 *
 * The &lt;normal-notes&gt; element describes how many notes are usually played in
 * the time occupied by the number in the &lt;actual-notes&gt; element.
 */
export interface NormalNotes {
  /**
   * {@link NonNegativeIntegerValue
   */
  v: NonNegativeIntegerValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/normal-type
 *
 * If the type associated with the number in the &lt;normal-notes&gt; element is
 * different than the current note type (e.g., a quarter note within an eighth note
 * triplet), then the &lt;normal-notes&gt; type (e.g. eighth) is specified in the
 * &lt;normal-type&gt; and &lt;normal-dot&gt; elements.
 */
export interface NormalType {
  /**
   * {@link NoteTypeValueValue
   */
  v: NoteTypeValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/metronome-tuplet
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/metronome-tuplet.png"><br>The
 * &lt;metronome-tuplet&gt; element uses the same element structure as the
 * &lt;time-modification&gt; element, along with some attributes from the
 * &lt;tuplet&gt; element.
 */
export interface MetronomeTuplet {
  type: StartStopValue[]
  bracket?: YesNoValue[]
  showNumber?: ShowTupletValue[]
  /**
   * {@link ActualNotes}
   */
  actualNotes?: ActualNotes[]
  /**
   * {@link NormalDot}
   */
  normalDot?: NormalDot[]
  /**
   * {@link NormalNotes}
   */
  normalNotes?: NormalNotes[]
  /**
   * {@link NormalType}
   */
  normalType?: NormalType[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/metronome-type
 *
 * The &lt;metronome-type&gt; element works like the &lt;type&gt; element in
 * defining metric relationships.
 */
export interface MetronomeType {
  /**
   * {@link NoteTypeValueValue
   */
  v: NoteTypeValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/metronome-note
 *
 * The &lt;metronome-note&gt; element defines the appearance of a note within a
 * metric relationship mark.
 */
export interface MetronomeNote {
  /**
   * {@link MetronomeBeam}
   */
  metronomeBeam?: MetronomeBeam[]
  /**
   * {@link MetronomeDot}
   */
  metronomeDot?: MetronomeDot[]
  /**
   * {@link MetronomeTied}
   */
  metronomeTied?: MetronomeTied[]
  /**
   * {@link MetronomeTuplet}
   */
  metronomeTuplet?: MetronomeTuplet[]
  /**
   * {@link MetronomeType}
   */
  metronomeType?: MetronomeType[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/metronome-relation
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/metronome-relation.png"><br>The
 * &lt;metronome-relation&gt; element describes the relationship symbol that goes
 * between the two sets of &lt;metronome-note&gt; elements. The currently allowed
 * value is equals, but this may expand in future versions. If the element is
 * empty, the equals value is used.
 */
export interface MetronomeRelation {
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/per-minute
 *
 * The &lt;per-minute&gt; element can be a number, or a text description including
 * numbers. If a font is specified, it overrides the font specified for the overall
 * &lt;metronome&gt; element. This allows separate specification of a music font
 * for the &lt;beat-unit&gt; and a text font for the numeric value, in cases where
 * a single metronome font is not used.
 */
export interface PerMinute {
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/metronome
 *
 * The &lt;metronome&gt; element represents metronome marks and other metric
 * relationships. The &lt;beat-unit&gt; element group and &lt;per-minute&gt
 * element specify regular metronome marks. The &lt;metronome-note&gt; and
 * &lt;metronome-relation&gt; elements allow for the specification of metric
 * modulations and other metric relationships, such as swing tempo marks where two
 * eighths are equated to a quarter note / eighth note triplet. Tied notes can be
 * represented in both types of metronome marks by using the &lt;beat-unit-tied&gt
 * and &lt;metronome-tied&gt; elements. The print-object attribute is set to no in
 * cases where the &lt;metronome&gt; element represents a relationship or range
 * that is not displayed in the music notation.
 */
export interface Metronome {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the start of the entire current measure, at either the left
   * barline or the start of the system. Positive x is right and negative x is
   * left.<br><br>This attribute provides higher-resolution positioning data than the
   * &lt;offset&gt; element. Applications reading a MusicXML file that can understand
   * both features should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * In cases where text extends over more than one line, horizontal alignment and
   * justify values can be different. The most typical case is for credits, such
   * as:<br><br><pre>Words and music by<br>  Pat Songwriter</pre><br>Typically this
   * type of credit is aligned to the right, so that the position information refers
   * to the right-most part of the text. But in this example, the text is
   * center-justified, not right-justified.<br><br>The halign attribute is used in
   * these situations. If it is not present, its value is the same as for the justify
   * attribute. For elements where a justify attribute is not allowed, the default is
   * implementation-dependent.
   */
  halign?: LeftCenterRightValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Indicates left, center, or right justification. The default value varies for
   * different elements. For elements where the justify attribute is present but the
   * halign attribute is not, the justify attribute indicates horizontal alignment as
   * well as justification.
   */
  justify?: LeftCenterRightValue[]
  /**
   * Indicates whether or not to put the metronome mark in parentheses. It is no if
   * not specified.
   */
  parentheses?: YesNoValue[]
  /**
   * Specifies whether or not to print an object. It is yes if not specified.
   */
  printObject?: YesNoValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Indicates vertical alignment to the top, middle, bottom, or baseline of the
   * text. The default is implementation-dependent.
   */
  valign?: ValignValue[]
  /**
   * {@link BeatUnit}
   */
  beatUnit?: BeatUnit[]
  /**
   * {@link BeatUnitDot}
   */
  beatUnitDot?: BeatUnitDot[]
  /**
   * {@link BeatUnitTied}
   */
  beatUnitTied?: BeatUnitTied[]
  /**
   * {@link MetronomeArrows}
   */
  metronomeArrows?: MetronomeArrows[]
  /**
   * {@link MetronomeNote}
   */
  metronomeNote?: MetronomeNote[]
  /**
   * {@link MetronomeRelation}
   */
  metronomeRelation?: MetronomeRelation[]
  /**
   * {@link PerMinute}
   */
  perMinute?: PerMinute[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/octave-shift
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/octave-shift.png"><br>The
 * &lt;octave-shift&gt; element indicates where notes are shifted up or down from
 * their performed values because of printing difficulty. Thus a treble clef line
 * noted with 8va will be indicated with an &lt;octave-shift&gt; down from the
 * pitch data indicated in the notes.
 */
export interface OctaveShift {
  /**
   * Indicates if this is the start, stop, or continuation of the octave shift. The
   * start is specified as a shift up or down from their performed values
   */
  type: UpDownStopContinueValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * The length of dashes in a dashed line. Ignored if the corresponding line-type
   * attribute is not dashed.
   */
  dashLength?: TenthsValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the start of the entire current measure, at either the left
   * barline or the start of the system. Positive x is right and negative x is
   * left.<br><br>This attribute provides higher-resolution positioning data than the
   * &lt;offset&gt; element. Applications reading a MusicXML file that can understand
   * both features should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Distinguishes multiple octave shifts when they overlap in MusicXML document
   * order.
   */
  number?: NumberLevelValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * 8 indicates one octave; 15 indicates two octaves; 22 indicates 3 octaves. The
   * default value is 8.
   */
  size?: PositiveIntegerValue[]
  /**
   * The length of spaces in a dashed line. Ignored if the corresponding line-type
   * attribute is not dashed.
   */
  spaceLength?: TenthsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/other-direction
 *
 * The &lt;other-direction&gt; element is used to define any &lt;direction&gt
 * symbols not yet in the MusicXML format. The smufl attribute can be used to
 * specify a particular direction symbol, allowing application interoperability
 * without requiring every SMuFL glyph to have a MusicXML element equivalent. Using
 * the &lt;other-direction&gt; element without the smufl attribute allows for
 * extended representation, though without application interoperability.
 */
export interface OtherDirection {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the start of the entire current measure, at either the left
   * barline or the start of the system. Positive x is right and negative x is
   * left.<br><br>This attribute provides higher-resolution positioning data than the
   * &lt;offset&gt; element. Applications reading a MusicXML file that can understand
   * both features should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * In cases where text extends over more than one line, horizontal alignment and
   * justify values can be different. The most typical case is for credits, such
   * as:<br><br><pre>Words and music by<br>  Pat Songwriter</pre><br>Typically this
   * type of credit is aligned to the right, so that the position information refers
   * to the right-most part of the text. But in this example, the text is
   * center-justified, not right-justified.<br><br>The halign attribute is used in
   * these situations. If it is not present, its value is the same as for the justify
   * attribute. For elements where a justify attribute is not allowed, the default is
   * implementation-dependent.
   */
  halign?: LeftCenterRightValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Specifies whether or not to print an object. It is yes if not specified.
   */
  printObject?: YesNoValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Indicates a particular Standard Music Font Layout (SMuFL) character using its
   * canonical glyph name. Sometimes this is a formatting choice, and sometimes this
   * is a refinement of the semantic meaning of an element.
   */
  smufl?: SmuflGlyphNameValue[]
  /**
   * Indicates vertical alignment to the top, middle, bottom, or baseline of the
   * text. The default is implementation-dependent.
   */
  valign?: ValignValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pedal
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/pedal.png"><br>The
 * &lt;pedal&gt; element represents piano pedal marks, including damper and
 * sostenuto pedal marks. The soft pedal is not included here because there is no
 * special symbol or graphic used for it beyond what can be specified with
 * &lt;words&gt; and &lt;bracket&gt; elements.
 */
export interface Pedal {
  /**
   * Distinguishes different types of pedal directions.
   */
  type: PedalTypeValue[]
  /**
   * Used only when the sign attribute is yes and the type is start or sostenuto
   * otherwise it is ignored. If yes, the short P and S signs are used. If no, the
   * full Ped and Sost signs are used. It is no if not specified.
   */
  abbreviated?: YesNoValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the start of the entire current measure, at either the left
   * barline or the start of the system. Positive x is right and negative x is
   * left.<br><br>This attribute provides higher-resolution positioning data than the
   * &lt;offset&gt; element. Applications reading a MusicXML file that can understand
   * both features should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * If yes, then pedal lines are used.
   */
  line?: YesNoValue[]
  /**
   * Distinguishes multiple pedals when they overlap in MusicXML document order.
   */
  number?: NumberLevelValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * If yes, then Ped, Sost, and * signs are used. For compatibility with older
   * versions, it is yes if not specified if the line attribute is no, and is no if
   * not specified if the line attribute is yes. If no, the alignment attributes are
   * ignored.
   */
  sign?: YesNoValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/beater
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/beater.png"><br>The
 * &lt;beater&gt; element represents pictograms for beaters, mallets, and sticks
 * that do not have different materials represented in the pictogram.
 */
export interface Beater {
  /**
   * Indicates the direction in which the tip of the beater points.
   */
  tip?: TipDirectionValue[]
  /**
   * {@link BeaterValueValue
   */
  v: BeaterValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/effect
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/effect.png"><br>The
 * &lt;effect&gt; element represents pictograms for sound effect percussion
 * instruments.
 */
export interface Effect {
  /**
   * Distinguishes different SMuFL stylistic alternates.
   */
  smufl?: SmuflPictogramGlyphNameValue[]
  /**
   * {@link EffectValueValue
   */
  v: EffectValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/glass
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/glass.png"><br>The
 * &lt;glass&gt; element represents pictograms for glass percussion instruments.
 */
export interface Glass {
  /**
   * Distinguishes different SMuFL glyphs for wind chimes in the Chimes pictograms
   * range, including those made of materials other than glass.
   */
  smufl?: SmuflPictogramGlyphNameValue[]
  /**
   * {@link GlassValueValue
   */
  v: GlassValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/membrane
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/membrane.png"><br>The
 * &lt;membrane&gt; element represents pictograms for membrane percussion
 * instruments.
 */
export interface Membrane {
  /**
   * Distinguishes different SMuFL stylistic alternates.
   */
  smufl?: SmuflPictogramGlyphNameValue[]
  /**
   * {@link MembraneValueValue
   */
  v: MembraneValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/metal
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/metal.png"><br>The
 * &lt;metal&gt; element represents pictograms for metal percussion instruments.
 */
export interface Metal {
  /**
   * Distinguishes different SMuFL stylistic alternates.
   */
  smufl?: SmuflPictogramGlyphNameValue[]
  /**
   * {@link MetalValueValue
   */
  v: MetalValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/other-percussion
 *
 * The &lt;other-percussion&gt; element represents percussion pictograms not
 * defined elsewhere.
 */
export interface OtherPercussion {
  /**
   * Indicates a particular Standard Music Font Layout (SMuFL) character using its
   * canonical glyph name. Sometimes this is a formatting choice, and sometimes this
   * is a refinement of the semantic meaning of an element.
   */
  smufl?: SmuflGlyphNameValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pitched
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/pitched.png"><br>The
 * &lt;pitched&gt; element represents pictograms for pitched percussion
 * instruments.
 */
export interface Pitched {
  /**
   * Distinguishes different SMuFL glyphs for a particular pictogram within the <a
   * href="https://www.w3.org/2021/03/smufl14/tables/tuned-mallet-percussion-pictograms.html">Tuned
   * mallet percussion pictograms</a> range.
   */
  smufl?: SmuflPictogramGlyphNameValue[]
  /**
   * {@link PitchedValueValue
   */
  v: PitchedValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/stick-material
 *
 * The &lt;stick-material&gt; element represents the material being displayed in a
 * stick pictogram.
 */
export interface StickMaterial {
  /**
   * {@link StickMaterialValue
   */
  v: StickMaterialValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/stick-type
 *
 * The &lt;stick-type&gt; element represents the shape of pictograms where the
 * material in the stick, mallet, or beater is represented in the pictogram.
 */
export interface StickType {
  /**
   * {@link StickTypeValue
   */
  v: StickTypeValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/stick
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/stick.png"><br>The
 * &lt;stick&gt; element represents pictograms where the material of the stick,
 * mallet, or beater is included.
 */
export interface Stick {
  /**
   * Indicates the presence of a dashed circle around the round beater part of a
   * pictogram. The value is no if not specified.
   */
  dashedCircle?: YesNoValue[]
  /**
   * Indicates the presence of parentheses around the round beater part of a
   * pictogram. The value is no if not specified.
   */
  parentheses?: YesNoValue[]
  /**
   * Represents the direction in which the tip of a stick or beater points, using
   * Unicode arrow terminology.
   */
  tip?: TipDirectionValue[]
  /**
   * {@link StickMaterial}
   */
  stickMaterial?: StickMaterial[]
  /**
   * {@link StickType}
   */
  stickType?: StickType[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/stick-location
 *
 * The &lt;stick-location&gt; element represents pictograms for the location of
 * sticks, beaters, or mallets on cymbals, gongs, drums, and other instruments.
 */
export interface StickLocation {
  /**
   * {@link StickLocationValue
   */
  v: StickLocationValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/timpani
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/timpani.png"><br>The
 * &lt;timpani&gt; element represents the timpani pictogram.
 */
export interface Timpani {
  /**
   * Distinguishes different SMuFL stylistic alternates.
   */
  smufl?: SmuflPictogramGlyphNameValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/wood
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/wood.png"><br>The
 * &lt;wood&gt; element represents pictograms for wood percussion instruments.
 */
export interface Wood {
  /**
   * Distinguishes different SMuFL stylistic alternates.
   */
  smufl?: SmuflPictogramGlyphNameValue[]
  /**
   * {@link WoodValueValue
   */
  v: WoodValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/percussion
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/percussion.png"><br>The
 * &lt;percussion&gt; element is used to define percussion pictogram symbols. The
 * organization of these symbols follows the definitions in Kurt Stone's "Music
 * Notation in the Twentieth Century" on pages 206-212 and 223. More pictograms
 * have been added to the ones listed in Stone, based on how usage has evolved
 * since the book was published in 1980.
 */
export interface Percussion {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the start of the entire current measure, at either the left
   * barline or the start of the system. Positive x is right and negative x is
   * left.<br><br>This attribute provides higher-resolution positioning data than the
   * &lt;offset&gt; element. Applications reading a MusicXML file that can understand
   * both features should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * Formatting of an enclosure around text or symbols.
   */
  enclosure?: EnclosureShapeValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * In cases where text extends over more than one line, horizontal alignment and
   * justify values can be different. The most typical case is for credits, such
   * as:<br><br><pre>Words and music by<br>  Pat Songwriter</pre><br>Typically this
   * type of credit is aligned to the right, so that the position information refers
   * to the right-most part of the text. But in this example, the text is
   * center-justified, not right-justified.<br><br>The halign attribute is used in
   * these situations. If it is not present, its value is the same as for the justify
   * attribute. For elements where a justify attribute is not allowed, the default is
   * implementation-dependent.
   */
  halign?: LeftCenterRightValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Indicates vertical alignment to the top, middle, bottom, or baseline of the
   * text. The default is implementation-dependent.
   */
  valign?: ValignValue[]
  /**
   * {@link Beater}
   */
  beater?: Beater[]
  /**
   * {@link Effect}
   */
  effect?: Effect[]
  /**
   * {@link Glass}
   */
  glass?: Glass[]
  /**
   * {@link Membrane}
   */
  membrane?: Membrane[]
  /**
   * {@link Metal}
   */
  metal?: Metal[]
  /**
   * {@link OtherPercussion}
   */
  otherPercussion?: OtherPercussion[]
  /**
   * {@link Pitched}
   */
  pitched?: Pitched[]
  /**
   * {@link Stick}
   */
  stick?: Stick[]
  /**
   * {@link StickLocation}
   */
  stickLocation?: StickLocation[]
  /**
   * {@link Timpani}
   */
  timpani?: Timpani[]
  /**
   * {@link Wood}
   */
  wood?: Wood[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/principal-voice
 *
 * The &lt;principal-voice&gt; element represents principal and secondary voices in
 * a score, either for analysis or for square bracket symbols that appear in a
 * score. The content of the &lt;principal-voice&gt; element is used for analysis
 * and may be any text value.
 */
export interface PrincipalVoice {
  /**
   * Indicates the type of symbol used. When used for analysis separate from any
   * printed score markings, it should be set to none. Otherwise if the type is stop
   * it should be set to plain.
   */
  symbol: PrincipalVoiceSymbolValue[]
  /**
   * Indicates if this is the start or stop of the principal voice.
   */
  type: StartStopValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the start of the entire current measure, at either the left
   * barline or the start of the system. Positive x is right and negative x is
   * left.<br><br>This attribute provides higher-resolution positioning data than the
   * &lt;offset&gt; element. Applications reading a MusicXML file that can understand
   * both features should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * In cases where text extends over more than one line, horizontal alignment and
   * justify values can be different. The most typical case is for credits, such
   * as:<br><br><pre>Words and music by<br>  Pat Songwriter</pre><br>Typically this
   * type of credit is aligned to the right, so that the position information refers
   * to the right-most part of the text. But in this example, the text is
   * center-justified, not right-justified.<br><br>The halign attribute is used in
   * these situations. If it is not present, its value is the same as for the justify
   * attribute. For elements where a justify attribute is not allowed, the default is
   * implementation-dependent.
   */
  halign?: LeftCenterRightValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Indicates vertical alignment to the top, middle, bottom, or baseline of the
   * text. The default is implementation-dependent.
   */
  valign?: ValignValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/rehearsal
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/rehearsal.png"><br>The
 * &lt;rehearsal&gt; element specifies letters, numbers, and section names that are
 * notated in the score for reference during rehearsal. The enclosure is square if
 * not specified. Left justification is used if not specified.
 */
export interface Rehearsal {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the start of the entire current measure, at either the left
   * barline or the start of the system. Positive x is right and negative x is
   * left.<br><br>This attribute provides higher-resolution positioning data than the
   * &lt;offset&gt; element. Applications reading a MusicXML file that can understand
   * both features should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * The text-direction attribute is used to adjust and override the Unicode
   * bidirectional text algorithm, similar to the Directionality data category in the
   * <a href="https://www.w3.org/TR/2007/REC-its-20070403/#directionality">W3C
   * Internationalization Tag Set recommendation</a>. The default value is ltr. This
   * attribute is typically used by applications that store text in left-to-right
   * visual order rather than logical order. Such applications can use the lro value
   * to better communicate with other applications that more fully support
   * bidirectional text.
   */
  dir?: TextDirectionValue[]
  /**
   * Formatting of an enclosure around text or symbols.
   */
  enclosure?: EnclosureShapeValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * In cases where text extends over more than one line, horizontal alignment and
   * justify values can be different. The most typical case is for credits, such
   * as:<br><br><pre>Words and music by<br>  Pat Songwriter</pre><br>Typically this
   * type of credit is aligned to the right, so that the position information refers
   * to the right-most part of the text. But in this example, the text is
   * center-justified, not right-justified.<br><br>The halign attribute is used in
   * these situations. If it is not present, its value is the same as for the justify
   * attribute. For elements where a justify attribute is not allowed, the default is
   * implementation-dependent.
   */
  halign?: LeftCenterRightValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Indicates left, center, or right justification. The default value varies for
   * different elements. For elements where the justify attribute is present but the
   * halign attribute is not, the justify attribute indicates horizontal alignment as
   * well as justification.
   */
  justify?: LeftCenterRightValue[]
  /**
   * Specifies text tracking. Values are either normal, which allows flexibility of
   * letter-spacing for purposes of text justification. or a number representing the
   * number of ems to add between each letter. The number may be negative in order to
   * subtract space. The value is normal if not specified.
   */
  letterSpacing?: NumberOrNormalValue[]
  /**
   * Specifies text leading. Values are either normal or a number representing the
   * percentage of the current font height to use for leading. It is normal if not
   * specified. The exact normal value is implementation-dependent, but values
   * between 100 and 120 are recommended.
   */
  lineHeight?: NumberOrNormalValue[]
  /**
   * Number of lines to use when striking through text.
   */
  lineThrough?: NumberOfLinesValue[]
  /**
   * Number of lines to use when overlining text.
   */
  overline?: NumberOfLinesValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Used to rotate text around the alignment point specified by the halign and
   * valign attributes. Positive values are clockwise rotations, while negative
   * values are counter-clockwise rotations.
   */
  rotation?: RotationDegreesValue[]
  /**
   * Number of lines to use when underlining text.
   */
  underline?: NumberOfLinesValue[]
  /**
   * Indicates vertical alignment to the top, middle, bottom, or baseline of the
   * text. The default is implementation-dependent.
   */
  valign?: ValignValue[]
  /**
   * Specifies the language used in the element content. It is Italian ("it") if not
   * specified.
   */
  xmlLang?: XmlLangValue[]
  /**
   * Indicates whether white space should be preserved by applications.
   */
  xmlSpace?: XmlSpaceValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/accord
 *
 * The &lt;accord&gt; element represents the tuning of a single string in the
 * &lt;scordatura&gt; element. It uses the same group of elements as the
 * &lt;staff-tuning&gt; element.
 */
export interface Accord {
  /**
   * Strings are numbered from high to low.
   */
  string?: StringNumberValue[]
  /**
   * {@link TuningAlter}
   */
  tuningAlter?: TuningAlter[]
  /**
   * {@link TuningOctave}
   */
  tuningOctave?: TuningOctave[]
  /**
   * {@link TuningStep}
   */
  tuningStep?: TuningStep[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/scordatura
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/scordatura.png"><br>Scordatura
 * string tunings are represented by a series of &lt;accord&gt; elements, similar
 * to the &lt;staff-tuning&gt; elements. Strings are numbered from high to low.
 */
export interface Scordatura {
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * {@link Accord}
   */
  accord?: Accord[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/staff-divide
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/staff-divide.png">
 */
export interface StaffDivide {
  /**
   * Specifies the type of staff division symbol.
   */
  type: StaffDivideSymbolValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the start of the entire current measure, at either the left
   * barline or the start of the system. Positive x is right and negative x is
   * left.<br><br>This attribute provides higher-resolution positioning data than the
   * &lt;offset&gt; element. Applications reading a MusicXML file that can understand
   * both features should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * In cases where text extends over more than one line, horizontal alignment and
   * justify values can be different. The most typical case is for credits, such
   * as:<br><br><pre>Words and music by<br>  Pat Songwriter</pre><br>Typically this
   * type of credit is aligned to the right, so that the position information refers
   * to the right-most part of the text. But in this example, the text is
   * center-justified, not right-justified.<br><br>The halign attribute is used in
   * these situations. If it is not present, its value is the same as for the justify
   * attribute. For elements where a justify attribute is not allowed, the default is
   * implementation-dependent.
   */
  halign?: LeftCenterRightValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Indicates vertical alignment to the top, middle, bottom, or baseline of the
   * text. The default is implementation-dependent.
   */
  valign?: ValignValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/string-mute
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/string-mute.png"><br>The
 * &lt;string-mute&gt; element represents string mute on and mute off symbols.
 */
export interface StringMute {
  /**
   * Specifies if the string mute is going on or off.
   */
  type: OnOffValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the start of the entire current measure, at either the left
   * barline or the start of the system. Positive x is right and negative x is
   * left.<br><br>This attribute provides higher-resolution positioning data than the
   * &lt;offset&gt; element. Applications reading a MusicXML file that can understand
   * both features should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * In cases where text extends over more than one line, horizontal alignment and
   * justify values can be different. The most typical case is for credits, such
   * as:<br><br><pre>Words and music by<br>  Pat Songwriter</pre><br>Typically this
   * type of credit is aligned to the right, so that the position information refers
   * to the right-most part of the text. But in this example, the text is
   * center-justified, not right-justified.<br><br>The halign attribute is used in
   * these situations. If it is not present, its value is the same as for the justify
   * attribute. For elements where a justify attribute is not allowed, the default is
   * implementation-dependent.
   */
  halign?: LeftCenterRightValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Indicates vertical alignment to the top, middle, bottom, or baseline of the
   * text. The default is implementation-dependent.
   */
  valign?: ValignValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/symbol
 *
 * The &lt;symbol&gt; element specifies a musical symbol using a canonical SMuFL
 * glyph name. It is used when an occasional musical symbol is interspersed into
 * text. It should not be used in place of semantic markup, such as metronome marks
 * that mix text and symbols. Left justification is used if not specified.
 * Enclosure is none if not specified.
 */
export interface SymbolType {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * The text-direction attribute is used to adjust and override the Unicode
   * bidirectional text algorithm, similar to the Directionality data category in the
   * <a href="https://www.w3.org/TR/2007/REC-its-20070403/#directionality">W3C
   * Internationalization Tag Set recommendation</a>. The default value is ltr. This
   * attribute is typically used by applications that store text in left-to-right
   * visual order rather than logical order. Such applications can use the lro value
   * to better communicate with other applications that more fully support
   * bidirectional text.
   */
  dir?: TextDirectionValue[]
  /**
   * Formatting of an enclosure around text or symbols.
   */
  enclosure?: EnclosureShapeValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * In cases where text extends over more than one line, horizontal alignment and
   * justify values can be different. The most typical case is for credits, such
   * as:<br><br><pre>Words and music by<br>  Pat Songwriter</pre><br>Typically this
   * type of credit is aligned to the right, so that the position information refers
   * to the right-most part of the text. But in this example, the text is
   * center-justified, not right-justified.<br><br>The halign attribute is used in
   * these situations. If it is not present, its value is the same as for the justify
   * attribute. For elements where a justify attribute is not allowed, the default is
   * implementation-dependent.
   */
  halign?: LeftCenterRightValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Indicates left, center, or right justification. The default value varies for
   * different elements. For elements where the justify attribute is present but the
   * halign attribute is not, the justify attribute indicates horizontal alignment as
   * well as justification.
   */
  justify?: LeftCenterRightValue[]
  /**
   * Specifies text tracking. Values are either normal, which allows flexibility of
   * letter-spacing for purposes of text justification. or a number representing the
   * number of ems to add between each letter. The number may be negative in order to
   * subtract space. The value is normal if not specified.
   */
  letterSpacing?: NumberOrNormalValue[]
  /**
   * Specifies text leading. Values are either normal or a number representing the
   * percentage of the current font height to use for leading. It is normal if not
   * specified. The exact normal value is implementation-dependent, but values
   * between 100 and 120 are recommended.
   */
  lineHeight?: NumberOrNormalValue[]
  /**
   * Number of lines to use when striking through text.
   */
  lineThrough?: NumberOfLinesValue[]
  /**
   * Number of lines to use when overlining text.
   */
  overline?: NumberOfLinesValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Used to rotate text around the alignment point specified by the halign and
   * valign attributes. Positive values are clockwise rotations, while negative
   * values are counter-clockwise rotations.
   */
  rotation?: RotationDegreesValue[]
  /**
   * Number of lines to use when underlining text.
   */
  underline?: NumberOfLinesValue[]
  /**
   * Indicates vertical alignment to the top, middle, bottom, or baseline of the
   * text. The default is implementation-dependent.
   */
  valign?: ValignValue[]
  /**
   * {@link SmuflGlyphNameValue
   */
  v: SmuflGlyphNameValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/wedge
 *
 * The &lt;wedge&gt; element represents crescendo and diminuendo wedge symbols. The
 * line-type attribute is solid if not specified.
 */
export interface Wedge {
  /**
   * The value is crescendo for the start of a wedge that is closed at the left side,
   * diminuendo for the start of a wedge that is closed on the right side, and stop
   * for the end of a wedge.
   */
  type: WedgeTypeValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * The length of dashes in a dashed line. Ignored if the corresponding line-type
   * attribute is not dashed.
   */
  dashLength?: TenthsValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the start of the entire current measure, at either the left
   * barline or the start of the system. Positive x is right and negative x is
   * left.<br><br>This attribute provides higher-resolution positioning data than the
   * &lt;offset&gt; element. Applications reading a MusicXML file that can understand
   * both features should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Specifies if the line is solid, dashed, dotted, or wavy.
   */
  lineType?: LineTypeValue[]
  /**
   * A value is yes indicates that a circle appears at the point of the wedge,
   * indicating a crescendo from nothing or diminuendo to nothing. It is no if not
   * specified, and used only when the type is crescendo, or the type is stop for a
   * wedge that began with a diminuendo type.
   */
  niente?: YesNoValue[]
  /**
   * Distinguishes multiple wedges when they overlap in MusicXML document order.
   */
  number?: NumberLevelValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * The length of spaces in a dashed line. Ignored if the corresponding line-type
   * attribute is not dashed.
   */
  spaceLength?: TenthsValue[]
  /**
   * Indicates the gap between the top and bottom of the wedge as measured in tenths.
   * Ignored if specified at the start of a crescendo wedge or the end of a
   * diminuendo wedge.
   */
  spread?: TenthsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/words
 *
 * The &lt;words&gt; element specifies a standard text direction. The enclosure
 * attribute is none if not specified. Left justification is used if not specified.
 */
export interface Words {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the start of the entire current measure, at either the left
   * barline or the start of the system. Positive x is right and negative x is
   * left.<br><br>This attribute provides higher-resolution positioning data than the
   * &lt;offset&gt; element. Applications reading a MusicXML file that can understand
   * both features should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * The text-direction attribute is used to adjust and override the Unicode
   * bidirectional text algorithm, similar to the Directionality data category in the
   * <a href="https://www.w3.org/TR/2007/REC-its-20070403/#directionality">W3C
   * Internationalization Tag Set recommendation</a>. The default value is ltr. This
   * attribute is typically used by applications that store text in left-to-right
   * visual order rather than logical order. Such applications can use the lro value
   * to better communicate with other applications that more fully support
   * bidirectional text.
   */
  dir?: TextDirectionValue[]
  /**
   * Formatting of an enclosure around text or symbols.
   */
  enclosure?: EnclosureShapeValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * In cases where text extends over more than one line, horizontal alignment and
   * justify values can be different. The most typical case is for credits, such
   * as:<br><br><pre>Words and music by<br>  Pat Songwriter</pre><br>Typically this
   * type of credit is aligned to the right, so that the position information refers
   * to the right-most part of the text. But in this example, the text is
   * center-justified, not right-justified.<br><br>The halign attribute is used in
   * these situations. If it is not present, its value is the same as for the justify
   * attribute. For elements where a justify attribute is not allowed, the default is
   * implementation-dependent.
   */
  halign?: LeftCenterRightValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Indicates left, center, or right justification. The default value varies for
   * different elements. For elements where the justify attribute is present but the
   * halign attribute is not, the justify attribute indicates horizontal alignment as
   * well as justification.
   */
  justify?: LeftCenterRightValue[]
  /**
   * Specifies text tracking. Values are either normal, which allows flexibility of
   * letter-spacing for purposes of text justification. or a number representing the
   * number of ems to add between each letter. The number may be negative in order to
   * subtract space. The value is normal if not specified.
   */
  letterSpacing?: NumberOrNormalValue[]
  /**
   * Specifies text leading. Values are either normal or a number representing the
   * percentage of the current font height to use for leading. It is normal if not
   * specified. The exact normal value is implementation-dependent, but values
   * between 100 and 120 are recommended.
   */
  lineHeight?: NumberOrNormalValue[]
  /**
   * Number of lines to use when striking through text.
   */
  lineThrough?: NumberOfLinesValue[]
  /**
   * Number of lines to use when overlining text.
   */
  overline?: NumberOfLinesValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Used to rotate text around the alignment point specified by the halign and
   * valign attributes. Positive values are clockwise rotations, while negative
   * values are counter-clockwise rotations.
   */
  rotation?: RotationDegreesValue[]
  /**
   * Number of lines to use when underlining text.
   */
  underline?: NumberOfLinesValue[]
  /**
   * Indicates vertical alignment to the top, middle, bottom, or baseline of the
   * text. The default is implementation-dependent.
   */
  valign?: ValignValue[]
  /**
   * Specifies the language used in the element content. It is Italian ("it") if not
   * specified.
   */
  xmlLang?: XmlLangValue[]
  /**
   * Indicates whether white space should be preserved by applications.
   */
  xmlSpace?: XmlSpaceValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/direction-type
 *
 * Textual direction types may have more than 1 component due to multiple fonts.
 * The &lt;dynamics&gt; element may also be used in the &lt;notations&gt; element.
 * Child element attributes related to print suggestions apply to the individual
 * &lt;direction-type&gt;, not to the overall &lt;direction&gt;.
 */
export interface DirectionType {
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * {@link AccordionRegistration}
   */
  accordionRegistration?: AccordionRegistration[]
  /**
   * {@link Bracket}
   */
  bracket?: Bracket[]
  /**
   * {@link Coda}
   */
  coda?: Coda[]
  /**
   * {@link Damp}
   */
  damp?: Damp[]
  /**
   * {@link DampAll}
   */
  dampAll?: DampAll[]
  /**
   * {@link Dashes}
   */
  dashes?: Dashes[]
  /**
   * {@link Dynamics}
   */
  dynamics?: Dynamics[]
  /**
   * {@link Eyeglasses}
   */
  eyeglasses?: Eyeglasses[]
  /**
   * {@link HarpPedals}
   */
  harpPedals?: HarpPedals[]
  /**
   * {@link Image}
   */
  image?: Image[]
  /**
   * {@link Metronome}
   */
  metronome?: Metronome[]
  /**
   * {@link OctaveShift}
   */
  octaveShift?: OctaveShift[]
  /**
   * {@link OtherDirection}
   */
  otherDirection?: OtherDirection[]
  /**
   * {@link Pedal}
   */
  pedal?: Pedal[]
  /**
   * {@link Percussion}
   */
  percussion?: Percussion[]
  /**
   * {@link PrincipalVoice}
   */
  principalVoice?: PrincipalVoice[]
  /**
   * {@link Rehearsal}
   */
  rehearsal?: Rehearsal[]
  /**
   * {@link Scordatura}
   */
  scordatura?: Scordatura[]
  /**
   * {@link Segno}
   */
  segno?: Segno[]
  /**
   * {@link StaffDivide}
   */
  staffDivide?: StaffDivide[]
  /**
   * {@link StringMute}
   */
  stringMute?: StringMute[]
  /**
   * {@link SymbolType}
   */
  symbolType?: SymbolType[]
  /**
   * {@link Wedge}
   */
  wedge?: Wedge[]
  /**
   * {@link Words}
   */
  words?: Words[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/offset
 *
 * An &lt;offset&gt; is represented in terms of divisions, and indicates where the
 * direction will appear relative to the current musical location. The current
 * musical location is always within the current measure, even at the end of a
 * measure. If an element within a &lt;direction&gt; includes a default-x
 * attribute, the &lt;offset&gt; value will be ignored when determining the
 * appearance of that element.
 */
export interface Offset {
  /**
   * The offset affects the visual appearance of the direction. If the sound
   * attribute is yes, then the offset affects playback and listening too. If it is
   * no, then any &lt;sound&gt; or &lt;listening&gt; associated with the
   * &lt;direction&gt; takes effect at the current location. It is no if not
   * specified for compatibility with earlier MusicXML versions.
   */
  sound?: YesNoValue[]
  /**
   * {@link DivisionsValue
   */
  v: DivisionsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/other-listening
 *
 * The &lt;other-listening&gt; element represents other types of listening control
 * and interaction that change the state of the listening application from the
 * specified point in the performance onward.
 */
export interface OtherListening {
  /**
   * Indicates the type of listening to which the element content applies.
   */
  type: TokenValue[]
  /**
   * Restricts the element to apply to a single player.
   */
  player?: IDREFValue[]
  /**
   * Restrict the element to apply to a set of times through a repeated section.
   */
  timeOnly?: TimeOnlyValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/sync
 *
 * The &lt;sync&gt; element specifies the style that a score following application
 * should use the synchronize an accompaniment with a performer. If this element is
 * not included in a score, default synchronization depends on the application.
 */
export interface Sync {
  /**
   * Specifies the style that a score following application should use to synchronize
   * an accompaniment with a performer.
   */
  type: SyncTypeValue[]
  /**
   * Specifies a latency time in milliseconds that the listening application should
   * expect from the performer.
   */
  latency?: MillisecondsValue[]
  /**
   * Restricts the element to apply to a single &lt;player&gt;.
   */
  player?: IDREFValue[]
  /**
   * Restricts the element to apply to a set of times through a repeated section.
   */
  timeOnly?: TimeOnlyValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/listening
 *
 * The &lt;listen&gt; and &lt;listening&gt; elements, new in Version 4.0, specify
 * different ways that a score following or machine listening application can
 * interact with a performer. The &lt;listening&gt; element handles interactions
 * that change the state of the listening application from the specified point in
 * the performance onward. If multiple child elements of the same type are present,
 * they should have distinct player and/or time-only attributes.
 */
export interface Listening {
  /**
   * {@link Offset}
   */
  offset?: Offset[]
  /**
   * {@link OtherListening}
   */
  otherListening?: OtherListening[]
  /**
   * {@link Sync}
   */
  sync?: Sync[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/ensemble
 *
 * The &lt;ensemble&gt; element is present if performance is intended by an
 * ensemble such as an orchestral section. The text of the &lt;ensemble&gt; element
 * contains the size of the section, or is empty if the ensemble size is not
 * specified.
 */
export interface Ensemble {
  /**
   * {@link PositiveIntegerOrEmptyValue
   */
  v: PositiveIntegerOrEmptyValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/instrument-sound
 *
 * The &lt;instrument-sound&gt; element describes the default timbre of the
 * &lt;score-instrument&gt;. This description is independent of a particular
 * virtual or MIDI instrument specification and allows playback to be shared more
 * easily between applications and libraries.
 */
export interface InstrumentSound {
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/solo
 *
 * The &lt;solo&gt; element is present if performance is intended by a solo
 * instrument.
 */
export interface Solo {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/virtual-library
 *
 * The &lt;virtual-library&gt; element indicates the virtual instrument library
 * name.
 */
export interface VirtualLibrary {
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/virtual-name
 *
 * The &lt;virtual-name&gt; element indicates the library-specific name for the
 * virtual instrument.
 */
export interface VirtualName {
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/virtual-instrument
 *
 * The &lt;virtual-instrument&gt; element defines a specific virtual instrument
 * used for an &lt;instrument sound&gt;.
 */
export interface VirtualInstrument {
  /**
   * {@link VirtualLibrary}
   */
  virtualLibrary?: VirtualLibrary[]
  /**
   * {@link VirtualName}
   */
  virtualName?: VirtualName[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/instrument-change
 *
 * The &lt;instrument-change&gt; element type represents a change to the virtual
 * instrument sound for a given &lt;score-instrument&gt;. All
 * &lt;instrument-change&gt; child elements can also be initially specified within
 * the &lt;score-instrument&gt; element.
 */
export interface InstrumentChange {
  /**
   * Refers to the &lt;score-instrument&gt; affected by the change.
   */
  id: IDREFValue[]
  /**
   * {@link Ensemble}
   */
  ensemble?: Ensemble[]
  /**
   * {@link InstrumentSound}
   */
  instrumentSound?: InstrumentSound[]
  /**
   * {@link Solo}
   */
  solo?: Solo[]
  /**
   * {@link VirtualInstrument}
   */
  virtualInstrument?: VirtualInstrument[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/midi-device
 *
 * The &lt;midi-device&gt; element corresponds to the DeviceName meta event in
 * Standard MIDI Files. Unlike the DeviceName meta event, there can be multiple
 * &lt;midi-device&gt; elements per MusicXML part.
 */
export interface MidiDevice {
  /**
   * Refers to the &lt;score-instrument&gt; assigned to this device. If missing, the
   * device assignment affects all &lt;score-instrument&gt; elements in the
   * &lt;score-part&gt;.
   */
  id?: IDREFValue[]
  /**
   * A number from 1 to 16 that can be used with the unofficial MIDI 1.0 port (or
   * cable) meta event.
   */
  port?: Midi16Value[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/elevation
 *
 * The &lt;elevation&gt; and &lt;pan&gt; elements allow placing of sound in a 3-D
 * space relative to the listener. Both are expressed in degrees ranging from -180
 * to 180. For &lt;elevation&gt;, 0 is level with the listener, 90 is directly
 * above, and -90 is directly below.
 */
export interface Elevation {
  /**
   * {@link RotationDegreesValue
   */
  v: RotationDegreesValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/midi-bank
 *
 * The &lt;midi-bank&gt; element specifies a MIDI 1.0 bank number ranging from 1 to
 * 16,384.
 */
export interface MidiBank {
  /**
   * {@link Midi-16384Value
   */
  v: Midi16384Value
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/midi-channel
 *
 * The &lt;midi-channel&gt; element specifies a MIDI 1.0 channel numbers ranging
 * from 1 to 16.
 */
export interface MidiChannel {
  /**
   * {@link Midi-16Value
   */
  v: Midi16Value
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/midi-name
 *
 * The &lt;midi-name&gt; element corresponds to a ProgramName meta-event within a
 * Standard MIDI File.
 */
export interface MidiName {
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/midi-program
 *
 * The &lt;midi-program&gt; element specifies a MIDI 1.0 program number ranging
 * from 1 to 128.
 */
export interface MidiProgram {
  /**
   * {@link Midi-128Value
   */
  v: Midi128Value
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/midi-unpitched
 *
 * For unpitched instruments, the &lt;midi-unpitched&gt; element specifies a MIDI
 * 1.0 note number ranging from 1 to 128. It is usually used with MIDI banks for
 * percussion. Note that MIDI 1.0 note numbers are generally specified from 0 to
 * 127 rather than the 1 to 128 numbering used in this element.
 */
export interface MidiUnpitched {
  /**
   * {@link Midi-128Value
   */
  v: Midi128Value
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pan
 *
 * The &lt;pan&gt; and &lt;elevation&gt; elements allow placing of sound in a 3-D
 * space relative to the listener. Both are expressed in degrees ranging from -180
 * to 180. For pan, 0 is straight ahead, -90 is hard left, 90 is hard right, and
 * -180 and 180 are directly behind the listener.
 */
export interface Pan {
  /**
   * {@link RotationDegreesValue
   */
  v: RotationDegreesValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/volume
 *
 * The &lt;volume&gt; element value is a percentage of the maximum ranging from 0
 * to 100, with decimal values allowed. This corresponds to a scaling value for the
 * MIDI 1.0 channel volume controller.
 */
export interface Volume {
  /**
   * {@link PercentValue
   */
  v: PercentValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/midi-instrument
 *
 * The &lt;midi-instrument&gt; element defines MIDI 1.0 instrument playback. The
 * &lt;midi-instrument&gt; element can be a part of either the
 * &lt;score-instrument&gt; element at the start of a part, or the &lt;sound&gt
 * element within a part.
 */
export interface MidiInstrument {
  /**
   * Refers to the &lt;score-instrument&gt; element affected by the change.
   */
  id: IDREFValue[]
  /**
   * {@link Elevation}
   */
  elevation?: Elevation[]
  /**
   * {@link MidiBank}
   */
  midiBank?: MidiBank[]
  /**
   * {@link MidiChannel}
   */
  midiChannel?: MidiChannel[]
  /**
   * {@link MidiName}
   */
  midiName?: MidiName[]
  /**
   * {@link MidiProgram}
   */
  midiProgram?: MidiProgram[]
  /**
   * {@link MidiUnpitched}
   */
  midiUnpitched?: MidiUnpitched[]
  /**
   * {@link Pan}
   */
  pan?: Pan[]
  /**
   * {@link Volume}
   */
  volume?: Volume[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/ipa
 *
 * The &lt;ipa&gt; element represents International Phonetic Alphabet (IPA) sounds
 * for vocal music. String content is limited to IPA 2015 symbols represented in
 * Unicode 13.0.
 */
export interface Ipa {
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/mute
 *
 * The &lt;mute&gt; element represents muting playback for different instruments,
 * including brass, winds, and strings.
 */
export interface Mute {
  /**
   * {@link MuteValue
   */
  v: MuteValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/other-play
 *
 * The &lt;other-play&gt; element represents other types of playback not otherwise
 * specified within the &lt;play&gt; element.
 */
export interface OtherPlay {
  /**
   * Indicates the type of playback to which the element content applies.
   */
  type: TokenValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/semi-pitched
 *
 * The &lt;semi-pitched&gt; element represents categories of indefinite pitch for
 * percussion instruments.
 */
export interface SemiPitched {
  /**
   * {@link SemiPitchedValue
   */
  v: SemiPitchedValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/play
 *
 * The &lt;play&gt; element specifies playback techniques to be used in conjunction
 * with the &lt;instrument-sound&gt; element. When used as part of a &lt;sound&gt
 * element, it applies to all notes going forward in score order. In
 * multi-instrument parts, the affected instrument should be specified using the id
 * attribute. When used as part of a &lt;note&gt; element, it applies to the
 * current note only.
 */
export interface Play {
  /**
   * Refers to a specific &lt;score-instrument&gt; to which this playback applies.
   */
  id?: IDREFValue[]
  /**
   * {@link Ipa}
   */
  ipa?: Ipa[]
  /**
   * {@link Mute}
   */
  mute?: Mute[]
  /**
   * {@link OtherPlay}
   */
  otherPlay?: OtherPlay[]
  /**
   * {@link SemiPitched}
   */
  semiPitched?: SemiPitched[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/first
 *
 * The &lt;first&gt; element is the part of the swing ratio that refers to the
 * first of two consecutive notes.
 */
export interface First {
  /**
   * {@link PositiveIntegerValue
   */
  v: PositiveIntegerValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/second
 *
 * The &lt;second&gt; element is the part of the swing ratio that refers to the
 * second of two consecutive notes.
 */
export interface Second {
  /**
   * {@link PositiveIntegerValue
   */
  v: PositiveIntegerValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/straight
 *
 * The &lt;straight&gt; element specifies that no swing is present, so consecutive
 * notes have equal durations.
 */
export interface Straight {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/swing-style
 *
 * The &lt;swing-style&gt; element is a string describing the style of swing used.
 */
export interface SwingStyle {
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/swing-type
 *
 * The  &lt;swing-type&gt; element specifies the note type, either eighth or 16th,
 * to which the &lt;first&gt; to &lt;second&gt; ratio is applied. The value is
 * eighth if this element is not present.
 */
export interface SwingType {
  /**
   * {@link SwingTypeValueValue
   */
  v: SwingTypeValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/swing
 *
 * The &lt;swing&gt; element specifies whether or not to use swing playback, where
 * consecutive on-beat / off-beat eighth or 16th notes are played with unequal
 * nominal durations.
 */
export interface Swing {
  /**
   * {@link First}
   */
  first?: First[]
  /**
   * {@link Second}
   */
  second?: Second[]
  /**
   * {@link Straight}
   */
  straight?: Straight[]
  /**
   * {@link SwingStyle}
   */
  swingStyle?: SwingStyle[]
  /**
   * {@link SwingType}
   */
  swingType?: SwingType[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/sound
 *
 * The &lt;sound&gt; element contains general playback parameters. They can stand
 * alone within a part/measure, or be a component element within a direction.
 */
export interface Sound {
  /**
   * Indicates the end point for a forward jump to a coda sign. If there are multiple
   * jumps, the value of these parameters can be used to name and distinguish them.
   */
  coda?: TokenValue[]
  /**
   * Indicates to go back to the beginning of the movement. When used it always has
   * the value "yes".<br><br>By default, a dacapo attribute indicates that the jump
   * should occur the first time through. The times that jumps occur can be changed
   * by using the time-only attribute.
   */
  dacapo?: YesNoValue[]
  /**
   * Indicates the starting point for a backward jump to a segno sign. If there are
   * multiple jumps, the value of these parameters can be used to name and
   * distinguish them.<br><br>By default, a dalsegno attribute indicates that the
   * jump should occur the first time through. The times that jumps occur can be
   * changed by using the time-only attribute.
   */
  dalsegno?: TokenValue[]
  /**
   * Effects playback of the the common right piano pedal and its MIDI controller
   * equivalent. The yes value indicates the pedal is depressed; no indicates the
   * pedal is released. A numeric value from 0 to 100 may also be used for half
   * pedaling. This value is the percentage that the pedal is depressed. A value of 0
   * is equivalent to no, and a value of 100 is equivalent to yes.
   */
  damperPedal?: YesNoNumberValue[]
  /**
   * If the segno or coda attributes are used, the divisions attribute can be used to
   * indicate the number of divisions per quarter note. Otherwise sound and MIDI
   * generating programs may have to recompute this.
   */
  divisions?: DivisionsValue[]
  /**
   * Dynamics (or MIDI velocity) are expressed as a percentage of the default forte
   * value (90 for MIDI 1.0).
   */
  dynamics?: NonNegativeDecimalValue[]
  /**
   * Allows placing of sound in a 3-D space relative to the listener, expressed in
   * degrees ranging from -180 to 180. 0 is level with the listener, 90 is directly
   * above, and -90 is directly below.<br><br>Deprecated as of Version 2.0. The
   * &lt;elevation&gt; element in the &lt;midi-instrument&gt; element should be used
   * instead. If both are present, the &lt;elevation&gt; element takes priority.
   */
  elevation?: RotationDegreesValue[]
  /**
   * Follows the final note or rest in a movement with a da capo or dal segno
   * direction. If numeric, the value represents the actual duration of the final
   * note or rest, which can be ambiguous in written notation and different among
   * parts and voices. The value may also be "yes" to indicate no change to the final
   * duration.
   */
  fine?: TokenValue[]
  /**
   * Indicates that a forward repeat sign is implied but not displayed. It is used
   * for example in two-part forms with repeats, such as a minuet and trio where no
   * repeat is displayed at the start of the trio. This usually occurs after a
   * barline. When used it always has the value of "yes".
   */
  forwardRepeat?: YesNoValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Allows placing of sound in a 3-D space relative to the listener, expressed in
   * degrees ranging from -180 to 180. 0 is straight ahead, -90 is hard left, 90 is
   * hard right, and -180 and 180 are directly behind the listener.<br><br>Deprecated
   * as of Version 2.0. The &lt;pan&gt; element in the &lt;midi-instrument&gt
   * element should be used instead. If both are present, the &lt;pan&gt; element
   * takes priority.
   */
  pan?: RotationDegreesValue[]
  /**
   * Affects all following notes. Yes indicates pizzicato, no indicates arco.
   */
  pizzicato?: YesNoValue[]
  /**
   * Indicates the end point for a backward jump to a segno sign. If there are
   * multiple jumps, the value of these parameters can be used to name and
   * distinguish them.
   */
  segno?: TokenValue[]
  /**
   * Effects playback of the the common left piano pedal and its MIDI controller
   * equivalent. The yes value indicates the pedal is depressed; no indicates the
   * pedal is released. A numeric value from 0 to 100 may also be used for half
   * pedaling. This value is the percentage that the pedal is depressed. A value of 0
   * is equivalent to no, and a value of 100 is equivalent to yes.
   */
  softPedal?: YesNoNumberValue[]
  /**
   * Effects playback of the the common center piano pedal and its MIDI controller
   * equivalent. The yes value indicates the pedal is depressed; no indicates the
   * pedal is released. A numeric value from 0 to 100 may also be used for half
   * pedaling. This value is the percentage that the pedal is depressed. A value of 0
   * is equivalent to no, and a value of 100 is equivalent to yes.
   */
  sostenutoPedal?: YesNoNumberValue[]
  /**
   * Tempo is expressed in quarter notes per minute. If 0, the sound-generating
   * program should prompt the user at the time of compiling a sound (MIDI) file.
   */
  tempo?: NonNegativeDecimalValue[]
  /**
   * Indicates which times to apply the sound element if the &lt;sound&gt; element
   * applies only particular times through a repeat.
   */
  timeOnly?: TimeOnlyValue[]
  /**
   * Indicates the starting point for a forward jump to a coda sign. If there are
   * multiple jumps, the value of these parameters can be used to name and
   * distinguish them.<br><br>By default, a tocoda attribute indicates the jump
   * should occur the second time through. The times that jumps occur can be changed
   * by using the time-only attribute.
   */
  tocoda?: TokenValue[]
  /**
   * {@link InstrumentChange}
   */
  instrumentChange?: InstrumentChange[]
  /**
   * {@link MidiDevice}
   */
  midiDevice?: MidiDevice[]
  /**
   * {@link MidiInstrument}
   */
  midiInstrument?: MidiInstrument[]
  /**
   * {@link Offset}
   */
  offset?: Offset[]
  /**
   * {@link Play}
   */
  play?: Play[]
  /**
   * {@link Swing}
   */
  swing?: Swing[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/staff
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/staff.png">
 */
export interface Staff {
  /**
   * {@link PositiveIntegerValue
   */
  v: PositiveIntegerValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/voice
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/voice.png"><br>A
 * voice is a sequence of musical events (e.g. notes, chords, rests) that proceeds
 * linearly in time. The &lt;voice&gt; element is used to distinguish between
 * multiple voices in individual parts.
 */
export interface Voice {
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/direction
 *
 * A direction is a musical indication that is not necessarily attached to a
 * specific note. Two or more may be combined to indicate words followed by the
 * start of a dashed line, the end of a wedge followed by dynamics, etc. For
 * applications where a specific direction is indeed attached to a specific note,
 * the &lt;direction&gt; element can be associated with the first &lt;note&gt
 * element that follows it in score order that is not in a different voice.
 */
export interface Direction {
  /**
   * Changes the default-x position of a direction. It indicates that the left-hand
   * side of the direction is aligned with the left-hand side of the time signature.
   * If no time signature is present, the direction is aligned with the left-hand
   * side of the first music notational element in the measure. If a default-x,
   * justify, or halign attribute is present, it overrides this attribute.
   */
  directive?: YesNoValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Distinguishes elements that are associated with a system rather than the
   * particular part where the element appears.
   */
  system?: SystemRelationValue[]
  /**
   * {@link DirectionType}
   */
  directionType?: DirectionType[]
  /**
   * {@link Footnote}
   */
  footnote?: Footnote[]
  /**
   * {@link Level}
   */
  level?: Level[]
  /**
   * {@link Listening}
   */
  listening?: Listening[]
  /**
   * {@link Offset}
   */
  offset?: Offset[]
  /**
   * {@link Sound}
   */
  sound?: Sound[]
  /**
   * {@link Staff}
   */
  staff?: Staff[]
  /**
   * {@link Voice}
   */
  voice?: Voice[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/extend
 *
 * The &lt;extend&gt; element represents lyric word extension / melisma lines as
 * well as figured bass extensions.
 */
export interface Extend {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Indicates if this is the start, stop, or continuation of the extension. Before
   * Version 3.0 this attribute was not available, and an &lt;extend&gt; element was
   * always treated as the start of the extension.
   */
  type?: StartStopContinueValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/figure-number
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/figure-number.png"><br>A
 * &lt;figure-number&gt; element represents a number. Overstrikes of the figure
 * number are represented in the &lt;suffix&gt; element.
 */
export interface FigureNumber {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/prefix
 *
 * Values for the &lt;prefix&gt; element include plus and the accidental values
 * sharp, flat, natural, double-sharp, flat-flat, and sharp-sharp. The
 * &lt;prefix&gt; element may contain additional values for symbols specific to
 * particular figured bass styles.
 */
export interface Prefix {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/suffix
 *
 * Values for the &lt;suffix&gt; element include plus and the accidental values
 * sharp, flat, natural, double-sharp, flat-flat, and sharp-sharp. Suffixes include
 * both symbols that come after the figure number and those that overstrike the
 * figure number. The &lt;suffix&gt; values slash, back-slash, and vertical are
 * used for slashed numbers indicating chromatic alteration. The orientation and
 * display of the slash usually depends on the figure number. The &lt;suffix&gt
 * element may contain additional values for symbols specific to particular figured
 * bass styles.
 */
export interface Suffix {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/figure
 *
 * The &lt;figure&gt; element represents a single figure within a
 * &lt;figured-bass&gt; element.
 */
export interface Figure {
  /**
   * {@link Extend}
   */
  extend?: Extend[]
  /**
   * {@link FigureNumber}
   */
  figureNumber?: FigureNumber[]
  /**
   * {@link Footnote}
   */
  footnote?: Footnote[]
  /**
   * {@link Level}
   */
  level?: Level[]
  /**
   * {@link Prefix}
   */
  prefix?: Prefix[]
  /**
   * {@link Suffix}
   */
  suffix?: Suffix[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/figured-bass
 *
 * The &lt;figured-bass&gt; element represents figured bass notation. A
 * &lt;figured-bass&gt; element takes its position from the first regular note (not
 * a grace note or chord note) that follows in score order. The optional
 * &lt;duration&gt; element is used to indicate changes of figures under a note.
 * Figures are ordered from top to bottom.
 */
export interface FiguredBass {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the start of the entire current measure, at either the left
   * barline or the start of the system. Positive x is right and negative x is
   * left.<br><br>This attribute provides higher-resolution positioning data than the
   * &lt;offset&gt; element. Applications reading a MusicXML file that can understand
   * both features should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * In cases where text extends over more than one line, horizontal alignment and
   * justify values can be different. The most typical case is for credits, such
   * as:<br><br><pre>Words and music by<br>  Pat Songwriter</pre><br>Typically this
   * type of credit is aligned to the right, so that the position information refers
   * to the right-most part of the text. But in this example, the text is
   * center-justified, not right-justified.<br><br>The halign attribute is used in
   * these situations. If it is not present, its value is the same as for the justify
   * attribute. For elements where a justify attribute is not allowed, the default is
   * implementation-dependent.
   */
  halign?: LeftCenterRightValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Indicates if the entire figured bass is parenthesized. It is no if not present.
   */
  parentheses?: YesNoValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Controls the printing of an augmentation dot separately from the rest of the
   * note or rest. This is especially useful for notes that overlap in different
   * voices, or for chord sheets that contain lyrics and chords but no melody. If
   * print-object is set to no, this attribute is also interpreted as being set to no
   * if not present.
   */
  printDot?: YesNoValue[]
  /**
   * Controls the printing of a lyric separately from the rest of the note or rest.
   * This is especially useful for notes that overlap in different voices, or for
   * chord sheets that contain lyrics and chords but no melody. If print-object is
   * set to no, this attribute is also interpreted as being set to no if not present.
   */
  printLyric?: YesNoValue[]
  /**
   * Specifies whether or not to print an object. It is yes if not specified.
   */
  printObject?: YesNoValue[]
  /**
   * Controls whether or not spacing is left for an invisible note or object. It is
   * used only if no note, dot, or lyric is being printed. The value is yes (leave
   * spacing) if not specified.
   */
  printSpacing?: YesNoValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Indicates vertical alignment to the top, middle, bottom, or baseline of the
   * text. The default is implementation-dependent.
   */
  valign?: ValignValue[]
  /**
   * {@link Duration}
   */
  duration?: Duration[]
  /**
   * {@link Figure}
   */
  figure?: Figure[]
  /**
   * {@link Footnote}
   */
  footnote?: Footnote[]
  /**
   * {@link Level}
   */
  level?: Level[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/forward
 *
 * The &lt;backup&gt; and &lt;forward&gt; elements are required to coordinate
 * multiple voices in one part, including music on multiple staves. The
 * &lt;forward&gt; element is generally used within voices and staves. Duration
 * values should always be positive, and should not cross measure boundaries or
 * mid-measure changes in the &lt;divisions&gt; value.
 */
export interface Forward {
  /**
   * {@link Duration}
   */
  duration?: Duration[]
  /**
   * {@link Footnote}
   */
  footnote?: Footnote[]
  /**
   * {@link Level}
   */
  level?: Level[]
  /**
   * {@link Staff}
   */
  staff?: Staff[]
  /**
   * {@link Voice}
   */
  voice?: Voice[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/feature
 *
 * The &lt;feature&gt; element is a part of the &lt;grouping&gt; element used for
 * musical analysis. The type attribute represents the type of the feature and the
 * element content represents its value.
 */
export interface Feature {
  /**
   * Represents the type of the feature. This type is flexible to allow for different
   * analyses.
   */
  type?: TokenValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/grouping
 *
 * The &lt;grouping&gt; element is used for musical analysis. When the type
 * attribute is start or single, it usually contains one or more &lt;feature&gt
 * elements.  Feature elements contained within a stop type of grouping may be
 * ignored.
 */
export interface Grouping {
  /**
   * Indicates if this is a single-note grouping, or the start or stop of a
   * multi-note grouping.
   */
  type: StartStopSingleValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Distinguishes which &lt;grouping&gt; elements are in which hierarchy.
   */
  memberOf?: TokenValue[]
  /**
   * Distinguishes between various overlapping and hierarchical groupings. The
   * default value is 1.
   */
  number?: TokenValue[]
  /**
   * {@link Feature}
   */
  feature?: Feature[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/bass-alter
 *
 * The &lt;bass-alter&gt; element represents the chromatic alteration of the
 * &lt;bass&gt; of the current chord within the &lt;harmony&gt; element. In some
 * chord styles, the text for the &lt;bass-step&gt; element may include
 * &lt;bass-alter&gt; information. In that case, the print-object attribute of the
 * &lt;bass-alter&gt; element can be set to no.
 */
export interface BassAlter {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether the alteration should appear to the left or the right of the
   * step. It is right if not specified.
   */
  location?: LeftRightValue[]
  /**
   * Specifies whether or not to print an object. It is yes if not specified.
   */
  printObject?: YesNoValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * {@link SemitonesValue
   */
  v: SemitonesValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/bass-separator
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/bass-separator.png"><br>The
 * &lt;bass-separator&gt; element indicates that text, rather than a line or slash,
 * separates the bass from what precedes it.
 */
export interface BassSeparator {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/bass-step
 *
 * The &lt;bass-step&gt; element represents the pitch step of the bass of the
 * current chord within the harmony element.
 */
export interface BassStep {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Indicates how the bass should appear in a score if not using the element
   * contents.
   */
  text?: TokenValue[]
  /**
   * {@link StepValue
   */
  v: StepValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/bass
 *
 * The &lt;bass&gt; element is used to indicate a bass note in popular music chord
 * symbols, e.g. G/C. It is generally not used in functional harmony, as inversion
 * is generally not used in pop chord symbols. As with &lt;root&gt;, it is divided
 * into step and alter elements, similar to pitches.
 */
export interface Bass {
  /**
   * Specifies where the bass is displayed relative to what precedes it.
   */
  arrangement?: HarmonyArrangementValue[]
  /**
   * {@link BassAlter}
   */
  bassAlter?: BassAlter[]
  /**
   * {@link BassSeparator}
   */
  bassSeparator?: BassSeparator[]
  /**
   * {@link BassStep}
   */
  bassStep?: BassStep[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/degree-alter
 *
 * The &lt;degree-alter&gt; element represents the chromatic alteration for the
 * current degree. If the &lt;degree-type&gt; value is alter or subtract, the
 * &lt;degree-alter&gt; value is relative to the degree already in the chord based
 * on its kind element. If the &lt;degree-type&gt; value is add, the
 * &lt;degree-alter&gt; is relative to a dominant chord (major and perfect
 * intervals except for a minor seventh).
 */
export interface DegreeAlter {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates if plus and minus symbols should be used instead of sharp and flat
   * symbols to display the degree alteration. It is no if not specified.
   */
  plusMinus?: YesNoValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * {@link SemitonesValue
   */
  v: SemitonesValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/degree-type
 *
 * The &lt;degree-type&gt; element indicates if this degree is an addition,
 * alteration, or subtraction relative to the &lt;kind&gt; of the current chord.
 * The value of the &lt;degree-type&gt; element affects the interpretation of the
 * value of the &lt;degree-alter&gt; element.
 */
export interface DegreeType {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Specifies how the type of the degree should be displayed.
   */
  text?: TokenValue[]
  /**
   * {@link DegreeTypeValueValue
   */
  v: DegreeTypeValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/degree-value
 *
 * The content of the &lt;degree-value&gt; element is a number indicating the
 * degree of the chord (1 for the root, 3 for third, etc).
 */
export interface DegreeValue {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Indicates that a symbol should be used in specifying the degree.
   */
  symbol?: DegreeSymbolValueValue[]
  /**
   * Specifies how the value of the degree should be displayed. If the symbol
   * attribute is present, the value of the text attribute follows the symbol.
   */
  text?: TokenValue[]
  /**
   * {@link PositiveIntegerValue
   */
  v: PositiveIntegerValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/degree
 *
 * The &lt;degree&gt; element is used to add, alter, or subtract individual notes
 * in the chord. The print-object attribute can be used to keep the degree from
 * printing separately when it has already taken into account in the text attribute
 * of the &lt;kind&gt; element.
 */
export interface Degree {
  /**
   * Specifies whether or not to print an object. It is yes if not specified.
   */
  printObject?: YesNoValue[]
  /**
   * {@link DegreeAlter}
   */
  degreeAlter?: DegreeAlter[]
  /**
   * {@link DegreeType}
   */
  degreeType?: DegreeType[]
  /**
   * {@link DegreeValue}
   */
  degreeValue?: DegreeValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/first-fret
 *
 * The &lt;first-fret&gt; element indicates which fret is shown in the top space of
 * the frame; it is fret 1 if the element is not present.
 */
export interface FirstFret {
  /**
   * Indicates whether the text appears to the left or right of the frame.
   */
  location?: LeftRightValue[]
  /**
   * Indicates how the first fret is represented in the fret diagram.
   */
  text?: TokenValue[]
  /**
   * {@link PositiveIntegerValue
   */
  v: PositiveIntegerValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/frame-frets
 *
 * The frame-frets element gives the overall size of the frame in horizontal spaces
 * (frets).
 */
export interface FrameFrets {
  /**
   * {@link PositiveIntegerValue
   */
  v: PositiveIntegerValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/barre
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/barre.png"><br>The
 * &lt;barre&gt; element indicates placing a finger over multiple strings on a
 * single fret.
 */
export interface Barre {
  /**
   * The start value indicates the lowest pitched string (e.g., the string with the
   * highest MusicXML number). The stop value indicates the highest pitched string.
   */
  type: StartStopValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/fingering
 *
 * Fingering is typically indicated 1,2,3,4,5. Multiple fingerings may be given,
 * typically to substitute fingerings in the middle of a note. For guitar and other
 * fretted instruments, the &lt;fingering&gt; element represents the fretting
 * finger; the &lt;pluck&gt; element represents the plucking finger.
 */
export interface Fingering {
  /**
   * Indicates that this is an alternate fingering. It is no if not present.
   */
  alternate?: YesNoValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Indicates that this fingering is a substitution in the middle of a note. It is
   * no if not present.
   */
  substitution?: YesNoValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/fret
 *
 * The &lt;fret&gt; element is used with tablature notation and chord diagrams.
 * Fret numbers start with 0 for an open string and 1 for the first fret.
 */
export interface Fret {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * {@link NonNegativeIntegerValue
   */
  v: NonNegativeIntegerValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/string
 *
 * The &lt;string&gt; element is used with tablature notation, regular notation
 * (where it is often circled), and chord diagrams. String numbers start with 1 for
 * the highest pitched full-length string.
 */
export interface StringType {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * {@link StringNumberValue
   */
  v: StringNumberValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/frame-note
 *
 * The frame-note type represents each note included in the frame. An open string
 * will have a fret value of 0, while a muted string will not be associated with a
 * frame-note element.
 */
export interface FrameNote {
  /**
   * {@link Barre}
   */
  barre?: Barre[]
  /**
   * {@link Fingering}
   */
  fingering?: Fingering[]
  /**
   * {@link Fret}
   */
  fret?: Fret[]
  /**
   * {@link StringType}
   */
  stringType?: StringType[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/frame-strings
 *
 * The &lt;frame-strings&gt; element gives the overall size of the frame in
 * vertical lines (strings).
 */
export interface FrameStrings {
  /**
   * {@link PositiveIntegerValue
   */
  v: PositiveIntegerValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/frame
 *
 * The frame type represents a frame or fretboard diagram used together with a
 * chord symbol. The representation is based on the NIFF guitar grid with
 * additional information. The frame type's unplayed attribute indicates what to
 * display above a string that has no associated frame-note element. Typical values
 * are x and the empty string. If the attribute is not present, the display of the
 * unplayed string is application-defined.
 */
export interface Frame {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * In cases where text extends over more than one line, horizontal alignment and
   * justify values can be different. The most typical case is for credits, such
   * as:<br><br><pre>Words and music by<br>  Pat Songwriter</pre><br>Typically this
   * type of credit is aligned to the right, so that the position information refers
   * to the right-most part of the text. But in this example, the text is
   * center-justified, not right-justified.<br><br>The halign attribute is used in
   * these situations. If it is not present, its value is the same as for the justify
   * attribute. For elements where a justify attribute is not allowed, the default is
   * implementation-dependent.
   */
  halign?: LeftCenterRightValue[]
  height?: TenthsValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  unplayed?: TokenValue[]
  /**
   * Indicates vertical alignment to the top, middle, or bottom of the image. The
   * default is implementation-dependent.
   */
  valign?: ValignImageValue[]
  width?: TenthsValue[]
  /**
   * {@link FirstFret}
   */
  firstFret?: FirstFret[]
  /**
   * {@link FrameFrets}
   */
  frameFrets?: FrameFrets[]
  /**
   * {@link FrameNote}
   */
  frameNote?: FrameNote[]
  /**
   * {@link FrameStrings}
   */
  frameStrings?: FrameStrings[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/function
 *
 * The &lt;function&gt; element represents classical functional harmony with an
 * indication like I, II, III rather than C, D, E. It represents the Roman numeral
 * part of a functional harmony rather than the complete function itself. It has
 * been deprecated as of MusicXML 4.0 in favor of the &lt;numeral&gt; element.
 */
export interface FunctionType {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/inversion
 *
 * The &lt;inversion&gt; element represents harmony inversions. The value is a
 * number indicating which inversion is used: 0 for root position, 1 for first
 * inversion, etc.
 */
export interface Inversion {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Indicates how the inversion should be displayed in a score.
   */
  text?: TokenValue[]
  /**
   * {@link NonNegativeIntegerValue
   */
  v: NonNegativeIntegerValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/kind
 *
 * The &lt;kind&gt; element indicates the type of chord. The &lt;degree&gt
 * elements can then add, subtract, or alter from these starting points
 */
export interface Kind {
  /**
   * The bracket-degrees attribute is yes if all the degrees should be in a bracket.
   * The default is implementation-dependent.
   */
  bracketDegrees?: YesNoValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * In cases where text extends over more than one line, horizontal alignment and
   * justify values can be different. The most typical case is for credits, such
   * as:<br><br><pre>Words and music by<br>  Pat Songwriter</pre><br>Typically this
   * type of credit is aligned to the right, so that the position information refers
   * to the right-most part of the text. But in this example, the text is
   * center-justified, not right-justified.<br><br>The halign attribute is used in
   * these situations. If it is not present, its value is the same as for the justify
   * attribute. For elements where a justify attribute is not allowed, the default is
   * implementation-dependent.
   */
  halign?: LeftCenterRightValue[]
  /**
   * The parentheses-degrees attribute is yes if all the degrees should be in
   * parentheses. The default is implementation-dependent.
   */
  parenthesesDegrees?: YesNoValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * If yes, the &lt;degree&gt; elements should be stacked above each other. The
   * default is implementation-dependent.
   */
  stackDegrees?: YesNoValue[]
  /**
   * Describes how the &lt;kind&gt; should be spelled in a score. If the use-symbols
   * attribute is yes, this value follows the symbol. The default is
   * implementation-dependent.
   */
  text?: TokenValue[]
  /**
   * The use-symbols attribute is yes if the &lt;kind&gt; should be represented when
   * possible with harmony symbols rather than letters and numbers. These symbols
   * include:<br><ul><br><li>major: a triangle, like Unicode 25B3</li><li>minor: -,
   * like Unicode 002D</li><li>augmented: +, like Unicode 002B</li><li>diminished: °,
   * like Unicode 00B0</li><li>half-diminished: ø, like Unicode 00F8</li></ul>The
   * default is implementation-dependent.
   */
  useSymbols?: YesNoValue[]
  /**
   * Indicates vertical alignment to the top, middle, bottom, or baseline of the
   * text. The default is implementation-dependent.
   */
  valign?: ValignValue[]
  /**
   * {@link KindValueValue
   */
  v: KindValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/numeral-alter
 *
 * The &lt;numeral-alter&gt; element represents an alteration to the
 * &lt;numeral-root&gt;, similar to the &lt;alter&gt; element for a &lt;pitch&gt;.
 */
export interface NumeralAlter {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * The location attribute indicates whether the alteration should appear to the
   * left or the right of the &lt;numeral-root&gt;. It is left if not specified.
   */
  location?: LeftRightValue[]
  /**
   * Specifies whether or not to print an object. It is yes if not specified. It can
   * be used to hide an alteration in cases such as when the MusicXML encoding of a 6
   * or 7 &lt;numeral-root&gt; in a minor key requires an alteration that is not
   * displayed.
   */
  printObject?: YesNoValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * {@link SemitonesValue
   */
  v: SemitonesValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/numeral-fifths
 *
 * The &lt;numeral-fifths&gt; element specifies the key in the same way as the
 * &lt;fifths&gt; element.
 */
export interface NumeralFifths {
  /**
   * {@link FifthsValue
   */
  v: FifthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/numeral-mode
 *
 * The &lt;numeral-mode&gt; specifies the scale that is used to interpret the
 * &lt;numeral-root&gt; element values.
 */
export interface NumeralMode {
  /**
   * {@link NumeralModeValue
   */
  v: NumeralModeValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/numeral-key
 *
 * The &lt;numeral-key&gt; element is used when the key for the numeral is
 * different than the key specified by the key signature.
 */
export interface NumeralKey {
  /**
   * Specifies whether or not to print an object. It is yes if not specified.
   */
  printObject?: YesNoValue[]
  /**
   * {@link NumeralFifths}
   */
  numeralFifths?: NumeralFifths[]
  /**
   * {@link NumeralMode}
   */
  numeralMode?: NumeralMode[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/numeral-root
 *
 * The &lt;numeral-root&gt; element represents the Roman numeral or Nashville
 * number as a positive integer from 1 to 7.
 */
export interface NumeralRoot {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Indicates how the numeral should appear in the score. A &lt;numeral-root&gt
   * value of 5 with a &lt;kind&gt; of major would have a text attribute of "V" if
   * displayed as a Roman numeral, and "5" if displayed as a Nashville number. The
   * display is application-dependent if not specified.
   */
  text?: TokenValue[]
  /**
   * {@link NumeralValueValue
   */
  v: NumeralValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/numeral
 *
 * The &lt;numeral&gt; element represents the Roman numeral or Nashville number
 * part of a harmony. It requires that the key be specified in the encoding, either
 * with a &lt;key&gt; or &lt;numeral-key&gt; element.
 */
export interface Numeral {
  /**
   * {@link NumeralAlter}
   */
  numeralAlter?: NumeralAlter[]
  /**
   * {@link NumeralKey}
   */
  numeralKey?: NumeralKey[]
  /**
   * {@link NumeralRoot}
   */
  numeralRoot?: NumeralRoot[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/root-alter
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/root-alter.png"><br>The
 * &lt;root-alter&gt; element represents the chromatic alteration of the root of
 * the current chord within the &lt;harmony&gt; element. In some chord styles, the
 * text for the &lt;root-step&gt; element may include &lt;root-alter&gt
 * information. In that case, the print-object attribute of the &lt;root-alter&gt
 * element can be set to no.
 */
export interface RootAlter {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether the alteration should appear to the left or the right of the
   * step. It is right if not specified.
   */
  location?: LeftRightValue[]
  /**
   * Specifies whether or not to print an object. It is yes if not specified.
   */
  printObject?: YesNoValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * {@link SemitonesValue
   */
  v: SemitonesValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/root-step
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/root-step.png"><br>The
 * &lt;root-step&gt; element represents the pitch step of the root of the current
 * chord within the harmony element.
 */
export interface RootStep {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Indicates how the root should appear in a score if not using the element
   * contents.
   */
  text?: TokenValue[]
  /**
   * {@link StepValue
   */
  v: StepValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/root
 *
 * The &lt;root&gt; element indicates a pitch like C, D, E vs. a scale degree like
 * 1, 2, 3. It is used with chord symbols in popular music. The &lt;root&gt
 * element has a &lt;root-step&gt; and optional &lt;root-alter&gt; element similar
 * to the &lt;step&gt; and &lt;alter&gt; elements, but renamed to distinguish the
 * different musical meanings.
 */
export interface Root {
  /**
   * {@link RootAlter}
   */
  rootAlter?: RootAlter[]
  /**
   * {@link RootStep}
   */
  rootStep?: RootStep[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/harmony
 *
 * The &lt;harmony&gt; element represents harmony analysis, including  chord
 * symbols in popular music as well as functional harmony analysis in classical
 * music.
 */
export interface Harmony {
  /**
   * Specifies how multiple harmony-chords are arranged relative to each other.
   * Harmony-chords with vertical arrangement are separated by horizontal lines.
   * Harmony-chords with diagonal or horizontal arrangement are separated by diagonal
   * lines or slashes.
   */
  arrangement?: HarmonyArrangementValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the start of the entire current measure, at either the left
   * barline or the start of the system. Positive x is right and negative x is
   * left.<br><br>This attribute provides higher-resolution positioning data than the
   * &lt;offset&gt; element. Applications reading a MusicXML file that can understand
   * both features should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Specifies the printing of a frame or fretboard diagram.
   */
  printFrame?: YesNoValue[]
  /**
   * Specifies whether or not to print an object. It is yes if not specified.
   */
  printObject?: YesNoValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Distinguishes elements that are associated with a system rather than the
   * particular part where the element appears.
   */
  system?: SystemRelationValue[]
  /**
   * If there are alternate harmonies possible, this can be specified using multiple
   * &lt;harmony&gt; elements differentiated by type. Explicit harmonies have all
   * note present in the music; implied have some notes missing but implied
   * alternate represents alternate analyses.
   */
  type?: HarmonyTypeValue[]
  /**
   * {@link Bass}
   */
  bass?: Bass[]
  /**
   * {@link Degree}
   */
  degree?: Degree[]
  /**
   * {@link Footnote}
   */
  footnote?: Footnote[]
  /**
   * {@link Frame}
   */
  frame?: Frame[]
  /**
   * {@link FunctionType}
   */
  functionType?: FunctionType[]
  /**
   * {@link Inversion}
   */
  inversion?: Inversion[]
  /**
   * {@link Kind}
   */
  kind?: Kind[]
  /**
   * {@link Level}
   */
  level?: Level[]
  /**
   * {@link Numeral}
   */
  numeral?: Numeral[]
  /**
   * {@link Offset}
   */
  offset?: Offset[]
  /**
   * {@link Root}
   */
  root?: Root[]
  /**
   * {@link Staff}
   */
  staff?: Staff[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/accidental
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/accidental.png"><br>The
 * &lt;accidental&gt; element represents actual notated accidentals.
 */
export interface Accidental {
  /**
   * Specifies whether or not brackets are put around a symbol for an editorial
   * indication. If not specified, it is left to application defaults.
   */
  bracket?: YesNoValue[]
  /**
   * If yes, indicates that this is a cautionary accidental. The value is no if not
   * present.
   */
  cautionary?: YesNoValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * If yes, indicates that this is an editorial accidental. The value is no if not
   * present.
   */
  editorial?: YesNoValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Specifies whether or not parentheses are put around a symbol for an editorial
   * indication. If not specified, it is left to application defaults.
   */
  parentheses?: YesNoValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Specifies the symbol size to use for an editorial indication. If not specified,
   * it is left to application defaults.
   */
  size?: SymbolSizeValue[]
  /**
   * References a specific Standard Music Font Layout (SMuFL) accidental glyph. This
   * is used both with the other accidental value and for disambiguating cases where
   * a single MusicXML accidental value could be represented by multiple SMuFL
   * glyphs.
   */
  smufl?: SmuflAccidentalGlyphNameValue[]
  /**
   * {@link AccidentalValueValue
   */
  v: AccidentalValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/beam
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/beam.png"><br>Beam
 * values include begin, continue, end, forward hook, and backward hook. Each beam
 * in a note is represented with a separate &lt;beam&gt; element with a different
 * number attribute, starting with the eighth note beam using a value of 1.
 */
export interface Beam {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Beams that have a begin value may also have a fan attribute to indicate
   * accelerandos and ritardandos using fanned beams. The fan attribute may also be
   * used with a continue value if the fanning direction changes on that note. The
   * value is none if not specified.
   */
  fan?: FanValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Indicates eighth note through 1024th note beams using number values 1 thru 8
   * respectively. The default value is 1.<br><br>Note that this attribute does not
   * distinguish sets of beams that overlap, as it does for &lt;slur&gt; and other
   * elements. Beaming groups are distinguished by being in different voices, and/or
   * the presence or absence of &lt;grace&gt; and &lt;cue&gt; elements.
   */
  number?: BeamLevelValue[]
  /**
   * Deprecated as of Version 3.0. Formerly used for tremolos, it needs to be
   * specified with a "yes" value for each &lt;beam&gt; using it.
   */
  repeater?: YesNoValue[]
  /**
   * {@link BeamValueValue
   */
  v: BeamValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/chord
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/chord.png"><br>The
 * &lt;chord&gt; element indicates that this note is an additional chord tone with
 * the preceding note.
 */
export interface Chord {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/cue
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/cue.png"><br>The
 * &lt;cue&gt; element indicates the presence of a cue note. In MusicXML, a cue
 * note is a silent note with no playback. Normal notes that play can be specified
 * as cue size using the &lt;type&gt; element. A cue note that is specified as full
 * size using the &lt;type&gt; element will still remain silent.
 */
export interface Cue {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/dot
 *
 * One &lt;dot&gt; element is used for each dot of prolongation.
 */
export interface Dot {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Specifies whether the dot should appear above or below the staff line. It is
   * ignored for notes that appear on a staff space.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/grace
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/grace.png"><br>The
 * &lt;grace&gt; element indicates the presence of a grace note.
 */
export interface Grace {
  /**
   * Indicates to make time, not steal time, for grace note playback. The units are
   * in real-time divisions for the grace note.
   */
  makeTime?: DivisionsValue[]
  /**
   * The value is yes for slashed grace notes and no if no slash is present.
   */
  slash?: YesNoValue[]
  /**
   * Indicates the percentage of time to steal from the following note for the grace
   * note playback, as for appoggiaturas.
   */
  stealTimeFollowing?: PercentValue[]
  /**
   * The steal-time-previous attribute indicates the percentage of time to steal from
   * the previous note for the grace note playback.
   */
  stealTimePrevious?: PercentValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/instrument
 *
 * The &lt;instrument&gt; element distinguishes between &lt;score-instrument&gt
 * elements in a &lt;score-part&gt;. If multiple &lt;score-instrument&gt; elements
 * are specified in a &lt;score-part&gt;, there should be an &lt;instrument&gt
 * element for each note in the &lt;part&gt;. Notes that are shared between
 * multiple &lt;score-instrument&gt;s can have more than one &lt;instrument&gt
 * element.
 */
export interface Instrument {
  /**
   * An IDREF back to the &lt;score-instrument&gt; id attribute.
   */
  id: IDREFValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/assess
 *
 * By default, an assessment application should assess all notes without a
 * &lt;cue&gt; child element, and not assess any note with a &lt;cue&gt; child
 * element. The &lt;assess&gt; element allows this default assessment to be
 * overridden for individual notes.
 */
export interface Assess {
  /**
   * If yes, the note should be assessed; if no, it should not be assessed. If not
   * specified, it is no for notes with a &lt;cue&gt; child element and yes
   * otherwise.
   */
  type: YesNoValue[]
  /**
   * Restricts the type to apply to a single player. If missing, the type applies to
   * all players. It references the id attribute of a &lt;player&gt; element defined
   * within the matching &lt;score-part&gt;.
   */
  player?: IDREFValue[]
  /**
   * Restricts the type to apply to a set of times through a repeated section. If
   * missing, the type applies all times through the repeated section.
   */
  timeOnly?: TimeOnlyValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/other-listen
 *
 * The &lt;other-listen&gt; element represents other types of listening control and
 * interaction that are specific to a note.
 */
export interface OtherListen {
  /**
   * Indicates the type of listening to which the element content applies.
   */
  type: TokenValue[]
  /**
   * Restricts the element to apply to a single player.
   */
  player?: IDREFValue[]
  /**
   * Restrict the element to apply to a set of times through a repeated section.
   */
  timeOnly?: TimeOnlyValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/wait
 *
 * The &lt;wait&gt; element specifies a point where the accompaniment should wait
 * for a performer event before continuing. This typically happens at the start of
 * new sections or after a held note or indeterminate music. These waiting points
 * cannot always be inferred reliably from the contents of the displayed score.
 */
export interface Wait {
  /**
   * Restricts the &lt;wait&gt; to apply to a single player.
   */
  player?: IDREFValue[]
  /**
   * Restricts the &lt;wait&gt; to apply to a set of times through a repeated
   * section.
   */
  timeOnly?: TimeOnlyValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/listen
 *
 * The &lt;listen&gt; and &lt;listening&gt; elements, new in Version 4.0, specify
 * different ways that a score following or machine listening application can
 * interact with a performer. The &lt;listen&gt; element handles interactions that
 * are specific to a note. If multiple child elements of the same type are present,
 * they should have distinct player and/or time-only attributes.
 */
export interface Listen {
  /**
   * {@link Assess}
   */
  assess?: Assess[]
  /**
   * {@link OtherListen}
   */
  otherListen?: OtherListen[]
  /**
   * {@link Wait}
   */
  wait?: Wait[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/elision
 *
 * The &lt;elision&gt; element represents an elision between lyric syllables. The
 * text content specifies the symbol used to display the elision. Common values are
 * a no-break space (Unicode 00A0), an underscore (Unicode 005F), or an undertie
 * (Unicode 203F). If the text content is empty, the smufl attribute is used to
 * specify the symbol to use. If neither text content nor a smufl attribute are
 * present, the elision glyph is application-specific.
 */
export interface Elision {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Used to specify the elision symbol to use if the element text content is empty.
   * It is ignored otherwise.
   */
  smufl?: SmuflLyricsGlyphNameValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/end-line
 *
 * The &lt;end-line&gt; element comes from RP-017 for Standard MIDI File Lyric
 * meta-events. It facilitates lyric display for Karaoke and similar applications.
 */
export interface EndLine {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/end-paragraph
 *
 * The &lt;end-paragraph&gt; element comes from RP-017 for Standard MIDI File Lyric
 * meta-events. It facilitates lyric display for Karaoke and similar applications.
 */
export interface EndParagraph {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/humming
 *
 * The &lt;humming&gt; element represents a humming voice.
 */
export interface Humming {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/laughing
 *
 * The &lt;laughing&gt; element represents a laughing voice.
 */
export interface Laughing {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/syllabic
 *
 * The &lt;syllabic&gt; element indicates lyric hyphenation. The single, begin,
 * end, and middle values represent single-syllable words, word-beginning
 * syllables, word-ending syllables, and mid-word syllables, respectively.
 */
export interface Syllabic {
  /**
   * {@link SyllabicValue
   */
  v: SyllabicValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/text
 *
 * The &lt;text&gt; element represents a syllable or portion of a syllable for
 * lyric text underlay. A hyphen in the element content should only be used for an
 * actual hyphenated word.
 */
export interface Text {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * The text-direction attribute is used to adjust and override the Unicode
   * bidirectional text algorithm, similar to the Directionality data category in the
   * <a href="https://www.w3.org/TR/2007/REC-its-20070403/#directionality">W3C
   * Internationalization Tag Set recommendation</a>. The default value is ltr. This
   * attribute is typically used by applications that store text in left-to-right
   * visual order rather than logical order. Such applications can use the lro value
   * to better communicate with other applications that more fully support
   * bidirectional text.
   */
  dir?: TextDirectionValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Specifies text tracking. Values are either normal, which allows flexibility of
   * letter-spacing for purposes of text justification. or a number representing the
   * number of ems to add between each letter. The number may be negative in order to
   * subtract space. The value is normal if not specified.
   */
  letterSpacing?: NumberOrNormalValue[]
  /**
   * Number of lines to use when striking through text.
   */
  lineThrough?: NumberOfLinesValue[]
  /**
   * Number of lines to use when overlining text.
   */
  overline?: NumberOfLinesValue[]
  /**
   * Used to rotate text around the alignment point specified by the halign and
   * valign attributes. Positive values are clockwise rotations, while negative
   * values are counter-clockwise rotations.
   */
  rotation?: RotationDegreesValue[]
  /**
   * Number of lines to use when underlining text.
   */
  underline?: NumberOfLinesValue[]
  /**
   * Specifies the language used in the element content.
   */
  xmlLang?: XmlLangValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/lyric
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/lyric.png"><br>The
 * &lt;lyric&gt; element represents text underlays for lyrics. Two &lt;text&gt
 * elements that are not separated by an &lt;elision&gt; element are part of the
 * same syllable, but may have different text formatting. A second &lt;syllabic&gt
 * element is not allowed unless preceded by an &lt;elision&gt; element.
 */
export interface Lyric {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Indicates left, center, or right justification. The default value varies for
   * different elements. For elements where the justify attribute is present but the
   * halign attribute is not, the justify attribute indicates horizontal alignment as
   * well as justification.
   */
  justify?: LeftCenterRightValue[]
  /**
   * Indicates the name of the lyric type. Common examples are verse and chorus.
   */
  name?: TokenValue[]
  /**
   * Specifies the lyric line when multiple lines are present.
   */
  number?: NMTOKENValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Specifies whether or not to print an object. It is yes if not specified.
   */
  printObject?: YesNoValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Specifies which lyrics are to be sung which times through a repeated section.
   */
  timeOnly?: TimeOnlyValue[]
  /**
   * {@link Elision}
   */
  elision?: Elision[]
  /**
   * {@link EndLine}
   */
  endLine?: EndLine[]
  /**
   * {@link EndParagraph}
   */
  endParagraph?: EndParagraph[]
  /**
   * {@link Extend}
   */
  extend?: Extend[]
  /**
   * {@link Footnote}
   */
  footnote?: Footnote[]
  /**
   * {@link Humming}
   */
  humming?: Humming[]
  /**
   * {@link Laughing}
   */
  laughing?: Laughing[]
  /**
   * {@link Level}
   */
  level?: Level[]
  /**
   * {@link Syllabic}
   */
  syllabic?: Syllabic[]
  /**
   * {@link Text}
   */
  text?: Text[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/accidental-mark
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/accidental-mark.png"><br>An
 * &lt;accidental-mark&gt; element can be used as a separate notation or as part of
 * an ornament. When used in an ornament, position and placement are relative to
 * the ornament, not relative to the note.
 */
export interface AccidentalMark {
  /**
   * Specifies whether or not brackets are put around a symbol for an editorial
   * indication. If not specified, it is left to application defaults.
   */
  bracket?: YesNoValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Specifies whether or not parentheses are put around a symbol for an editorial
   * indication. If not specified, it is left to application defaults.
   */
  parentheses?: YesNoValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Specifies the symbol size to use for an editorial indication. If not specified,
   * it is left to application defaults.
   */
  size?: SymbolSizeValue[]
  /**
   * References a specific Standard Music Font Layout (SMuFL) accidental glyph. This
   * is used both with the other accidental value and for disambiguating cases where
   * a single MusicXML accidental value could be represented by multiple SMuFL
   * glyphs.
   */
  smufl?: SmuflAccidentalGlyphNameValue[]
  /**
   * {@link AccidentalValueValue
   */
  v: AccidentalValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/arpeggiate
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/arpeggiate.png"><br>The
 * &lt;arpeggiate&gt; element indicates that this note is part of an arpeggiated
 * chord. The length of the sign can be determined from the position attributes for
 * the &lt;arpeggiate&gt; elements used with the top and bottom notes of the
 * arpeggiated chord.
 */
export interface Arpeggiate {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * Used if there is an arrow on the arpeggio sign. By default, arpeggios go from
   * the lowest to highest note.
   */
  direction?: UpDownValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Used to distinguish between two simultaneous chords arpeggiated separately
   * (different numbers) or together (same number).
   */
  number?: NumberLevelValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * If yes, indicates that the arpeggio continues onto another staff within the
   * part. This serves as a hint to applications and is not required for cross-staff
   * arpeggios.
   */
  unbroken?: YesNoValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/accent
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/accent.png"><br>The
 * &lt;accent&gt; element indicates a regular horizontal accent mark.
 */
export interface Accent {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/breath-mark
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/breath-mark.png"><br>The
 * &lt;breath-mark&gt; element indicates a place to take a breath.
 */
export interface BreathMark {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * {@link BreathMarkValueValue
   */
  v: BreathMarkValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/caesura
 *
 * The &lt;caesura&gt; element indicates a slight pause. It is notated using a
 * "railroad tracks" symbol or other variations specified in the element content.
 */
export interface Caesura {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * {@link CaesuraValueValue
   */
  v: CaesuraValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/detached-legato
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/detached-legato.png"><br>The
 * &lt;detached-legato&gt; element indicates the combination of a tenuto line and
 * staccato dot symbol.
 */
export interface DetachedLegato {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/doit
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/doit.png"><br>The
 * &lt;doit&gt; element is an indeterminate slide attached to a single note. The
 * doit appears after the main note and goes above the main pitch.
 */
export interface Doit {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * The length of dashes in a dashed line. Ignored if the corresponding line-type
   * attribute is not dashed.
   */
  dashLength?: TenthsValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Distinguishes between different line lengths for doit, falloff, plop, and scoop
   * articulations.
   */
  lineLength?: LineLengthValue[]
  /**
   * Is the line straight or curved?
   */
  lineShape?: LineShapeValue[]
  /**
   * Specifies if the line is solid, dashed, dotted, or wavy.
   */
  lineType?: LineTypeValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * The length of spaces in a dashed line. Ignored if the corresponding line-type
   * attribute is not dashed.
   */
  spaceLength?: TenthsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/falloff
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/falloff.png"><br>The
 * &lt;falloff&gt; element is an indeterminate slide attached to a single note. The
 * falloff appears after the main note and goes below the main pitch.
 */
export interface Falloff {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * The length of dashes in a dashed line. Ignored if the corresponding line-type
   * attribute is not dashed.
   */
  dashLength?: TenthsValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Distinguishes between different line lengths for doit, falloff, plop, and scoop
   * articulations.
   */
  lineLength?: LineLengthValue[]
  /**
   * Is the line straight or curved?
   */
  lineShape?: LineShapeValue[]
  /**
   * Specifies if the line is solid, dashed, dotted, or wavy.
   */
  lineType?: LineTypeValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * The length of spaces in a dashed line. Ignored if the corresponding line-type
   * attribute is not dashed.
   */
  spaceLength?: TenthsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/other-articulation
 *
 * The &lt;other-articulation&gt; element is used to define any articulations not
 * yet in the MusicXML format. The smufl attribute can be used to specify a
 * particular articulation, allowing application interoperability without requiring
 * every Standard Music Font Layout (SMuFL) articulation to have a MusicXML element
 * equivalent. Using the &lt;other-articulation&gt; element without the smufl
 * attribute allows for extended representation, though without application
 * interoperability.
 */
export interface OtherArticulation {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Indicates a particular Standard Music Font Layout (SMuFL) character using its
   * canonical glyph name. Sometimes this is a formatting choice, and sometimes this
   * is a refinement of the semantic meaning of an element.
   */
  smufl?: SmuflGlyphNameValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/plop
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/plop.png"><br>The
 * &lt;plop&gt; element is an indeterminate slide attached to a single note. The
 * plop appears before the main note and comes from above the main pitch.
 */
export interface Plop {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * The length of dashes in a dashed line. Ignored if the corresponding line-type
   * attribute is not dashed.
   */
  dashLength?: TenthsValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Distinguishes between different line lengths for doit, falloff, plop, and scoop
   * articulations.
   */
  lineLength?: LineLengthValue[]
  /**
   * Is the line straight or curved?
   */
  lineShape?: LineShapeValue[]
  /**
   * Specifies if the line is solid, dashed, dotted, or wavy.
   */
  lineType?: LineTypeValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * The length of spaces in a dashed line. Ignored if the corresponding line-type
   * attribute is not dashed.
   */
  spaceLength?: TenthsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/scoop
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/scoop.png"><br>The
 * &lt;scoop&gt; element is an indeterminate slide attached to a single note. The
 * scoop appears before the main note and comes from below the main pitch.
 */
export interface Scoop {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * The length of dashes in a dashed line. Ignored if the corresponding line-type
   * attribute is not dashed.
   */
  dashLength?: TenthsValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Distinguishes between different line lengths for doit, falloff, plop, and scoop
   * articulations.
   */
  lineLength?: LineLengthValue[]
  /**
   * Is the line straight or curved?
   */
  lineShape?: LineShapeValue[]
  /**
   * Specifies if the line is solid, dashed, dotted, or wavy.
   */
  lineType?: LineTypeValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * The length of spaces in a dashed line. Ignored if the corresponding line-type
   * attribute is not dashed.
   */
  spaceLength?: TenthsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/soft-accent
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/soft-accent.png">
 */
export interface SoftAccent {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/spiccato
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/spiccato.png"><br>The
 * &lt;spiccato&gt; element is used for a stroke articulation, as opposed to a dot
 * or a wedge.
 */
export interface Spiccato {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/staccatissimo
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/staccatissimo.png"><br>The
 * &lt;staccatissimo&gt; element is used for a wedge articulation, as opposed to a
 * dot or a stroke.
 */
export interface Staccatissimo {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/staccato
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/staccato.png"><br>The
 * &lt;staccato&gt; element is used for a dot articulation, as opposed to a stroke
 * or a wedge.
 */
export interface Staccato {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/stress
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/stress.png">
 */
export interface Stress {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/strong-accent
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/strong-accent.png">
 */
export interface StrongAccent {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Indicates if the point of the accent is down or up. The default value is up.
   */
  type?: UpDownValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tenuto
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/tenuto.png"><br>The
 * &lt;tenuto&gt; element indicates a tenuto line symbol.
 */
export interface Tenuto {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/unstress
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/unstress.png">
 */
export interface Unstress {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/articulations
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/articulations.png"><br>The
 * &lt;articulations&gt; element groups together articulations and accents.
 */
export interface Articulations {
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * {@link Accent}
   */
  accent?: Accent[]
  /**
   * {@link BreathMark}
   */
  breathMark?: BreathMark[]
  /**
   * {@link Caesura}
   */
  caesura?: Caesura[]
  /**
   * {@link DetachedLegato}
   */
  detachedLegato?: DetachedLegato[]
  /**
   * {@link Doit}
   */
  doit?: Doit[]
  /**
   * {@link Falloff}
   */
  falloff?: Falloff[]
  /**
   * {@link OtherArticulation}
   */
  otherArticulation?: OtherArticulation[]
  /**
   * {@link Plop}
   */
  plop?: Plop[]
  /**
   * {@link Scoop}
   */
  scoop?: Scoop[]
  /**
   * {@link SoftAccent}
   */
  softAccent?: SoftAccent[]
  /**
   * {@link Spiccato}
   */
  spiccato?: Spiccato[]
  /**
   * {@link Staccatissimo}
   */
  staccatissimo?: Staccatissimo[]
  /**
   * {@link Staccato}
   */
  staccato?: Staccato[]
  /**
   * {@link Stress}
   */
  stress?: Stress[]
  /**
   * {@link StrongAccent}
   */
  strongAccent?: StrongAccent[]
  /**
   * {@link Tenuto}
   */
  tenuto?: Tenuto[]
  /**
   * {@link Unstress}
   */
  unstress?: Unstress[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/glissando
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/glissando.png"><br>The
 * &lt;glissando&gt; and &lt;slide&gt; elements both indicate rapidly moving from
 * one pitch to the other so that individual notes are not discerned. A
 * &lt;glissando&gt; sounds the distinct notes in between the two pitches and
 * defaults to a wavy line. The optional text is printed alongside the line.
 */
export interface Glissando {
  /**
   * Indicates if this is the start or stop of the glissando.
   */
  type: StartStopValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * The length of dashes in a dashed line. Ignored if the corresponding line-type
   * attribute is not dashed.
   */
  dashLength?: TenthsValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Specifies if the line is solid, dashed, dotted, or wavy.
   */
  lineType?: LineTypeValue[]
  /**
   * Distinguishes multiple glissandos when they overlap in MusicXML document order.
   * The default value is 1.
   */
  number?: NumberLevelValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * The length of spaces in a dashed line. Ignored if the corresponding line-type
   * attribute is not dashed.
   */
  spaceLength?: TenthsValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/non-arpeggiate
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/non-arpeggiate.png"><br>The
 * &lt;non-arpeggiate&gt; element indicates that this &lt;note&gt; is at the top or
 * bottom of a bracket indicating to not arpeggiate these notes. Since this does
 * not involve playback, it is only used on the top or bottom notes, not on each
 * &lt;note&gt; as for the &lt;arpeggiate&gt; element.
 */
export interface NonArpeggiate {
  /**
   * Indicates whether this is the top or bottom of the symbol.
   */
  type: TopBottomValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Used to distinguish between two simultaneous chords bracketed separately
   * (different numbers) or together (same number).
   */
  number?: NumberLevelValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/delayed-inverted-turn
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/delayed-inverted-turn.png">
 */
export interface DelayedInvertedTurn {
  /**
   * If yes, the trill accelerates during playback. It is no if not specified.
   */
  accelerate?: YesNoValue[]
  /**
   * The number of distinct notes during playback, counting the starting note but not
   * the two-note turn. It is 4 if not specified.
   */
  beats?: TrillBeatsValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * The percentage of the way through the duration for landing on the last beat. It
   * is 75 if not specified.
   */
  lastBeat?: PercentValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * The percentage of the way through the duration for landing on the second beat.
   * It is 25 if not specified.
   */
  secondBeat?: PercentValue[]
  /**
   * If yes, then a vertical line is used to slash the turn. It is no if not
   * specified.
   */
  slash?: YesNoValue[]
  /**
   * The starting note for playback, relative to the current note. It is upper if not
   * specified.
   */
  startNote?: StartNoteValue[]
  /**
   * The alternating note for playback, relative to the current note. It is whole if
   * not specified.
   */
  trillStep?: TrillStepValue[]
  /**
   * Specifies the two-note turn included at the end of the trill, if any. It is none
   * if not specified.
   */
  twoNoteTurn?: TwoNoteTurnValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/delayed-turn
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/delayed-turn.png"><br>The
 * &lt;delayed-turn&gt; element indicates a normal turn that is delayed until the
 * end of the current note.
 */
export interface DelayedTurn {
  /**
   * If yes, the trill accelerates during playback. It is no if not specified.
   */
  accelerate?: YesNoValue[]
  /**
   * The number of distinct notes during playback, counting the starting note but not
   * the two-note turn. It is 4 if not specified.
   */
  beats?: TrillBeatsValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * The percentage of the way through the duration for landing on the last beat. It
   * is 75 if not specified.
   */
  lastBeat?: PercentValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * The percentage of the way through the duration for landing on the second beat.
   * It is 25 if not specified.
   */
  secondBeat?: PercentValue[]
  /**
   * If yes, then a vertical line is used to slash the turn. It is no if not
   * specified.
   */
  slash?: YesNoValue[]
  /**
   * The starting note for playback, relative to the current note. It is upper if not
   * specified.
   */
  startNote?: StartNoteValue[]
  /**
   * The alternating note for playback, relative to the current note. It is whole if
   * not specified.
   */
  trillStep?: TrillStepValue[]
  /**
   * Specifies the two-note turn included at the end of the trill, if any. It is none
   * if not specified.
   */
  twoNoteTurn?: TwoNoteTurnValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/haydn
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/haydn.png">
 */
export interface Haydn {
  /**
   * If yes, the trill accelerates during playback. It is no if not specified.
   */
  accelerate?: YesNoValue[]
  /**
   * The number of distinct notes during playback, counting the starting note but not
   * the two-note turn. It is 3 if not specified.
   */
  beats?: TrillBeatsValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * The percentage of the way through the duration for landing on the last beat. It
   * is 24 if not specified.
   */
  lastBeat?: PercentValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * The percentage of the way through the duration for landing on the second beat.
   * It is 12 if not specified.
   */
  secondBeat?: PercentValue[]
  /**
   * The starting note for playback, relative to the current note. It is main if not
   * specified.
   */
  startNote?: StartNoteValue[]
  /**
   * The alternating note for playback, relative to the current note. It is whole if
   * not specified.
   */
  trillStep?: TrillStepValue[]
  /**
   * Specifies the two-note turn included at the end of the trill, if any. It is none
   * if not specified.
   */
  twoNoteTurn?: TwoNoteTurnValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/inverted-mordent
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/inverted-mordent.png"><br>The
 * &lt;inverted-mordent&gt; element represents the sign without the vertical line.
 * The choice of which mordent is inverted differs between MusicXML and the
 * Standard Music Font Layout (SMuFL).
 */
export interface InvertedMordent {
  /**
   * If yes, the trill accelerates during playback. It is no if not specified.
   */
  accelerate?: YesNoValue[]
  /**
   * Used for compound ornaments, indicating how the beginning of the ornament look
   * relative to the main part of the mordent.
   */
  approach?: AboveBelowValue[]
  /**
   * The number of distinct notes during playback, counting the starting note but not
   * the two-note turn. It is 3 if not specified.
   */
  beats?: TrillBeatsValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * Used for compound ornaments, indicating how the ending of the ornament look
   * relative to the main part of the mordent.
   */
  departure?: AboveBelowValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * The percentage of the way through the duration for landing on the last beat. It
   * is 24 if not specified.
   */
  lastBeat?: PercentValue[]
  /**
   * Specifies if the ornament is longer than usual. The value is no if not
   * specified.
   */
  long?: YesNoValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * The percentage of the way through the duration for landing on the second beat.
   * It is 12 if not specified.
   */
  secondBeat?: PercentValue[]
  /**
   * The starting note for playback, relative to the current note. It is main if not
   * specified.
   */
  startNote?: StartNoteValue[]
  /**
   * The alternating note for playback, relative to the current note. It is whole if
   * not specified.
   */
  trillStep?: TrillStepValue[]
  /**
   * Specifies the two-note turn included at the end of the trill, if any. It is none
   * if not specified.
   */
  twoNoteTurn?: TwoNoteTurnValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/inverted-turn
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/inverted-turn.png">
 */
export interface InvertedTurn {
  /**
   * If yes, the trill accelerates during playback. It is no if not specified.
   */
  accelerate?: YesNoValue[]
  /**
   * The number of distinct notes during playback, counting the starting note but not
   * the two-note turn. It is 4 if not specified.
   */
  beats?: TrillBeatsValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * The percentage of the way through the duration for landing on the last beat. It
   * is 75 if not specified.
   */
  lastBeat?: PercentValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * The percentage of the way through the duration for landing on the second beat.
   * It is 25 if not specified.
   */
  secondBeat?: PercentValue[]
  /**
   * If yes, then a vertical line is used to slash the turn. It is no if not
   * specified.
   */
  slash?: YesNoValue[]
  /**
   * The starting note for playback, relative to the current note. It is upper if not
   * specified.
   */
  startNote?: StartNoteValue[]
  /**
   * The alternating note for playback, relative to the current note. It is whole if
   * not specified.
   */
  trillStep?: TrillStepValue[]
  /**
   * Specifies the two-note turn included at the end of the trill, if any. It is none
   * if not specified.
   */
  twoNoteTurn?: TwoNoteTurnValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/inverted-vertical-turn
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/inverted-vertical-turn.png">
 */
export interface InvertedVerticalTurn {
  /**
   * If yes, the trill accelerates during playback. It is no if not specified.
   */
  accelerate?: YesNoValue[]
  /**
   * The number of distinct notes during playback, counting the starting note but not
   * the two-note turn. It is 3 if not specified.
   */
  beats?: TrillBeatsValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * The percentage of the way through the duration for landing on the last beat. It
   * is 24 if not specified.
   */
  lastBeat?: PercentValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * The percentage of the way through the duration for landing on the second beat.
   * It is 12 if not specified.
   */
  secondBeat?: PercentValue[]
  /**
   * The starting note for playback, relative to the current note. It is main if not
   * specified.
   */
  startNote?: StartNoteValue[]
  /**
   * The alternating note for playback, relative to the current note. It is whole if
   * not specified.
   */
  trillStep?: TrillStepValue[]
  /**
   * Specifies the two-note turn included at the end of the trill, if any. It is none
   * if not specified.
   */
  twoNoteTurn?: TwoNoteTurnValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/mordent
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/mordent.png"><br>The
 * &lt;mordent&gt; element represents the sign with the vertical line. The choice
 * of which mordent sign is inverted differs between MusicXML and the Standard
 * Music Font Layout (SMuFL).
 */
export interface Mordent {
  /**
   * If yes, the trill accelerates during playback. It is no if not specified.
   */
  accelerate?: YesNoValue[]
  /**
   * Used for compound ornaments, indicating how the beginning of the ornament look
   * relative to the main part of the mordent.
   */
  approach?: AboveBelowValue[]
  /**
   * The number of distinct notes during playback, counting the starting note but not
   * the two-note turn. It is 3 if not specified.
   */
  beats?: TrillBeatsValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * Used for compound ornaments, indicating how the ending of the ornament look
   * relative to the main part of the mordent.
   */
  departure?: AboveBelowValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * The percentage of the way through the duration for landing on the last beat. It
   * is 24 if not specified.
   */
  lastBeat?: PercentValue[]
  /**
   * Specifies if the ornament is longer than usual. The value is no if not
   * specified.
   */
  long?: YesNoValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * The percentage of the way through the duration for landing on the second beat.
   * It is 12 if not specified.
   */
  secondBeat?: PercentValue[]
  /**
   * The starting note for playback, relative to the current note. It is main if not
   * specified.
   */
  startNote?: StartNoteValue[]
  /**
   * The alternating note for playback, relative to the current note. It is whole if
   * not specified.
   */
  trillStep?: TrillStepValue[]
  /**
   * Specifies the two-note turn included at the end of the trill, if any. It is none
   * if not specified.
   */
  twoNoteTurn?: TwoNoteTurnValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/other-ornament
 *
 * The &lt;other-ornament&gt; element is used to define any ornaments not yet in
 * the MusicXML format. The smufl attribute can be used to specify a particular
 * ornament, allowing application interoperability without requiring every Standard
 * Music Font Layout (SMuFL) ornament to have a MusicXML element equivalent. Using
 * the &lt;other-ornament&gt; element without the smufl attribute allows for
 * extended representation, though without application interoperability.
 */
export interface OtherOrnament {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Indicates a particular Standard Music Font Layout (SMuFL) character using its
   * canonical glyph name. Sometimes this is a formatting choice, and sometimes this
   * is a refinement of the semantic meaning of an element.
   */
  smufl?: SmuflGlyphNameValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/schleifer
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/schleifer.png"><br>The
 * name for the &lt;schleifer&gt; element is based on the German ornament name, to
 * avoid confusion with the &lt;slide&gt; element.
 */
export interface Schleifer {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/shake
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/shake.png">
 */
export interface Shake {
  /**
   * If yes, the trill accelerates during playback. It is no if not specified.
   */
  accelerate?: YesNoValue[]
  /**
   * The number of distinct notes during playback, counting the starting note but not
   * the two-note turn. It is 3 if not specified.
   */
  beats?: TrillBeatsValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * The percentage of the way through the duration for landing on the last beat. It
   * is 24 if not specified.
   */
  lastBeat?: PercentValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * The percentage of the way through the duration for landing on the second beat.
   * It is 12 if not specified.
   */
  secondBeat?: PercentValue[]
  /**
   * The starting note for playback, relative to the current note. It is main if not
   * specified.
   */
  startNote?: StartNoteValue[]
  /**
   * The alternating note for playback, relative to the current note. It is whole if
   * not specified.
   */
  trillStep?: TrillStepValue[]
  /**
   * Specifies the two-note turn included at the end of the trill, if any. It is none
   * if not specified.
   */
  twoNoteTurn?: TwoNoteTurnValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tremolo
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/tremolo.png"><br>The
 * &lt;tremolo&gt; element can be used to indicate single-note, double-note, or
 * unmeasured tremolos. The text of the element indicates the number of tremolo
 * marks and is an integer from 0 to 8. Note that the number of attached beams is
 * not included in this value, but is represented separately using the &lt;beam
 * element&gt;. The value should be 0 for unmeasured tremolos.
 */
export interface Tremolo {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Indicates a particular Standard Music Font Layout (SMuFL) character using its
   * canonical glyph name. Sometimes this is a formatting choice, and sometimes this
   * is a refinement of the semantic meaning of an element.
   */
  smufl?: SmuflGlyphNameValue[]
  /**
   * Single-note tremolos use single, double-note tremolos use start or stop, and
   * unmeasured tremolos use unmeasured. The default value is single for
   * compatibility with Version 1.1.
   */
  type?: TremoloTypeValue[]
  /**
   * {@link TremoloMarksValue
   */
  v: TremoloMarksValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/trill-mark
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/trill-mark.png"><br>The
 * &lt;trill-mark&gt; element represents the trill symbol.
 */
export interface TrillMark {
  /**
   * If yes, the trill accelerates during playback. It is no if not specified.
   */
  accelerate?: YesNoValue[]
  /**
   * The number of distinct notes during playback, counting the starting note but not
   * the two-note turn. It is 3 if not specified.
   */
  beats?: TrillBeatsValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * The percentage of the way through the duration for landing on the last beat. It
   * is 24 if not specified.
   */
  lastBeat?: PercentValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * The percentage of the way through the duration for landing on the second beat.
   * It is 12 if not specified.
   */
  secondBeat?: PercentValue[]
  /**
   * The starting note for playback, relative to the current note. It is main if not
   * specified.
   */
  startNote?: StartNoteValue[]
  /**
   * The alternating note for playback, relative to the current note. It is whole if
   * not specified.
   */
  trillStep?: TrillStepValue[]
  /**
   * Specifies the two-note turn included at the end of the trill, if any. It is none
   * if not specified.
   */
  twoNoteTurn?: TwoNoteTurnValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/turn
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/turn.png">
 */
export interface Turn {
  /**
   * If yes, the trill accelerates during playback. It is no if not specified.
   */
  accelerate?: YesNoValue[]
  /**
   * The number of distinct notes during playback, counting the starting note but not
   * the two-note turn. It is 4 if not specified.
   */
  beats?: TrillBeatsValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * The percentage of the way through the duration for landing on the last beat. It
   * is 75 if not specified.
   */
  lastBeat?: PercentValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * The percentage of the way through the duration for landing on the second beat.
   * It is 25 if not specified.
   */
  secondBeat?: PercentValue[]
  /**
   * If yes, then a vertical line is used to slash the turn. It is no if not
   * specified.
   */
  slash?: YesNoValue[]
  /**
   * The starting note for playback, relative to the current note. It is upper if not
   * specified.
   */
  startNote?: StartNoteValue[]
  /**
   * The alternating note for playback, relative to the current note. It is whole if
   * not specified.
   */
  trillStep?: TrillStepValue[]
  /**
   * Specifies the two-note turn included at the end of the trill, if any. It is none
   * if not specified.
   */
  twoNoteTurn?: TwoNoteTurnValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/vertical-turn
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/vertical-turn.png">
 */
export interface VerticalTurn {
  /**
   * If yes, the trill accelerates during playback. It is no if not specified.
   */
  accelerate?: YesNoValue[]
  /**
   * The number of distinct notes during playback, counting the starting note but not
   * the two-note turn. It is 3 if not specified.
   */
  beats?: TrillBeatsValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * The percentage of the way through the duration for landing on the last beat. It
   * is 24 if not specified.
   */
  lastBeat?: PercentValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * The percentage of the way through the duration for landing on the second beat.
   * It is 12 if not specified.
   */
  secondBeat?: PercentValue[]
  /**
   * The starting note for playback, relative to the current note. It is main if not
   * specified.
   */
  startNote?: StartNoteValue[]
  /**
   * The alternating note for playback, relative to the current note. It is whole if
   * not specified.
   */
  trillStep?: TrillStepValue[]
  /**
   * Specifies the two-note turn included at the end of the trill, if any. It is none
   * if not specified.
   */
  twoNoteTurn?: TwoNoteTurnValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/ornaments
 *
 * Ornaments can be any of several types, followed optionally by accidentals. The
 * &lt;accidental-mark&gt; element's content is represented the same as an
 * &lt;accidental&gt; element, but with a different name to reflect the different
 * musical meaning.
 */
export interface Ornaments {
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * {@link AccidentalMark}
   */
  accidentalMark?: AccidentalMark[]
  /**
   * {@link DelayedInvertedTurn}
   */
  delayedInvertedTurn?: DelayedInvertedTurn[]
  /**
   * {@link DelayedTurn}
   */
  delayedTurn?: DelayedTurn[]
  /**
   * {@link Haydn}
   */
  haydn?: Haydn[]
  /**
   * {@link InvertedMordent}
   */
  invertedMordent?: InvertedMordent[]
  /**
   * {@link InvertedTurn}
   */
  invertedTurn?: InvertedTurn[]
  /**
   * {@link InvertedVerticalTurn}
   */
  invertedVerticalTurn?: InvertedVerticalTurn[]
  /**
   * {@link Mordent}
   */
  mordent?: Mordent[]
  /**
   * {@link OtherOrnament}
   */
  otherOrnament?: OtherOrnament[]
  /**
   * {@link Schleifer}
   */
  schleifer?: Schleifer[]
  /**
   * {@link Shake}
   */
  shake?: Shake[]
  /**
   * {@link Tremolo}
   */
  tremolo?: Tremolo[]
  /**
   * {@link TrillMark}
   */
  trillMark?: TrillMark[]
  /**
   * {@link Turn}
   */
  turn?: Turn[]
  /**
   * {@link VerticalTurn}
   */
  verticalTurn?: VerticalTurn[]
  /**
   * {@link WavyLine}
   */
  wavyLine?: WavyLine[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/other-notation
 *
 * The &lt;other-notation&gt; element is used to define any notations not yet in
 * the MusicXML format. It handles notations where more specific extension elements
 * such as &lt;other-dynamics&gt; and &lt;other-technical&gt; are not appropriate.
 */
export interface OtherNotation {
  /**
   * Indicates if this is a single-note notation, or the start or stop of a
   * multi-note notation.
   */
  type: StartStopSingleValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Distinguishes multiple notations when they overlap in MusicXML document order.
   * The default value is 1.
   */
  number?: NumberLevelValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Specifies whether or not to print an object. It is yes if not specified.
   */
  printObject?: YesNoValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Indicates a particular Standard Music Font Layout (SMuFL) character using its
   * canonical glyph name. Sometimes this is a formatting choice, and sometimes this
   * is a refinement of the semantic meaning of an element.
   */
  smufl?: SmuflGlyphNameValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/slide
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/slide.png"><br>The
 * &lt;glissando&gt; and &lt;slide&gt; elements both indicate rapidly moving from
 * one pitch to the other so that individual notes are not discerned. A
 * &lt;slide&gt; is continuous between the two pitches and defaults to a solid
 * line. The optional text is printed alongside the line.
 */
export interface Slide {
  /**
   * Indicates if this is the start or stop of the slide.
   */
  type: StartStopValue[]
  /**
   * Does the bend accelerate during playback? Default is "no".
   */
  accelerate?: YesNoValue[]
  /**
   * The number of discrete elements (like MIDI pitch bends) used to represent a
   * continuous bend or slide. Default is 4.
   */
  beats?: TrillBeatsValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * The length of dashes in a dashed line. Ignored if the corresponding line-type
   * attribute is not dashed.
   */
  dashLength?: TenthsValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * The percentage of the duration for starting a bend. Default is 25.
   */
  firstBeat?: PercentValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * The percentage of the duration for ending a bend. Default is 75.
   */
  lastBeat?: PercentValue[]
  /**
   * Specifies if the line is solid, dashed, dotted, or wavy.
   */
  lineType?: LineTypeValue[]
  /**
   * Distinguishes multiple slides when they overlap in MusicXML document order. The
   * default value is 1.
   */
  number?: NumberLevelValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * The length of spaces in a dashed line. Ignored if the corresponding line-type
   * attribute is not dashed.
   */
  spaceLength?: TenthsValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/slur
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/slur.png"><br>Most
 * slurs are represented with two &lt;slur&gt; elements: one with a start type, and
 * one with a stop type. Slurs can add more elements using a continue type. This is
 * typically used to specify the formatting of cross-system slurs, or to specify
 * the shape of very complex slurs.
 */
export interface Slur {
  /**
   * Indicates if this is the start, stop, or continuation of the slur.
   */
  type: StartStopContinueValue[]
  /**
   * The horizontal position of an outgoing bezier point for slurs and ties with a
   * start type, or of an incoming bezier point for slurs and ties with types of stop
   * or continue. If both the bezier-x and bezier-offset attributes are present, the
   * bezier-x attribute takes priority. This attribute is deprecated as of MusicXML
   * 3.1.
   */
  bezierOffset?: DivisionsValue[]
  /**
   * The horizontal position of an outgoing bezier point for slurs with a continue
   * type. Not valid for other types. If both the bezier-x2 and bezier-offset2
   * attributes are present, the bezier-x2 attribute takes priority. This attribute
   * is deprecated as of MusicXML 3.1.
   */
  bezierOffset2?: DivisionsValue[]
  /**
   * The horizontal position of an outgoing bezier point for slurs and ties with a
   * start type, or of an incoming bezier point for slurs and ties with types of stop
   * or continue.
   */
  bezierX?: TenthsValue[]
  /**
   * The horizontal position of an outgoing bezier point for slurs with a continue
   * type. Not valid for other types.
   */
  bezierX2?: TenthsValue[]
  /**
   * The vertical position of an outgoing bezier point for slurs and ties with a
   * start type, or of an incoming bezier point for slurs and ties with types of stop
   * or continue.
   */
  bezierY?: TenthsValue[]
  /**
   * The vertical position of an outgoing bezier point for slurs with a continue
   * type. Not valid for other types.
   */
  bezierY2?: TenthsValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * The length of dashes in a dashed line. Ignored if the corresponding line-type
   * attribute is not dashed.
   */
  dashLength?: TenthsValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Specifies if the line is solid, dashed, dotted, or wavy.
   */
  lineType?: LineTypeValue[]
  /**
   * Distinguishes multiple slurs when they overlap in MusicXML document order.
   */
  number?: NumberLevelValue[]
  /**
   * Indicates whether slurs and ties are overhand (tips down) or underhand (tips
   * up). This is distinct from the placement attribute used by any notation type.
   */
  orientation?: OverUnderValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * The length of spaces in a dashed line. Ignored if the corresponding line-type
   * attribute is not dashed.
   */
  spaceLength?: TenthsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/arrow-direction
 *
 * The &lt;arrow-direction&gt; element represents the direction in which an arrow
 * points, using Unicode arrow terminology.
 */
export interface ArrowDirection {
  /**
   * {@link ArrowDirectionValue
   */
  v: ArrowDirectionValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/arrow-style
 *
 * The &lt;arrow-style&gt; element represents the style of an arrow, using Unicode
 * arrow terminology.
 */
export interface ArrowStyle {
  /**
   * {@link ArrowStyleValue
   */
  v: ArrowStyleValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/arrowhead
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/arrowhead.png">
 */
export interface Arrowhead {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/circular-arrow
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/circular-arrow.png"><br>The
 * &lt;circular-arrow&gt; element represents a circular arrow, using Unicode arrow
 * terminology to specify the arrow direction.
 */
export interface CircularArrow {
  /**
   * {@link CircularArrowValue
   */
  v: CircularArrowValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/arrow
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/arrow.png"><br>The
 * &lt;arrow&gt; element represents an arrow used for a musical technical
 * indication. It can represent both Unicode and Standard Music Font Layout (SMuFL)
 * arrows. The smufl attribute distinguishes different SMuFL glyphs that have an
 * arrow appearance such as arrowBlackUp, guitarStrumUp, or handbellsSwingUp. The
 * specified glyph should match the descriptive representation.
 */
export interface Arrow {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Indicates a particular Standard Music Font Layout (SMuFL) character using its
   * canonical glyph name. Sometimes this is a formatting choice, and sometimes this
   * is a refinement of the semantic meaning of an element.
   */
  smufl?: SmuflGlyphNameValue[]
  /**
   * {@link ArrowDirection}
   */
  arrowDirection?: ArrowDirection[]
  /**
   * {@link ArrowStyle}
   */
  arrowStyle?: ArrowStyle[]
  /**
   * {@link Arrowhead}
   */
  arrowhead?: Arrowhead[]
  /**
   * {@link CircularArrow}
   */
  circularArrow?: CircularArrow[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/bend-alter
 *
 * The &lt;bend-alter&gt; element indicates the number of semitones in the bend,
 * similar to the &lt;alter&gt; element. As with the &lt;alter&gt; element, numbers
 * like 0.5 can be used to indicate microtones. Negative values indicate pre-bends
 * or releases. The &lt;pre-bend&gt; and &lt;release&gt; elements are used to
 * distinguish what is intended. Because the &lt;bend-alter&gt; element represents
 * the number of steps in the bend, a release after a bend has a negative
 * &lt;bend-alter&gt; value, not a zero value.
 */
export interface BendAlter {
  /**
   * {@link SemitonesValue
   */
  v: SemitonesValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pre-bend
 *
 * The &lt;pre-bend&gt; element indicates that a bend is a pre-bend rather than a
 * normal bend or a release.
 */
export interface PreBend {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/release
 *
 * The &lt;release&gt; element indicates that a bend is a release rather than a
 * normal bend or pre-bend. The first-beat and last-beat attributes of the parent
 * &lt;bend&gt; element are relative to the original note position, not this offset
 * value.
 */
export interface Release {
  /**
   * Specifies where the release starts in terms of divisions relative to the current
   * note.
   */
  offset?: DivisionsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/with-bar
 *
 * The &lt;with-bar&gt; element indicates that the bend is to be done at the bridge
 * with a whammy or vibrato bar. The content of the element indicates how this
 * should be notated. Content values of "scoop" and "dip" refer to the Standard
 * Music Font Layout (SMuFL) guitarVibratoBarScoop and guitarVibratoBarDip glyphs.
 */
export interface WithBar {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/bend
 *
 * The &lt;bend&gt; element is used in guitar notation and tablature. A single note
 * with a bend and release will contain two &lt;bend&gt; elements: the first to
 * represent the bend and the second to represent the release.
 */
export interface Bend {
  /**
   * Does the bend accelerate during playback? Default is "no".
   */
  accelerate?: YesNoValue[]
  /**
   * The number of discrete elements (like MIDI pitch bends) used to represent a
   * continuous bend or slide. Default is 4.
   */
  beats?: TrillBeatsValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * The percentage of the duration for starting a bend. Default is 25.
   */
  firstBeat?: PercentValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * The percentage of the duration for ending a bend. Default is 75.
   */
  lastBeat?: PercentValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Distinguishes between the angled bend symbols commonly used in standard notation
   * and the curved bend symbols commonly used in both tablature and standard
   * notation.
   */
  shape?: BendShapeValue[]
  /**
   * {@link BendAlter}
   */
  bendAlter?: BendAlter[]
  /**
   * {@link PreBend}
   */
  preBend?: PreBend[]
  /**
   * {@link Release}
   */
  release?: Release[]
  /**
   * {@link WithBar}
   */
  withBar?: WithBar[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/brass-bend
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/brass-bend.png">
 */
export interface BrassBend {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/double-tongue
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/double-tongue.png">
 */
export interface DoubleTongue {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/down-bow
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/down-bow.png">
 */
export interface DownBow {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/fingernails
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/fingernails.png">
 */
export interface Fingernails {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/flip
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/flip.png">
 */
export interface Flip {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/golpe
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/golpe.png">
 */
export interface Golpe {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/half-muted
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/half-muted.png">
 */
export interface HalfMuted {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Indicates a particular Standard Music Font Layout (SMuFL) character using its
   * canonical glyph name. Sometimes this is a formatting choice, and sometimes this
   * is a refinement of the semantic meaning of an element.
   */
  smufl?: SmuflGlyphNameValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/hammer-on
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/hammer-on.png"><br>The
 * &lt;hammer-on&gt; element is used in guitar and fretted instrument notation.
 * Since a single slur can be marked over many notes, the &lt;hammer-on&gt; element
 * is separate so the individual pair of notes can be specified. The element
 * content can be used to specify how the &lt;hammer-on&gt; should be notated. An
 * empty element leaves this choice up to the application.
 */
export interface HammerOn {
  /**
   * Indicates if this is the start or stop of the hammer-on.
   */
  type: StartStopValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Distinguishes multiple hammer-ons when they overlap in MusicXML document order.
   * The default value is 1.
   */
  number?: NumberLevelValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/handbell
 *
 * The &lt;handbell&gt; element represents notation for various techniques used in
 * handbell and handchime music.
 */
export interface Handbell {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * {@link HandbellValueValue
   */
  v: HandbellValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/harmon-closed
 *
 * The &lt;harmon-closed&gt; element represents whether the harmon mute is closed,
 * open, or half-open.
 */
export interface HarmonClosed {
  /**
   * Indicates which portion of the symbol is filled in when the element value is
   * half.
   */
  location?: HarmonClosedLocationValue[]
  /**
   * {@link HarmonClosedValueValue
   */
  v: HarmonClosedValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/harmon-mute
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/harmon-mute.png">
 */
export interface HarmonMute {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * {@link HarmonClosed}
   */
  harmonClosed?: HarmonClosed[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/artificial
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/artificial.png"><br>The
 * &lt;artificial&gt; element indicates that this is an artificial harmonic.
 */
export interface Artificial {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/base-pitch
 *
 * The presence of the &lt;base-pitch&gt; element indicates this is the pitch at
 * which the string is played before touching to create the harmonic.
 */
export interface BasePitch {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/natural
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/natural.png"><br>The
 * &lt;natural&gt; element indicates that this is a natural harmonic. These are
 * usually notated at base pitch rather than sounding pitch.
 */
export interface Natural {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/sounding-pitch
 *
 * The presence of the &lt;sounding-pitch&gt; element indicates this is the pitch
 * which is heard when playing the harmonic.
 */
export interface SoundingPitch {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/touching-pitch
 *
 * The presence of the &lt;touching-pitch&gt; element indicates this is the pitch
 * at which the string is touched lightly to produce the harmonic.
 */
export interface TouchingPitch {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/harmonic
 *
 * The &lt;harmonic&gt; element indicates natural and artificial harmonics.
 * Allowing the type of pitch to be specified, combined with controls for
 * appearance/playback differences, allows both the notation and the sound to be
 * represented. Artificial harmonics can add a notated touching pitch; artificial
 * pinch harmonics will usually not notate a touching pitch. The attributes for the
 * &lt;harmonic&gt; element refer to the use of the circular harmonic symbol,
 * typically but not always used with natural harmonics.
 */
export interface Harmonic {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Specifies whether or not to print an object. It is yes if not specified.
   */
  printObject?: YesNoValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * {@link Artificial}
   */
  artificial?: Artificial[]
  /**
   * {@link BasePitch}
   */
  basePitch?: BasePitch[]
  /**
   * {@link Natural}
   */
  natural?: Natural[]
  /**
   * {@link SoundingPitch}
   */
  soundingPitch?: SoundingPitch[]
  /**
   * {@link TouchingPitch}
   */
  touchingPitch?: TouchingPitch[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/heel
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/heel.png">
 */
export interface Heel {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Indicates that this is a substitution in the middle of a note. It is no if not
   * present.
   */
  substitution?: YesNoValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/hole-closed
 *
 * The &lt;hole-closed&gt; element represents whether the hole is closed, open, or
 * half-open.
 */
export interface HoleClosed {
  /**
   * Indicates which portion of the hole is filled in when the element value is half.
   */
  location?: HoleClosedLocationValue[]
  /**
   * {@link HoleClosedValueValue
   */
  v: HoleClosedValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/hole-shape
 *
 * The &lt;hole-shape&gt; element indicates the shape of the hole symbol. It is a
 * circle if not specified.
 */
export interface HoleShape {
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/hole-type
 *
 * The content of the &lt;hole-type&gt; element indicates what the hole symbol
 * represents in terms of instrument fingering or other techniques.
 */
export interface HoleType {
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/hole
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/hole.png"><br>The
 * &lt;hole&gt; element represents the symbols used for woodwind and brass
 * fingerings as well as other notations.
 */
export interface Hole {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * {@link HoleClosed}
   */
  holeClosed?: HoleClosed[]
  /**
   * {@link HoleShape}
   */
  holeShape?: HoleShape[]
  /**
   * {@link HoleType}
   */
  holeType?: HoleType[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/open
 *
 * The &lt;open&gt; element represents the open symbol, which looks like a circle.
 * The smufl attribute can be used to distinguish different Standard Music Font
 * Layout (SMuFL) glyphs that have a similar appearance such as brassMuteOpen and
 * guitarOpenPedal. If not present, the default glyph is brassMuteOpen.
 */
export interface Open {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Indicates a particular Standard Music Font Layout (SMuFL) character using its
   * canonical glyph name. Sometimes this is a formatting choice, and sometimes this
   * is a refinement of the semantic meaning of an element.
   */
  smufl?: SmuflGlyphNameValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/open-string
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/open-string.png">
 */
export interface OpenString {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/other-technical
 *
 * The &lt;other-technical&gt; element is used to define any technical indications
 * not yet in the MusicXML format. The smufl attribute can be used to specify a
 * particular glyph, allowing application interoperability without requiring every
 * Standard Music Font Layout (SMuFL) technical indication to have a MusicXML
 * element equivalent. Using the &lt;other-technical&gt; element without the smufl
 * attribute allows for extended representation, though without application
 * interoperability.
 */
export interface OtherTechnical {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Indicates a particular Standard Music Font Layout (SMuFL) character using its
   * canonical glyph name. Sometimes this is a formatting choice, and sometimes this
   * is a refinement of the semantic meaning of an element.
   */
  smufl?: SmuflGlyphNameValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pluck
 *
 * The &lt;pluck&gt; element is used to specify the plucking fingering on a fretted
 * instrument, where the fingering element refers to the fretting fingering.
 * Typical values are p, i, m, a for pulgar/thumb, indicio/index, medio/middle, and
 * anular/ring fingers.
 */
export interface Pluck {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pull-off
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/pull-off.png"><br>The
 * &lt;pull-off&gt; element is used in guitar and fretted instrument notation.
 * Since a single slur can be marked over many notes, the &lt;pull-off&gt; element
 * is separate so the individual pair of notes can be specified. The element
 * content can be used to specify how the &lt;pull-off&gt; should be notated. An
 * empty element leaves this choice up to the application.
 */
export interface PullOff {
  /**
   * Distinguishes multiple pull-offs when they overlap in MusicXML document order.
   */
  type: StartStopValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates if this is the start or stop of the pull-off. The default value is 1.
   */
  number?: NumberLevelValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/smear
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/smear.png">
 */
export interface Smear {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/snap-pizzicato
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/snap-pizzicato.png"><br>The
 * &lt;snap-pizzicato&gt; element represents the snap pizzicato symbol. This is a
 * circle with a line, where the line comes inside the circle. It is distinct from
 * the &lt;thumb-position&gt; symbol, where the line does not come inside the
 * circle.
 */
export interface SnapPizzicato {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/stopped
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/stopped.png"><br>The
 * &lt;stopped&gt; element represents the stopped symbol, which looks like a plus
 * sign. The smufl attribute distinguishes different Standard Music Font Layout
 * (SMuFL) glyphs that have a similar appearance such as
 * handbellsMalletBellSuspended and guitarClosePedal. If not present, the default
 * glyph is brassMuteClosed.
 */
export interface Stopped {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Indicates a particular Standard Music Font Layout (SMuFL) character using its
   * canonical glyph name. Sometimes this is a formatting choice, and sometimes this
   * is a refinement of the semantic meaning of an element.
   */
  smufl?: SmuflGlyphNameValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tap
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/tap.png"><br>The
 * &lt;tap&gt; element indicates a tap on the fretboard. The element content allows
 * specification of the notation; + and T are common choices.
 */
export interface Tap {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Specifies the symbol to use If the element is empty. It is ignored if the tap
   * glyph is already specified by the element content. If neither element content
   * nor the hand attribute are present, the display is application-specific.
   */
  hand?: TapHandValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/thumb-position
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/thumb-position.png"><br>The
 * &lt;thumb-position&gt; element represents the thumb position symbol. This is a
 * circle with a line, where the line does not come within the circle. It is
 * distinct from the &lt;snap-pizzicato&gt; symbol, where the line comes inside the
 * circle.
 */
export interface ThumbPosition {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/toe
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/toe.png">
 */
export interface Toe {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Indicates that this is a substitution in the middle of a note. It is no if not
   * present.
   */
  substitution?: YesNoValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/triple-tongue
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/triple-tongue.png">
 */
export interface TripleTongue {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/up-bow
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/up-bow.png">
 */
export interface UpBow {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/technical
 *
 * The &lt;technical&gt; element groups together technical indications that give
 * performance information for specific instruments.
 */
export interface Technical {
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * {@link Arrow}
   */
  arrow?: Arrow[]
  /**
   * {@link Bend}
   */
  bend?: Bend[]
  /**
   * {@link BrassBend}
   */
  brassBend?: BrassBend[]
  /**
   * {@link DoubleTongue}
   */
  doubleTongue?: DoubleTongue[]
  /**
   * {@link DownBow}
   */
  downBow?: DownBow[]
  /**
   * {@link Fingering}
   */
  fingering?: Fingering[]
  /**
   * {@link Fingernails}
   */
  fingernails?: Fingernails[]
  /**
   * {@link Flip}
   */
  flip?: Flip[]
  /**
   * {@link Fret}
   */
  fret?: Fret[]
  /**
   * {@link Golpe}
   */
  golpe?: Golpe[]
  /**
   * {@link HalfMuted}
   */
  halfMuted?: HalfMuted[]
  /**
   * {@link HammerOn}
   */
  hammerOn?: HammerOn[]
  /**
   * {@link Handbell}
   */
  handbell?: Handbell[]
  /**
   * {@link HarmonMute}
   */
  harmonMute?: HarmonMute[]
  /**
   * {@link Harmonic}
   */
  harmonic?: Harmonic[]
  /**
   * {@link Heel}
   */
  heel?: Heel[]
  /**
   * {@link Hole}
   */
  hole?: Hole[]
  /**
   * {@link Open}
   */
  open?: Open[]
  /**
   * {@link OpenString}
   */
  openString?: OpenString[]
  /**
   * {@link OtherTechnical}
   */
  otherTechnical?: OtherTechnical[]
  /**
   * {@link Pluck}
   */
  pluck?: Pluck[]
  /**
   * {@link PullOff}
   */
  pullOff?: PullOff[]
  /**
   * {@link Smear}
   */
  smear?: Smear[]
  /**
   * {@link SnapPizzicato}
   */
  snapPizzicato?: SnapPizzicato[]
  /**
   * {@link Stopped}
   */
  stopped?: Stopped[]
  /**
   * {@link StringType}
   */
  stringType?: StringType[]
  /**
   * {@link Tap}
   */
  tap?: Tap[]
  /**
   * {@link ThumbPosition}
   */
  thumbPosition?: ThumbPosition[]
  /**
   * {@link Toe}
   */
  toe?: Toe[]
  /**
   * {@link TripleTongue}
   */
  tripleTongue?: TripleTongue[]
  /**
   * {@link UpBow}
   */
  upBow?: UpBow[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tied
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/tied.png"><br>The
 * &lt;tied&gt; element represents the notated tie. The &lt;tie&gt; element
 * represents the tie sound.
 */
export interface Tied {
  /**
   * Indicates if this is the start, stop, or continuation of a tie, or if this is a
   * tie indicating that an instrument should be undamped.
   */
  type: TiedTypeValue[]
  /**
   * The horizontal position of an outgoing bezier point for slurs and ties with a
   * start type, or of an incoming bezier point for slurs and ties with types of stop
   * or continue. If both the bezier-x and bezier-offset attributes are present, the
   * bezier-x attribute takes priority. This attribute is deprecated as of MusicXML
   * 3.1.
   */
  bezierOffset?: DivisionsValue[]
  /**
   * The horizontal position of an outgoing bezier point for slurs with a continue
   * type. Not valid for other types. If both the bezier-x2 and bezier-offset2
   * attributes are present, the bezier-x2 attribute takes priority. This attribute
   * is deprecated as of MusicXML 3.1.
   */
  bezierOffset2?: DivisionsValue[]
  /**
   * The horizontal position of an outgoing bezier point for slurs and ties with a
   * start type, or of an incoming bezier point for slurs and ties with types of stop
   * or continue.
   */
  bezierX?: TenthsValue[]
  /**
   * The horizontal position of an outgoing bezier point for slurs with a continue
   * type. Not valid for other types.
   */
  bezierX2?: TenthsValue[]
  /**
   * The vertical position of an outgoing bezier point for slurs and ties with a
   * start type, or of an incoming bezier point for slurs and ties with types of stop
   * or continue.
   */
  bezierY?: TenthsValue[]
  /**
   * The vertical position of an outgoing bezier point for slurs with a continue
   * type. Not valid for other types.
   */
  bezierY2?: TenthsValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * The length of dashes in a dashed line. Ignored if the corresponding line-type
   * attribute is not dashed.
   */
  dashLength?: TenthsValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Specifies if the line is solid, dashed, dotted, or wavy.
   */
  lineType?: LineTypeValue[]
  /**
   * Rarely needed to disambiguate ties, since note pitches will usually suffice. It
   * is available for use in more complex tied notation situations.
   */
  number?: NumberLevelValue[]
  /**
   * Indicates whether slurs and ties are overhand (tips down) or underhand (tips
   * up). This is distinct from the placement attribute used by any notation type.
   */
  orientation?: OverUnderValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * The length of spaces in a dashed line. Ignored if the corresponding line-type
   * attribute is not dashed.
   */
  spaceLength?: TenthsValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tuplet-dot
 *
 * The &lt;tuplet-dot&gt; element is used to specify dotted tuplet types.
 */
export interface TupletDot {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tuplet-number
 *
 * The &lt;tuplet-number&gt; element indicates the number of notes for this portion
 * of the tuplet.
 */
export interface TupletNumber {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * {@link NonNegativeIntegerValue
   */
  v: NonNegativeIntegerValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tuplet-type
 *
 * The &lt;tuplet-type&gt; element indicates the graphical note type of the notes
 * for this portion of the tuplet.
 */
export interface TupletType {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * {@link NoteTypeValueValue
   */
  v: NoteTypeValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tuplet-actual
 *
 * The &lt;tuplet-actual&gt; element provide optional full control over how the
 * actual part of the &lt;tuplet&gt; is displayed, including number and note type
 * (with dots). If any of these elements are absent, their values are based on the
 * &lt;time-modification&gt; element.
 */
export interface TupletActual {
  /**
   * {@link TupletDot}
   */
  tupletDot?: TupletDot[]
  /**
   * {@link TupletNumber}
   */
  tupletNumber?: TupletNumber[]
  /**
   * {@link TupletType}
   */
  tupletType?: TupletType[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tuplet-normal
 *
 * The &lt;tuplet-normal&gt; element provide optional full control over how the
 * normal part of the &lt;tuplet&gt; is displayed, including number and note type
 * (with dots). If any of these elements are absent, their values are based on the
 * &lt;time-modification&gt; element.
 */
export interface TupletNormal {
  /**
   * {@link TupletDot}
   */
  tupletDot?: TupletDot[]
  /**
   * {@link TupletNumber}
   */
  tupletNumber?: TupletNumber[]
  /**
   * {@link TupletType}
   */
  tupletType?: TupletType[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tuplet
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/tuplet.png"><br>A
 * &lt;tuplet&gt; element is present when a tuplet is to be displayed graphically,
 * in addition to the sound data provided by the &lt;time-modification&gt
 * elements.
 */
export interface Tuplet {
  /**
   * Indicates if this is the start or stop of the tuplet.
   */
  type: StartStopValue[]
  /**
   * Indicates the presence of a bracket. If unspecified, the result is
   * implementation-dependent.
   */
  bracket?: YesNoValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Used to specify whether the bracket is straight or in the older curved or
   * slurred style. It is straight if not specified.
   */
  lineShape?: LineShapeValue[]
  /**
   * Distinguishes nested tuplets.
   */
  number?: NumberLevelValue[]
  /**
   * Indicates whether something is above or below another element, such as a note or
   * a notation.
   */
  placement?: AboveBelowValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Used to display either the number of actual notes, the number of both actual and
   * normal notes, or neither. It is actual if not specified.
   */
  showNumber?: ShowTupletValue[]
  /**
   * Used to display either the actual type, both the actual and normal types, or
   * neither. It is none if not specified.
   */
  showType?: ShowTupletValue[]
  /**
   * {@link TupletActual}
   */
  tupletActual?: TupletActual[]
  /**
   * {@link TupletNormal}
   */
  tupletNormal?: TupletNormal[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/notations
 *
 * The &lt;notations&gt; element collects musical notations that apply to a
 * specific note or chord.<br>Multiple &lt;notations&gt; elements are allowed in
 * order to represent multiple editorial levels. The print-object attribute allows
 * &lt;notations&gt; to represent details of performance technique, such as
 * fingerings, without having them appear in the score. This element is not related
 * to the concept of XML notations.
 */
export interface Notations {
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Specifies whether or not to print an object. It is yes if not specified.
   */
  printObject?: YesNoValue[]
  /**
   * {@link AccidentalMark}
   */
  accidentalMark?: AccidentalMark[]
  /**
   * {@link Arpeggiate}
   */
  arpeggiate?: Arpeggiate[]
  /**
   * {@link Articulations}
   */
  articulations?: Articulations[]
  /**
   * {@link Dynamics}
   */
  dynamics?: Dynamics[]
  /**
   * {@link Fermata}
   */
  fermata?: Fermata[]
  /**
   * {@link Footnote}
   */
  footnote?: Footnote[]
  /**
   * {@link Glissando}
   */
  glissando?: Glissando[]
  /**
   * {@link Level}
   */
  level?: Level[]
  /**
   * {@link NonArpeggiate}
   */
  nonArpeggiate?: NonArpeggiate[]
  /**
   * {@link Ornaments}
   */
  ornaments?: Ornaments[]
  /**
   * {@link OtherNotation}
   */
  otherNotation?: OtherNotation[]
  /**
   * {@link Slide}
   */
  slide?: Slide[]
  /**
   * {@link Slur}
   */
  slur?: Slur[]
  /**
   * {@link Technical}
   */
  technical?: Technical[]
  /**
   * {@link Tied}
   */
  tied?: Tied[]
  /**
   * {@link Tuplet}
   */
  tuplet?: Tuplet[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/notehead
 *
 * The &lt;notehead&gt; element indicates shapes other than the open and closed
 * ovals associated with note durations.
 */
export interface Notehead {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the appearance of enclosed shapes from the default of hollow for half
   * notes and longer, and filled otherwise.
   */
  filled?: YesNoValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * If yes, the notehead is parenthesized. It is no if not specified.
   */
  parentheses?: YesNoValue[]
  /**
   * Indicates a particular Standard Music Font Layout (SMuFL) character using its
   * canonical glyph name. Sometimes this is a formatting choice, and sometimes this
   * is a refinement of the semantic meaning of an element.
   */
  smufl?: SmuflGlyphNameValue[]
  /**
   * {@link NoteheadValueValue
   */
  v: NoteheadValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/accidental-text
 *
 * The &lt;accidental-text&gt; element is used for exact formatting of accidentals
 * in display elements such as &lt;part-name-display&gt;. The enclosure attribute
 * is none if not specified.
 */
export interface AccidentalText {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. If the parent is a
   * &lt;notehead-text&gt; element, the origin is changed relative to the left-hand
   * side of the note or the musical position within the bar. Otherwise, the origin
   * is changed relative to the start of the first measure on the system, and these
   * values are used when the current measure or a succeeding measure starts a new
   * system. Positive x is right and negative x is left.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is down.
   */
  defaultY?: TenthsValue[]
  /**
   * The text-direction attribute is used to adjust and override the Unicode
   * bidirectional text algorithm, similar to the Directionality data category in the
   * <a href="https://www.w3.org/TR/2007/REC-its-20070403/#directionality">W3C
   * Internationalization Tag Set recommendation</a>. The default value is ltr. This
   * attribute is typically used by applications that store text in left-to-right
   * visual order rather than logical order. Such applications can use the lro value
   * to better communicate with other applications that more fully support
   * bidirectional text.
   */
  dir?: TextDirectionValue[]
  /**
   * Formatting of an enclosure around text or symbols.
   */
  enclosure?: EnclosureShapeValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * In cases where text extends over more than one line, horizontal alignment and
   * justify values can be different. The most typical case is for credits, such
   * as:<br><br><pre>Words and music by<br>  Pat Songwriter</pre><br>Typically this
   * type of credit is aligned to the right, so that the position information refers
   * to the right-most part of the text. But in this example, the text is
   * center-justified, not right-justified.<br><br>The halign attribute is used in
   * these situations. If it is not present, its value is the same as for the justify
   * attribute. For elements where a justify attribute is not allowed, the default is
   * implementation-dependent.
   */
  halign?: LeftCenterRightValue[]
  /**
   * Indicates left, center, or right justification. The default value varies for
   * different elements. For elements where the justify attribute is present but the
   * halign attribute is not, the justify attribute indicates horizontal alignment as
   * well as justification.
   */
  justify?: LeftCenterRightValue[]
  /**
   * Specifies text tracking. Values are either normal, which allows flexibility of
   * letter-spacing for purposes of text justification. or a number representing the
   * number of ems to add between each letter. The number may be negative in order to
   * subtract space. The value is normal if not specified.
   */
  letterSpacing?: NumberOrNormalValue[]
  /**
   * Specifies text leading. Values are either normal or a number representing the
   * percentage of the current font height to use for leading. It is normal if not
   * specified. The exact normal value is implementation-dependent, but values
   * between 100 and 120 are recommended.
   */
  lineHeight?: NumberOrNormalValue[]
  /**
   * Number of lines to use when striking through text.
   */
  lineThrough?: NumberOfLinesValue[]
  /**
   * Number of lines to use when overlining text.
   */
  overline?: NumberOfLinesValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down.
   */
  relativeY?: TenthsValue[]
  /**
   * Used to rotate text around the alignment point specified by the halign and
   * valign attributes. Positive values are clockwise rotations, while negative
   * values are counter-clockwise rotations.
   */
  rotation?: RotationDegreesValue[]
  /**
   * Specifies the exact Standard Music Font Layout (SMuFL) accidental character,
   * using its SMuFL canonical glyph name.
   */
  smufl?: SmuflAccidentalGlyphNameValue[]
  /**
   * Number of lines to use when underlining text.
   */
  underline?: NumberOfLinesValue[]
  /**
   * Indicates vertical alignment to the top, middle, bottom, or baseline of the
   * text. The default is implementation-dependent.
   */
  valign?: ValignValue[]
  /**
   * Specifies the language used in the element content. It is Italian ("it") if not
   * specified.
   */
  xmlLang?: XmlLangValue[]
  /**
   * Indicates whether white space should be preserved by applications.
   */
  xmlSpace?: XmlSpaceValue[]
  /**
   * {@link AccidentalValueValue
   */
  v: AccidentalValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/display-text
 *
 * The &lt;display-text&gt; element is used for exact formatting of multi-font text
 * in element in display elements such as &lt;part-name-display&gt;. The enclosure
 * attribute is none if not specified.
 */
export interface DisplayText {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. If the parent is a
   * &lt;notehead-text&gt; element, the origin is changed relative to the left-hand
   * side of the note or the musical position within the bar. Otherwise, the origin
   * is changed relative to the start of the first measure on the system, and these
   * values are used when the current measure or a succeeding measure starts a new
   * system. Positive x is right and negative x is left.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is down.
   */
  defaultY?: TenthsValue[]
  /**
   * The text-direction attribute is used to adjust and override the Unicode
   * bidirectional text algorithm, similar to the Directionality data category in the
   * <a href="https://www.w3.org/TR/2007/REC-its-20070403/#directionality">W3C
   * Internationalization Tag Set recommendation</a>. The default value is ltr. This
   * attribute is typically used by applications that store text in left-to-right
   * visual order rather than logical order. Such applications can use the lro value
   * to better communicate with other applications that more fully support
   * bidirectional text.
   */
  dir?: TextDirectionValue[]
  /**
   * Formatting of an enclosure around text or symbols.
   */
  enclosure?: EnclosureShapeValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * In cases where text extends over more than one line, horizontal alignment and
   * justify values can be different. The most typical case is for credits, such
   * as:<br><br><pre>Words and music by<br>  Pat Songwriter</pre><br>Typically this
   * type of credit is aligned to the right, so that the position information refers
   * to the right-most part of the text. But in this example, the text is
   * center-justified, not right-justified.<br><br>The halign attribute is used in
   * these situations. If it is not present, its value is the same as for the justify
   * attribute. For elements where a justify attribute is not allowed, the default is
   * implementation-dependent.
   */
  halign?: LeftCenterRightValue[]
  /**
   * Indicates left, center, or right justification. The default value varies for
   * different elements. For elements where the justify attribute is present but the
   * halign attribute is not, the justify attribute indicates horizontal alignment as
   * well as justification.
   */
  justify?: LeftCenterRightValue[]
  /**
   * Specifies text tracking. Values are either normal, which allows flexibility of
   * letter-spacing for purposes of text justification. or a number representing the
   * number of ems to add between each letter. The number may be negative in order to
   * subtract space. The value is normal if not specified.
   */
  letterSpacing?: NumberOrNormalValue[]
  /**
   * Specifies text leading. Values are either normal or a number representing the
   * percentage of the current font height to use for leading. It is normal if not
   * specified. The exact normal value is implementation-dependent, but values
   * between 100 and 120 are recommended.
   */
  lineHeight?: NumberOrNormalValue[]
  /**
   * Number of lines to use when striking through text.
   */
  lineThrough?: NumberOfLinesValue[]
  /**
   * Number of lines to use when overlining text.
   */
  overline?: NumberOfLinesValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down.
   */
  relativeY?: TenthsValue[]
  /**
   * Used to rotate text around the alignment point specified by the halign and
   * valign attributes. Positive values are clockwise rotations, while negative
   * values are counter-clockwise rotations.
   */
  rotation?: RotationDegreesValue[]
  /**
   * Number of lines to use when underlining text.
   */
  underline?: NumberOfLinesValue[]
  /**
   * Indicates vertical alignment to the top, middle, bottom, or baseline of the
   * text. The default is implementation-dependent.
   */
  valign?: ValignValue[]
  /**
   * Specifies the language used in the element content. It is Italian ("it") if not
   * specified.
   */
  xmlLang?: XmlLangValue[]
  /**
   * Indicates whether white space should be preserved by applications.
   */
  xmlSpace?: XmlSpaceValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/notehead-text
 *
 * The &lt;notehead-text&gt; element represents text that is displayed inside a
 * notehead, as is done in some educational music. It is not needed for the numbers
 * used in tablature or jianpu notation. The presence of a TAB or jianpu clefs is
 * sufficient to indicate that numbers are used. The &lt;display-text&gt; and
 * &lt;accidental-text&gt; elements allow display of fully formatted text and
 * accidentals.
 */
export interface NoteheadText {
  /**
   * {@link AccidentalText}
   */
  accidentalText?: AccidentalText[]
  /**
   * {@link DisplayText}
   */
  displayText?: DisplayText[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/alter
 *
 * The &lt;alter&gt; element represents chromatic alteration in number of semitones
 * (e.g., -1 for flat, 1 for sharp). Decimal values like 0.5 (quarter tone sharp)
 * are used for microtones.
 */
export interface Alter {
  /**
   * {@link SemitonesValue
   */
  v: SemitonesValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/octave
 *
 * Octaves are represented by the numbers 0 to 9, where 4 indicates the octave
 * started by middle C.
 */
export interface Octave {
  /**
   * {@link OctaveValue
   */
  v: OctaveValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/step
 *
 * The &lt;step&gt; element represents a step of the diatonic scale, represented
 * using the English letters A through G.
 */
export interface Step {
  /**
   * {@link StepValue
   */
  v: StepValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pitch
 *
 * Pitch is represented as a combination of the step of the diatonic scale, the
 * chromatic alteration, and the octave.
 */
export interface Pitch {
  /**
   * {@link Alter}
   */
  alter?: Alter[]
  /**
   * {@link Octave}
   */
  octave?: Octave[]
  /**
   * {@link Step}
   */
  step?: Step[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/display-octave
 *
 * The &lt;display-step&gt; and &lt;display-octave&gt; elements are used to place
 * &lt;rest&gt; and &lt;unpitched&gt; elements on the staff without implying that
 * these elements have pitch. Positioning follows the current clef. If percussion
 * clef is used, the &lt;display-step&gt; and &lt;display-octave&gt; elements are
 * interpreted as if in treble clef, with a G in octave 4 on line 2.
 */
export interface DisplayOctave {
  /**
   * {@link OctaveValue
   */
  v: OctaveValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/display-step
 *
 * The &lt;display-step&gt; and &lt;display-octave&gt; elements are used to place
 * &lt;rest&gt; and &lt;unpitched&gt; elements on the staff without implying that
 * these elements have pitch. Positioning follows the current clef. If percussion
 * clef is used, the &lt;display-step&gt; and &lt;display-octave&gt; elements are
 * interpreted as if in treble clef, with a G in octave 4 on line 2.
 */
export interface DisplayStep {
  /**
   * {@link StepValue
   */
  v: StepValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/rest
 *
 * The &lt;rest&gt; element indicates notated rests or silences. A &lt;rest&gt
 * element is usually empty, but placement on the staff can be specified using
 * &lt;display-step&gt; and &lt;display-octave&gt; elements.
 */
export interface Rest {
  /**
   * If yes, this indicates this is a complete measure rest.
   */
  measure?: YesNoValue[]
  /**
   * {@link DisplayOctave}
   */
  displayOctave?: DisplayOctave[]
  /**
   * {@link DisplayStep}
   */
  displayStep?: DisplayStep[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/stem
 *
 * Values for the &lt;stem&gt; element can be down, up, none, or double. A
 * &lt;stem&gt; element associated with a &lt;rest&gt; refers to a stemlet.
 */
export interface Stem {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * For down and up stems, changes the computation of the default horizontal
   * position of the end of the stem. The origin is changed relative to the left-hand
   * side of the note. Positive x is right and negative x is left.
   */
  defaultX?: TenthsValue[]
  /**
   * For down and up stems, changes the computation of the default vertical position
   * of the end of the stem. The origin is changed relative to the top line of the
   * staff. Positive y is up and negative y is down.
   */
  defaultY?: TenthsValue[]
  /**
   * For down and up stems, changes the horizontal position of the end of the stem
   * relative to the default position, either as computed by the individual program,
   * or as overridden by the default-x attribute.  Positive x is right and negative x
   * is left.
   */
  relativeX?: TenthsValue[]
  /**
   * For down and up stems, changes the vertical position of the end of the stem
   * relative to the default position, either as computed by the individual program,
   * or as overridden by the default-y attribute. Positive y lengthens a stem while
   * negative y shortens it. Negative values of relative-y that would flip a stem
   * instead of shortening it are ignored.
   */
  relativeY?: TenthsValue[]
  /**
   * {@link StemValueValue
   */
  v: StemValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tie
 *
 * The &lt;tie&gt; element indicates that a tie begins or ends with this note. The
 * &lt;tie&gt; element indicates sound; the &lt;tied&gt; element indicates
 * notation.
 */
export interface Tie {
  /**
   * Indicates if this is the start or stop of the tie.
   */
  type: StartStopValue[]
  /**
   * Indicates which particular times to apply a &lt;tie&gt; element through a
   * repeated section.
   */
  timeOnly?: TimeOnlyValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/time-modification
 *
 * Time modification indicates tuplets, double-note tremolos, and other durational
 * changes. A &lt;time-modification&gt; element shows how the cumulative, sounding
 * effect of tuplets and double-note tremolos compare to the written note type
 * represented by the &lt;type&gt; and &lt;dot&gt; elements. Nested tuplets and
 * other notations that use more detailed information need both the
 * &lt;time-modification&gt; and &lt;tuplet&gt; elements to be represented
 * accurately.
 */
export interface TimeModification {
  /**
   * {@link ActualNotes}
   */
  actualNotes?: ActualNotes[]
  /**
   * {@link NormalDot}
   */
  normalDot?: NormalDot[]
  /**
   * {@link NormalNotes}
   */
  normalNotes?: NormalNotes[]
  /**
   * {@link NormalType}
   */
  normalType?: NormalType[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/type
 *
 * The &lt;type&gt; element indicates the graphic note type. Values range from
 * 1024th to maxima.
 */
export interface Type {
  /**
   * Indicates full, cue, grace-cue, or large size. If not specified, the value is
   * full for regular notes, grace-cue for notes that contain both &lt;grace&gt; and
   * &lt;cue&gt; elements, and cue for notes that contain either a &lt;cue&gt; or a
   * &lt;grace&gt; element, but not both.
   */
  size?: SymbolSizeValue[]
  /**
   * {@link NoteTypeValueValue
   */
  v: NoteTypeValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/unpitched
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/unpitched.png"><br>The
 * &lt;unpitched&gt; element represents notes that are notated on the staff but
 * lack definite pitch, such as unpitched percussion and speaking voice. If the
 * child elements are not present, the note is placed on the middle line of the
 * staff. This is generally used with a one-line staff. Notes in percussion clef
 * should always use an &lt;unpitched&gt; element rather than a &lt;pitch&gt
 * element.
 */
export interface Unpitched {
  /**
   * {@link DisplayOctave}
   */
  displayOctave?: DisplayOctave[]
  /**
   * {@link DisplayStep}
   */
  displayStep?: DisplayStep[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/note
 *
 * Notes are the most common type of MusicXML data. The MusicXML format
 * distinguishes between elements used for sound information and elements used for
 * notation information (e.g., &lt;tie&gt; is used for sound, &lt;tied&gt; for
 * notation). Thus grace notes do not have a &lt;duration&gt; element. Cue notes
 * have a &lt;duration&gt; element, as do &lt;forward&gt; elements, but no
 * &lt;tie&gt; elements. Having these two types of information available can make
 * interchange easier, as some programs handle one type of information more readily
 * than the other.
 */
export interface Note {
  /**
   * Alters the starting time of the note from when it would otherwise occur based on
   * the flow of durations - information that is specific to a performance. It is
   * expressed in terms of divisions, either positive or negative. A &lt;note&gt
   * that stops a tie should not have an attack attribute. The attack and release
   * attributes are independent of each other. The attack attribute only changes the
   * starting time of a note.
   */
  attack?: DivisionsValue[]
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the start of the entire current measure, at either the left
   * barline or the start of the system. Positive x is right and negative x is
   * left.<br><br>This attribute provides higher-resolution positioning data than the
   * &lt;offset&gt; element. Applications reading a MusicXML file that can understand
   * both features should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * Corresponds to MIDI 1.0's Note On velocity, expressed in terms of percentage of
   * the default forte value (90 for MIDI 1.0).
   */
  dynamics?: NonNegativeDecimalValue[]
  /**
   * Corresponds to MIDI 1.0's Note Off velocity, expressed in terms of percentage of
   * the default forte value (90 for MIDI 1.0).
   */
  endDynamics?: NonNegativeDecimalValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Used when just this note is sounded pizzicato, vs. the &lt;pizzicato&gt; element
   * which changes overall playback between pizzicato and arco.
   */
  pizzicato?: YesNoValue[]
  /**
   * Controls the printing of an augmentation dot separately from the rest of the
   * note or rest. This is especially useful for notes that overlap in different
   * voices, or for chord sheets that contain lyrics and chords but no melody. If
   * print-object is set to no, this attribute is also interpreted as being set to no
   * if not present.
   */
  printDot?: YesNoValue[]
  /**
   * Indicates whether leger lines are printed. Notes without leger lines are used to
   * indicate indeterminate high and low notes. It is yes if not present unless
   * print-object is set to no. This attribute is ignored for rests.
   */
  printLeger?: YesNoValue[]
  /**
   * Controls the printing of a lyric separately from the rest of the note or rest.
   * This is especially useful for notes that overlap in different voices, or for
   * chord sheets that contain lyrics and chords but no melody. If print-object is
   * set to no, this attribute is also interpreted as being set to no if not present.
   */
  printLyric?: YesNoValue[]
  /**
   * Specifies whether or not to print an object. It is yes if not specified.
   */
  printObject?: YesNoValue[]
  /**
   * Controls whether or not spacing is left for an invisible note or object. It is
   * used only if no note, dot, or lyric is being printed. The value is yes (leave
   * spacing) if not specified.
   */
  printSpacing?: YesNoValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Alters the stopping time of the note from when it would otherwise occur based on
   * the flow of durations - information that is specific to a performance. It is
   * expressed in terms of divisions, either positive or negative. A &lt;note&gt
   * that starts a tie should not have a release attribute. The attack and release
   * attributes are independent of each other. The release attribute only changes the
   * stopping time of a note.
   */
  release?: DivisionsValue[]
  /**
   * Shows which times to play the note during a repeated section.
   */
  timeOnly?: TimeOnlyValue[]
  /**
   * {@link Accidental}
   */
  accidental?: Accidental[]
  /**
   * {@link Beam}
   */
  beam?: Beam[]
  /**
   * {@link Chord}
   */
  chord?: Chord[]
  /**
   * {@link Cue}
   */
  cue?: Cue[]
  /**
   * {@link Dot}
   */
  dot?: Dot[]
  /**
   * {@link Duration}
   */
  duration?: Duration[]
  /**
   * {@link Footnote}
   */
  footnote?: Footnote[]
  /**
   * {@link Grace}
   */
  grace?: Grace[]
  /**
   * {@link Instrument}
   */
  instrument?: Instrument[]
  /**
   * {@link Level}
   */
  level?: Level[]
  /**
   * {@link Listen}
   */
  listen?: Listen[]
  /**
   * {@link Lyric}
   */
  lyric?: Lyric[]
  /**
   * {@link Notations}
   */
  notations?: Notations[]
  /**
   * {@link Notehead}
   */
  notehead?: Notehead[]
  /**
   * {@link NoteheadText}
   */
  noteheadText?: NoteheadText[]
  /**
   * {@link Pitch}
   */
  pitch?: Pitch[]
  /**
   * {@link Play}
   */
  play?: Play[]
  /**
   * {@link Rest}
   */
  rest?: Rest[]
  /**
   * {@link Staff}
   */
  staff?: Staff[]
  /**
   * {@link Stem}
   */
  stem?: Stem[]
  /**
   * {@link Tie}
   */
  tie?: Tie[]
  /**
   * {@link TimeModification}
   */
  timeModification?: TimeModification[]
  /**
   * {@link Type}
   */
  type?: Type[]
  /**
   * {@link Unpitched}
   */
  unpitched?: Unpitched[]
  /**
   * {@link Voice}
   */
  voice?: Voice[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/measure-distance
 *
 * The &lt;measure-distance&gt; element specifies the horizontal distance from the
 * previous measure. This value is only used for systems where there is horizontal
 * whitespace in the middle of a system, as in systems with codas. To specify the
 * measure width, use the width attribute of the &lt;measure&gt; element.
 */
export interface MeasureDistance {
  /**
   * {@link TenthsValue
   */
  v: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/measure-layout
 *
 * The &lt;measure-layout&gt; element includes the horizontal distance from the
 * previous measure. It applies to the current measure only.
 */
export interface MeasureLayout {
  /**
   * {@link MeasureDistance}
   */
  measureDistance?: MeasureDistance[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/measure-numbering
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/measure-numbering.png"><br>The
 * &lt;measure-numbering&gt; element describes how frequently measure numbers are
 * displayed on this part. The text attribute from the &lt;measure&gt; element is
 * used for display, or the number attribute if the text attribute is not present.
 * Measures with an implicit attribute set to yes never display a measure number,
 * regardless of the &lt;measure-numbering&gt; setting.
 */
export interface MeasureNumbering {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the start of the entire current measure, at either the left
   * barline or the start of the system. Positive x is right and negative x is
   * left.<br><br>This attribute provides higher-resolution positioning data than the
   * &lt;offset&gt; element. Applications reading a MusicXML file that can understand
   * both features should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * In cases where text extends over more than one line, horizontal alignment and
   * justify values can be different. The most typical case is for credits, such
   * as:<br><br><pre>Words and music by<br>  Pat Songwriter</pre><br>Typically this
   * type of credit is aligned to the right, so that the position information refers
   * to the right-most part of the text. But in this example, the text is
   * center-justified, not right-justified.<br><br>The halign attribute is used in
   * these situations. If it is not present, its value is the same as for the justify
   * attribute. For elements where a justify attribute is not allowed, the default is
   * implementation-dependent.
   */
  halign?: LeftCenterRightValue[]
  /**
   * The multiple-rest-always and multiple-rest-range attributes describe how measure
   * numbers are shown on multiple rests when the &lt;measure-numbering&gt; value is
   * not set to none. The multiple-rest-always attribute is set to yes when the
   * measure number should always be shown, even if the multiple rest starts midway
   * through a system when measure numbering is set to system level.
   */
  multipleRestAlways?: YesNoValue[]
  /**
   * The multiple-rest-always and multiple-rest-range attributes describe how measure
   * numbers are shown on multiple rests when the &lt;measure-numbering&gt; value is
   * not set to none. The multiple-rest-range attribute is set to yes when measure
   * numbers on multiple rests display the range of numbers for the first and last
   * measure, rather than just the number of the first measure.
   */
  multipleRestRange?: YesNoValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  /**
   * Refers to staff numbers within the part, from top to bottom on the system. It
   * indicates which staff is used as the reference point for vertical positioning. A
   * value of 1 is assumed if not present.
   */
  staff?: StaffNumberValue[]
  /**
   * Specifies if measure numbers are associated with a system rather than the
   * particular part where the &lt;measure-numbering&gt; element appears.
   */
  system?: SystemRelationNumberValue[]
  /**
   * Indicates vertical alignment to the top, middle, bottom, or baseline of the
   * text. The default is implementation-dependent.
   */
  valign?: ValignValue[]
  /**
   * {@link MeasureNumberingValueValue
   */
  v: MeasureNumberingValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/part-abbreviation-display
 *
 * The &lt;part-abbreviation-display&gt; element is used for exact formatting of
 * multi-font text in part abbreviations to the left of the system. The
 * print-object attribute can be used to determine what, if anything, is printed at
 * the start of each system.
 */
export interface PartAbbreviationDisplay {
  /**
   * Specifies whether or not to print an object. It is yes if not specified.
   */
  printObject?: YesNoValue[]
  /**
   * {@link AccidentalText}
   */
  accidentalText?: AccidentalText[]
  /**
   * {@link DisplayText}
   */
  displayText?: DisplayText[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/part-name-display
 *
 * The &lt;part-name-display&gt; element is used for exact formatting of multi-font
 * text in part names to the left of the system. The print-object attribute can be
 * used to determine what, if anything, is printed at the start of each system.
 */
export interface PartNameDisplay {
  /**
   * Specifies whether or not to print an object. It is yes if not specified.
   */
  printObject?: YesNoValue[]
  /**
   * {@link AccidentalText}
   */
  accidentalText?: AccidentalText[]
  /**
   * {@link DisplayText}
   */
  displayText?: DisplayText[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/print
 *
 * The &lt;print&gt; element contains general printing parameters, including layout
 * elements. The &lt;part-name-display&gt; and &lt;part-abbreviation-display&gt
 * elements may also be used here to change how a part name or abbreviation is
 * displayed over the course of a piece. They take effect when the current measure
 * or a succeeding measure starts a new system.
 */
export interface Print {
  /**
   * The number of blank pages to insert before the current measure. It is ignored if
   * new-page is not "yes". These blank pages have no music, but may have text or
   * images specified by the credit element. This is used to allow a combination of
   * pages that are all text, or all text and images, together with pages of music.
   */
  blankPage?: PositiveIntegerValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Indicates whether to force a page break, or to force the current music onto the
   * same page as the preceding music. Normally this is the first music data within a
   * measure. If used in multi-part music, the attributes should be placed in the
   * same positions within each part, or the results are undefined.
   */
  newPage?: YesNoValue[]
  /**
   * Indicates whether to force a system break, or to force the current music onto
   * the same system as the preceding music. Normally this is the first music data
   * within a measure. If used in multi-part music, the attributes should be placed
   * in the same positions within each part, or the results are undefined.
   */
  newSystem?: YesNoValue[]
  /**
   * Sets the number of a new page. It is ignored if new-page is not "yes".
   */
  pageNumber?: TokenValue[]
  /**
   * Specifies spacing between multiple staves in tenths of staff space. Deprecated
   * as of Version 1.1; the staff-layout element should be used instead. If both are
   * present, the staff-layout values take priority.
   */
  staffSpacing?: TenthsValue[]
  /**
   * {@link MeasureLayout}
   */
  measureLayout?: MeasureLayout[]
  /**
   * {@link MeasureNumbering}
   */
  measureNumbering?: MeasureNumbering[]
  /**
   * {@link PageLayout}
   */
  pageLayout?: PageLayout[]
  /**
   * {@link PartAbbreviationDisplay}
   */
  partAbbreviationDisplay?: PartAbbreviationDisplay[]
  /**
   * {@link PartNameDisplay}
   */
  partNameDisplay?: PartNameDisplay[]
  /**
   * {@link StaffLayout}
   */
  staffLayout?: StaffLayout[]
  /**
   * {@link SystemLayout}
   */
  systemLayout?: SystemLayout[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/measure-partwise
 *
 * The &lt;measure&gt; element includes the basic musical data such as
 * &lt;note&gt;s within a &lt;score-partwise&gt; document.
 */
export interface Measure {
  /**
   * The attribute that identifies the measure. Going from partwise to timewise,
   * measures are grouped via this attribute. In partwise files, it should be the
   * same for measures in different parts that share the same left barline.
   * <br><br>While often numeric, it does not have to be. Non-numeric values are
   * typically used together with the implicit or non-controlling attributes being
   * set to "yes". For a pickup measure, the number attribute is typically set to "0"
   * and the implicit attribute is typically set to "yes".
   */
  number: TokenValue[]
  /**
   * Specifies an ID that is unique to the entire document.
   */
  id?: IDValue[]
  /**
   * Set to "yes" for measures where the measure number should never appear, such as
   * pickup measures and the last half of mid-measure repeats. The value is "no" if
   * not specified.
   */
  implicit?: YesNoValue[]
  /**
   * Intended for use in multimetric music like the Don Giovanni minuet. If set to
   * "yes", the left barline in this measure does not coincide with the left barline
   * of measures in other parts. The value is "no" if not specified.
   */
  nonControlling?: YesNoValue[]
  /**
   * If measure numbers are not unique within a part, this can cause problems for
   * conversions between partwise and timewise formats. The text attribute allows
   * specification of displayed measure numbers that are different than what is used
   * in the number attribute. This attribute is ignored for measures where the
   * implicit attribute is set to "yes". Further details about measure numbering can
   * be specified using the &lt;measure-numbering&gt; element.
   */
  text?: MeasureTextValue[]
  /**
   * Measure width specified in tenths. These are the global tenths specified in the
   * &lt;scaling&gt; element, not local tenths as modified by the &lt;staff-size&gt
   * element. The width covers the entire measure from barline or system start to
   * barline or system end.
   */
  width?: TenthsValue[]
  /**
   * {@link Attributes}
   */
  attributes?: Attributes[]
  /**
   * {@link Backup}
   */
  backup?: Backup[]
  /**
   * {@link Barline}
   */
  barline?: Barline[]
  /**
   * {@link Bookmark}
   */
  bookmark?: Bookmark[]
  /**
   * {@link Direction}
   */
  direction?: Direction[]
  /**
   * {@link FiguredBass}
   */
  figuredBass?: FiguredBass[]
  /**
   * {@link Forward}
   */
  forward?: Forward[]
  /**
   * {@link Grouping}
   */
  grouping?: Grouping[]
  /**
   * {@link Harmony}
   */
  harmony?: Harmony[]
  /**
   * {@link Link}
   */
  link?: Link[]
  /**
   * {@link Listening}
   */
  listening?: Listening[]
  /**
   * {@link Note}
   */
  note?: Note[]
  /**
   * {@link Print}
   */
  print?: Print[]
  /**
   * {@link Sound}
   */
  sound?: Sound[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/part-partwise
 *
 * The &lt;part&gt; element is the top level of musical organization below the
 * &lt;score-partwise&gt; document element. It contains a sequence of
 * &lt;measure&gt; elements.
 */
export interface Part {
  /**
   * An IDREF back to a &lt;score-part&gt; element within the &lt;part-list&gt
   * element.
   */
  id: IDREFValue[]
  /**
   * {@link Measure}
   */
  measure?: Measure[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/group-abbreviation
 *
 * The &lt;group-abbreviation&gt; element describes the abbreviation of a
 * &lt;part-group&gt; element. The formatting attributes are deprecated as of
 * Version 2.0 in favor of the new &lt;group-abbreviation-display&gt; element.
 */
export interface GroupAbbreviation {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the start of the entire current measure, at either the left
   * barline or the start of the system. Positive x is right and negative x is
   * left.<br><br>This attribute provides higher-resolution positioning data than the
   * &lt;offset&gt; element. Applications reading a MusicXML file that can understand
   * both features should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates left, center, or right justification. The default value varies for
   * different elements. For elements where the justify attribute is present but the
   * halign attribute is not, the justify attribute indicates horizontal alignment as
   * well as justification.
   */
  justify?: LeftCenterRightValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/group-abbreviation-display
 *
 * The &lt;group-abbreviation-display&gt; element is used for exact formatting of
 * multi-font text in group abbreviations to the left of the system. The
 * print-object attribute can be used to determine what, if anything, is printed at
 * the start of each system.
 */
export interface GroupAbbreviationDisplay {
  /**
   * Specifies whether or not to print an object. It is yes if not specified.
   */
  printObject?: YesNoValue[]
  /**
   * {@link AccidentalText}
   */
  accidentalText?: AccidentalText[]
  /**
   * {@link DisplayText}
   */
  displayText?: DisplayText[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/group-barline
 *
 * The &lt;group-barline&gt; element indicates if the group should have common
 * barlines.
 */
export interface GroupBarline {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * {@link GroupBarlineValueValue
   */
  v: GroupBarlineValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/group-name
 *
 * The &lt;group-name&gt; element describes the name of a &lt;part-group&gt
 * element. The formatting attributes are deprecated as of Version 2.0 in favor of
 * the new &lt;group-name-display&gt; element.
 */
export interface GroupName {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the start of the entire current measure, at either the left
   * barline or the start of the system. Positive x is right and negative x is
   * left.<br><br>This attribute provides higher-resolution positioning data than the
   * &lt;offset&gt; element. Applications reading a MusicXML file that can understand
   * both features should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates left, center, or right justification. The default value varies for
   * different elements. For elements where the justify attribute is present but the
   * halign attribute is not, the justify attribute indicates horizontal alignment as
   * well as justification.
   */
  justify?: LeftCenterRightValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/group-name-display
 *
 * The &lt;group-name-display&gt; element is used for exact formatting of
 * multi-font text in group names to the left of the system. The print-object
 * attribute can be used to determine what, if anything, is printed at the start of
 * each system.
 */
export interface GroupNameDisplay {
  /**
   * Specifies whether or not to print an object. It is yes if not specified.
   */
  printObject?: YesNoValue[]
  /**
   * {@link AccidentalText}
   */
  accidentalText?: AccidentalText[]
  /**
   * {@link DisplayText}
   */
  displayText?: DisplayText[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/group-symbol
 *
 * The &lt;group-symbol&gt; element indicates how the symbol for a group is
 * indicated in the score. It is none if not specified.
 */
export interface GroupSymbol {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the start of the first measure on the system. These values
   * are used when the current measure or a succeeding measure starts a new system.
   * Positive x is right and negative x is left.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is down.
   */
  defaultY?: TenthsValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down.
   */
  relativeY?: TenthsValue[]
  /**
   * {@link GroupSymbolValueValue
   */
  v: GroupSymbolValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/group-time
 *
 * The &lt;group-time&gt; element indicates that the displayed time signatures
 * should stretch across all parts and staves in the group.
 */
export interface GroupTime {}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/part-group
 *
 * The &lt;part-group&gt; element indicates groupings of parts in the score,
 * usually indicated by braces and brackets. Braces that are used for multi-staff
 * parts should be defined in the &lt;attributes&gt; element for that part. The
 * &lt;part-group&gt; start element appears before the first &lt;score-part&gt; in
 * the group. The &lt;part-group&gt; stop element appears after the last
 * &lt;score-part&gt; in the group.
 */
export interface PartGroup {
  /**
   * Indicates the start or stop of the &lt;part-group&gt;.
   */
  type: StartStopValue[]
  /**
   * Distinguishes overlapping and nested &lt;part-group&gt; elements, not a sequence
   * of &lt;part-group&gt; elements. The default value is 1.
   */
  number?: TokenValue[]
  /**
   * {@link Footnote}
   */
  footnote?: Footnote[]
  /**
   * {@link GroupAbbreviation}
   */
  groupAbbreviation?: GroupAbbreviation[]
  /**
   * {@link GroupAbbreviationDisplay}
   */
  groupAbbreviationDisplay?: GroupAbbreviationDisplay[]
  /**
   * {@link GroupBarline}
   */
  groupBarline?: GroupBarline[]
  /**
   * {@link GroupName}
   */
  groupName?: GroupName[]
  /**
   * {@link GroupNameDisplay}
   */
  groupNameDisplay?: GroupNameDisplay[]
  /**
   * {@link GroupSymbol}
   */
  groupSymbol?: GroupSymbol[]
  /**
   * {@link GroupTime}
   */
  groupTime?: GroupTime[]
  /**
   * {@link Level}
   */
  level?: Level[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/group
 *
 * The &lt;group&gt; element allows the use of different versions of the part for
 * different purposes. Typical values include score, parts, sound, and data.
 * Ordering information can be derived from the ordering within a MusicXML score or
 * opus.
 */
export interface Group {
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/part-abbreviation
 *
 * The &lt;part-name&gt; and &lt;part-abbreviation&gt; elements describe the name
 * and abbreviation of a &lt;score-part&gt; element, respectively. Formatting
 * attributes for these elements were deprecated in Version 2.0 in favor of the
 * &lt;part-name-display&gt; and &lt;part-abbreviation-display&gt; elements.
 */
export interface PartAbbreviation {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates left, center, or right justification. The default value varies for
   * different elements. For elements where the justify attribute is present but the
   * halign attribute is not, the justify attribute indicates horizontal alignment as
   * well as justification.
   */
  justify?: LeftCenterRightValue[]
  /**
   * Specifies whether or not to print an object. It is yes if not specified.
   */
  printObject?: YesNoValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/group-link
 *
 * Multiple &lt;part-link&gt; elements can reference different types of linked
 * documents, such as parts and condensed score. The optional &lt;group-link&gt
 * elements identify the groups used in the linked document. The content of a
 * &lt;group-link&gt; element should match the content of a &lt;group&gt; element
 * in the linked document.
 */
export interface GroupLink {
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/instrument-link
 *
 * Multiple &lt;part-link&gt; elements can link a condensed part within a score
 * file to multiple MusicXML parts files. For example, a "Clarinet 1 and 2" part in
 * a score file could link to separate "Clarinet 1" and "Clarinet 2" part files.
 * The &lt;instrument-link&gt; element distinguishes which of the
 * &lt;score-instrument&gt;s within a &lt;score-part&gt; are in which part file.
 */
export interface InstrumentLink {
  /**
   * Refers to a &lt;score-instrument&gt; id attribute.
   */
  id: IDREFValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/part-link
 *
 * The &lt;part-link&gt; element allows MusicXML data for both score and parts to
 * be contained within a single compressed MusicXML file. It links a
 * &lt;score-part&gt; from a score document to MusicXML documents that contain
 * parts data. In the case of a single compressed MusicXML file, the link href
 * values are paths that are relative to the root folder of the zip file.
 */
export interface PartLink {
  /**
   * The href attribute provides the data that allows an application to find a remote
   * resource or resource fragment. See the <a
   * href="https://www.w3.org/TR/xlink11/#link-locators">definition in the XML
   * Linking Language recommendation</a>.
   */
  xlinkHref: AnyURIValue[]
  /**
   * The actuate attribute is used to communicate the desired timing of traversal
   * from the starting resource to the ending resource. The default value is
   * onRequest. See the <a
   * href="https://www.w3.org/TR/xlink11/#link-behaviors">definition in the XML
   * Linking Language recommendation</a>.
   */
  xlinkActuate?: XlinkActuateValue[]
  /**
   * The role attribute indicates a property of the link. See the <a
   * href="https://www.w3.org/TR/xlink11/#link-semantics">definition in the XML
   * Linking Language recommendation</a>.
   */
  xlinkRole?: TokenValue[]
  /**
   * The show attribute is used to communicate the desired presentation of the ending
   * resource on traversal from the starting resource. The default value is replace.
   * See the <a href="https://www.w3.org/TR/xlink11/#link-behaviors">definition in
   * the XML Linking Language recommendation</a>.
   */
  xlinkShow?: XlinkShowValue[]
  /**
   * The title attribute describes the meaning of a link or resource in a
   * human-readable fashion. See the <a
   * href="https://www.w3.org/TR/xlink11/#link-semantics">definition in the XML
   * Linking Language recommendation</a>.
   */
  xlinkTitle?: TokenValue[]
  /**
   * The type attribute identifies XLink element types. In MusicXML, the value is
   * always simple. See the <a
   * href="https://www.w3.org/TR/xlink11/#link-types">definition in the XML Linking
   * Language recommendation</a>.
   */
  xlinkType?: XlinkTypeValue[]
  /**
   * {@link GroupLink}
   */
  groupLink?: GroupLink[]
  /**
   * {@link InstrumentLink}
   */
  instrumentLink?: InstrumentLink[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/part-name
 *
 * The &lt;part-name&gt; and &lt;part-abbreviation&gt; elements describe the name
 * and abbreviation of a &lt;score-part&gt; element, respectively. Formatting
 * attributes for these elements were deprecated in Version 2.0 in favor of the
 * &lt;part-name-display&gt; and &lt;part-abbreviation-display&gt; elements.
 */
export interface PartName {
  /**
   * Indicates the color of an element.
   */
  color?: ColorValue[]
  /**
   * Changes the computation of the default horizontal position. The origin is
   * changed relative to the left-hand side of the note or the musical position
   * within the bar. Positive x is right and negative x is left.<br><br>This
   * attribute provides higher-resolution positioning data than the &lt;offset&gt
   * element. Applications reading a MusicXML file that can understand both features
   * should generally rely on this attribute for its greater accuracy.
   */
  defaultX?: TenthsValue[]
  /**
   * Changes the computation of the default vertical position. The origin is changed
   * relative to the top line of the staff. Positive y is up and negative y is
   * down.<br><br>This attribute provides higher-resolution positioning data than the
   * placement attribute. Applications reading a MusicXML file that can understand
   * both attributes should generally rely on this attribute for its greater
   * accuracy.
   */
  defaultY?: TenthsValue[]
  /**
   * A comma-separated list of font names.
   */
  fontFamily?: FontFamilyValue[]
  /**
   * One of the CSS sizes or a numeric point size.
   */
  fontSize?: FontSizeValue[]
  /**
   * Normal or italic style.
   */
  fontStyle?: FontStyleValue[]
  /**
   * Normal or bold weight.
   */
  fontWeight?: FontWeightValue[]
  /**
   * Indicates left, center, or right justification. The default value varies for
   * different elements. For elements where the justify attribute is present but the
   * halign attribute is not, the justify attribute indicates horizontal alignment as
   * well as justification.
   */
  justify?: LeftCenterRightValue[]
  /**
   * Specifies whether or not to print an object. It is yes if not specified.
   */
  printObject?: YesNoValue[]
  /**
   * Changes the horizontal position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-x attribute.
   * Positive x is right and negative x is left. It should be interpreted in the
   * context of the &lt;offset&gt; element or directive attribute if those are
   * present.
   */
  relativeX?: TenthsValue[]
  /**
   * Changes the vertical position relative to the default position, either as
   * computed by the individual program, or as overridden by the default-y attribute.
   * Positive y is up and negative y is down. It should be interpreted in the context
   * of the placement attribute if that is present.
   */
  relativeY?: TenthsValue[]
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/player-name
 *
 * The &lt;player-name&gt; element is typically used within a software application,
 * rather than appearing on the printed page of a score.
 */
export interface PlayerName {
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/player
 *
 * The &lt;player&gt; element allows for multiple players per &lt;score-part&gt
 * for use in listening applications. One player may play multiple instruments,
 * while a single instrument may include multiple players in divisi sections.
 */
export interface Player {
  /**
   * An identifier for this &lt;player&gt; that is unique within this document.
   */
  id: IDValue[]
  /**
   * {@link PlayerName}
   */
  playerName?: PlayerName[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/instrument-abbreviation
 *
 * The &lt;instrument-abbreviation&gt; element is typically used within a software
 * application, rather than appearing on the printed page of a score.
 */
export interface InstrumentAbbreviation {
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/instrument-name
 *
 * The &lt;instrument-name&gt; element is typically used within a software
 * application, rather than appearing on the printed page of a score.
 */
export interface InstrumentName {
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/score-instrument
 *
 * The &lt;score-instrument&gt; element represents a single instrument within a
 * &lt;score-part&gt;. As with the &lt;score-part&gt; element, each
 * &lt;score-instrument&gt; has a required ID attribute, a name, and an optional
 * abbreviation.
 */
export interface ScoreInstrument {
  /**
   * An identifier for this &lt;score-instrument&gt; that is unique to this document.
   */
  id: IDValue[]
  /**
   * {@link Ensemble}
   */
  ensemble?: Ensemble[]
  /**
   * {@link InstrumentAbbreviation}
   */
  instrumentAbbreviation?: InstrumentAbbreviation[]
  /**
   * {@link InstrumentName}
   */
  instrumentName?: InstrumentName[]
  /**
   * {@link InstrumentSound}
   */
  instrumentSound?: InstrumentSound[]
  /**
   * {@link Solo}
   */
  solo?: Solo[]
  /**
   * {@link VirtualInstrument}
   */
  virtualInstrument?: VirtualInstrument[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/score-part
 *
 * The &lt;score-part&gt; element collects part-wide information for each part in a
 * score. Often each MusicXML part corresponds to a track in a Standard MIDI Format
 * 1 file. In this case, the &lt;midi-device&gt; element is used to make a MIDI
 * device or port assignment for the given track or specific MIDI instruments.
 * Initial &lt;midi-instrument&gt; assignments may be made here as well.
 */
export interface ScorePart {
  id: IDValue[]
  /**
   * {@link Group}
   */
  group?: Group[]
  /**
   * {@link Identification}
   */
  identification?: Identification[]
  /**
   * {@link MidiDevice}
   */
  midiDevice?: MidiDevice[]
  /**
   * {@link MidiInstrument}
   */
  midiInstrument?: MidiInstrument[]
  /**
   * {@link PartAbbreviation}
   */
  partAbbreviation?: PartAbbreviation[]
  /**
   * {@link PartAbbreviationDisplay}
   */
  partAbbreviationDisplay?: PartAbbreviationDisplay[]
  /**
   * {@link PartLink}
   */
  partLink?: PartLink[]
  /**
   * {@link PartName}
   */
  partName?: PartName[]
  /**
   * {@link PartNameDisplay}
   */
  partNameDisplay?: PartNameDisplay[]
  /**
   * {@link Player}
   */
  player?: Player[]
  /**
   * {@link ScoreInstrument}
   */
  scoreInstrument?: ScoreInstrument[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/part-list
 *
 * The &lt;part-list&gt; element identifies the different musical parts in this
 * document. Each part has an ID that is used later within the musical data. Since
 * parts may be encoded separately and combined later, identification elements are
 * present at both the score and &lt;score-part&gt; levels.
 */
export interface PartList {
  /**
   * {@link PartGroup}
   */
  partGroup?: PartGroup[]
  /**
   * {@link ScorePart}
   */
  scorePart?: ScorePart[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/opus-reference
 *
 * The &lt;opus&gt; element represents a link to a MusicXML opus document that
 * composes multiple MusicXML scores into a collection.
 */
export interface Opus {
  /**
   * The href attribute provides the data that allows an application to find a remote
   * resource or resource fragment. See the <a
   * href="https://www.w3.org/TR/xlink11/#link-locators">definition in the XML
   * Linking Language recommendation</a>.
   */
  xlinkHref: AnyURIValue[]
  /**
   * The actuate attribute is used to communicate the desired timing of traversal
   * from the starting resource to the ending resource. The default value is
   * onRequest. See the <a
   * href="https://www.w3.org/TR/xlink11/#link-behaviors">definition in the XML
   * Linking Language recommendation</a>.
   */
  xlinkActuate?: XlinkActuateValue[]
  /**
   * The role attribute indicates a property of the link. See the <a
   * href="https://www.w3.org/TR/xlink11/#link-semantics">definition in the XML
   * Linking Language recommendation</a>.
   */
  xlinkRole?: TokenValue[]
  /**
   * The show attribute is used to communicate the desired presentation of the ending
   * resource on traversal from the starting resource. The default value is replace.
   * See the <a href="https://www.w3.org/TR/xlink11/#link-behaviors">definition in
   * the XML Linking Language recommendation</a>.
   */
  xlinkShow?: XlinkShowValue[]
  /**
   * The title attribute describes the meaning of a link or resource in a
   * human-readable fashion. See the <a
   * href="https://www.w3.org/TR/xlink11/#link-semantics">definition in the XML
   * Linking Language recommendation</a>.
   */
  xlinkTitle?: TokenValue[]
  /**
   * The type attribute identifies XLink element types. In MusicXML, the value is
   * always simple. See the <a
   * href="https://www.w3.org/TR/xlink11/#link-types">definition in the XML Linking
   * Language recommendation</a>.
   */
  xlinkType?: XlinkTypeValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/work-number
 *
 * The &lt;work-number&gt; element specifies the number of a work, such as its opus
 * number.
 */
export interface WorkNumber {
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/work-title
 *
 * The &lt;work-title&gt; element specifies the title of a work, not including its
 * opus or other work number.
 */
export interface WorkTitle {
  v: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/work
 *
 * Works are optionally identified by number and title. The &lt;work&gt; element
 * also may indicate a link to the &lt;opus&gt; document that composes multiple
 * scores into a collection.
 */
export interface Work {
  /**
   * {@link Opus}
   */
  opus?: Opus[]
  /**
   * {@link WorkNumber}
   */
  workNumber?: WorkNumber[]
  /**
   * {@link WorkTitle}
   */
  workTitle?: WorkTitle[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/score-partwise
 *
 * The &lt;score-partwise&gt; element is the root element for a partwise MusicXML
 * score. It includes score header information followed by a series of &lt;part&gt
 * elements with &lt;measure&gt; elements inside.
 */
export interface ScorePartwise {
  /**
   * The version attribute was added in Version 1.1 for the score-partwise and
   * score-timewise documents. It provides an easier way to get version information
   * than through the MusicXML public ID. The default value is 1.0 to make it
   * possible for programs that handle later versions to distinguish earlier version
   * files reliably. Programs that write MusicXML 1.1 or later files should set this
   * attribute.
   */
  version?: TokenValue[]
  /**
   * {@link Credit}
   */
  credit?: Credit[]
  /**
   * {@link Defaults}
   */
  defaults?: Defaults[]
  /**
   * {@link Identification}
   */
  identification?: Identification[]
  /**
   * {@link MovementNumber}
   */
  movementNumber?: MovementNumber[]
  /**
   * {@link MovementTitle}
   */
  movementTitle?: MovementTitle[]
  /**
   * {@link Part}
   */
  part?: Part[]
  /**
   * {@link PartList}
   */
  partList?: PartList[]
  /**
   * {@link Work}
   */
  work?: Work[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/above-below
 *
 * The above-below type is used to indicate whether one element appears above or
 * below another element.
 */
export type AboveBelowValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/accidental-value
 *
 * The accidental-value type represents notated accidentals supported by MusicXML.
 * In the MusicXML 2.0 DTD this was a string with values that could be included.
 * The XSD strengthens the data typing to an enumerated list. The quarter- and
 * three-quarters- accidentals are Tartini-style quarter-tone accidentals. The
 * -down and -up accidentals are quarter-tone accidentals that include arrows
 * pointing down or up. The slash- accidentals are used in Turkish classical music.
 * The numbered sharp and flat accidentals are superscripted versions of the
 * accidental signs, used in Turkish folk music. The sori and koron accidentals are
 * microtonal sharp and flat accidentals used in Iranian and Persian music. The
 * other accidental covers accidentals other than those listed here. It is usually
 * used in combination with the smufl attribute to specify a particular Standard
 * Music Font Layout (SMuFL) accidental. The smufl attribute may be used with any
 * accidental value to help specify the appearance of symbols that share the same
 * MusicXML semantics.
 */
export type AccidentalValueValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/accordion-middle
 *
 * The accordion-middle type may have values of 1, 2, or 3, corresponding to having
 * 1 to 3 dots in the middle section of the accordion registration symbol. This
 * type is not used if no dots are present.
 */
export type AccordionMiddleValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/xsd-anyURI
 *
 * See the <a href="https://www.w3.org/TR/xmlschema-2/#anyURI">definition in the
 * W3C XML Schema standard</a>.
 */
export type AnyURIValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/arrow-direction
 *
 * The arrow-direction type represents the direction in which an arrow points,
 * using Unicode arrow terminology.
 */
export type ArrowDirectionValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/arrow-style
 *
 * The arrow-style type represents the style of an arrow, using Unicode arrow
 * terminology. Filled and hollow arrows indicate polygonal single arrows. Paired
 * arrows are duplicate single arrows in the same direction. Combined arrows apply
 * to double direction arrows like left right, indicating that an arrow in one
 * direction should be combined with an arrow in the other direction.
 */
export type ArrowStyleValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/backward-forward
 *
 * The backward-forward type is used to specify repeat directions. The start of the
 * repeat has a forward direction while the end of the repeat has a backward
 * direction.
 */
export type BackwardForwardValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/bar-style
 *
 * The bar-style type represents barline style information. Choices are regular,
 * dotted, dashed, heavy, light-light, light-heavy, heavy-light, heavy-heavy, tick
 * (a short stroke through the top line), short (a partial barline between the 2nd
 * and 4th lines), and none.
 */
export type BarStyleValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/beam-level
 *
 * The MusicXML format supports six levels of beaming, up to 1024th notes. Unlike
 * the number-level type, the beam-level type identifies concurrent beams in a beam
 * group. It does not distinguish overlapping beams such as grace notes within
 * regular notes, or beams used in different voices.
 */
export type BeamLevelValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/beam-value
 *
 * The beam-value type represents the type of beam associated with each of 8 beam
 * levels (up to 1024th notes) available for each note.
 */
export type BeamValueValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/beater-value
 *
 * The beater-value type represents pictograms for beaters, mallets, and sticks
 * that do not have different materials represented in the pictogram.
 */
export type BeaterValueValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/bend-shape
 *
 * The bend-shape type distinguishes between the angled bend symbols commonly used
 * in standard notation and the curved bend symbols commonly used in both tablature
 * and standard notation.
 */
export type BendShapeValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/breath-mark-value
 *
 * The breath-mark-value type represents the symbol used for a breath mark.
 */
export type BreathMarkValueValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/caesura-value
 *
 * The caesura-value type represents the shape of the caesura sign.
 */
export type CaesuraValueValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/cancel-location
 *
 * The cancel-location type is used to indicate where a key signature cancellation
 * appears relative to a new key signature: to the left, to the right, or before
 * the barline and to the left. It is left if not specified. For mid-measure key
 * elements, a cancel-location of before-barline should be treated like a
 * cancel-location of left.
 */
export type CancelLocationValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/circular-arrow
 *
 * The circular-arrow type represents the direction in which a circular arrow
 * points, using Unicode arrow terminology.
 */
export type CircularArrowValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/clef-sign
 *
 * The clef-sign type represents the different clef symbols.
 */
export type ClefSignValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/color
 *
 * The color type indicates the color of an element. Color may be represented as
 * hexadecimal RGB triples, as in HTML, or as hexadecimal ARGB tuples, with the A
 * indicating alpha of transparency. An alpha value of 00 is totally transparent
 * FF is totally opaque. If RGB is used, the A value is assumed to be
 * FF.<br><br>For instance, the RGB value "#800080" represents purple. An ARGB
 * value of "#40800080" would be a transparent purple.<br><br>As in <a
 * href="https://www.w3.org/TR/SVG11/color.html">SVG 1.1</a>, colors are defined in
 * terms of the <a href="https://www.color.org/srgb04.xalter">sRGB</a> color space
 * (IEC 61966).
 */
export type ColorValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/comma-separated-text
 *
 *
 */
export type CommaSeparatedTextValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/css-font-size
 *
 *
 */
export type CssFontSizeValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/xsd-date
 *
 *
 */
export type DateValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/xsd-decimal
 *
 *
 */
export type DecimalValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/degree-symbol-value
 *
 * The degree-symbol-value type indicates which symbol should be used in specifying
 * a degree.
 */
export type DegreeSymbolValueValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/degree-type-value
 *
 * The degree-type-value type indicates whether the current degree element is an
 * addition, alteration, or subtraction to the kind of the current chord in the
 * harmony element.
 */
export type DegreeTypeValueValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/distance-type
 *
 * The distance-type defines what type of distance is being defined in a
 * &lt;distance&gt; element. Values include:
 */
export type DistanceTypeValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/divisions
 *
 * The divisions type is used to express values in terms of the musical divisions
 * defined by the divisions element. It is preferred that these be integer values
 * both for MIDI interoperability and to avoid roundoff errors.
 */
export type DivisionsValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/effect-value
 *
 * The effect-value type represents pictograms for sound effect percussion
 * instruments. The cannon, lotus flute, and megaphone values are in addition to
 * Stone's list.
 */
export type EffectValueValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/enclosure-shape
 *
 * The enclosure-shape type describes the shape and presence / absence of an
 * enclosure around text or symbols. A bracket enclosure is similar to a rectangle
 * with the bottom line missing, as is common in jazz notation. An inverted-bracket
 * enclosure is similar to a rectangle with the top line missing.
 */
export type EnclosureShapeValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/ending-number
 *
 * The ending-number type is used to specify either a comma-separated list of
 * positive integers without leading zeros, or a string of zero or more spaces. It
 * is used for the number attribute of the &lt;ending&gt; element. The zero or more
 * spaces version is used when software knows that an ending is present, but cannot
 * determine the type of the ending.
 */
export type EndingNumberValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/fan
 *
 * The fan type represents the type of beam fanning present on a note, used to
 * represent accelerandos and ritardandos.
 */
export type FanValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/fermata-shape
 *
 * The fermata-shape type represents the shape of the fermata sign.
 */
export type FermataShapeValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/fifths
 *
 * The fifths type represents the number of flats or sharps in a traditional key
 * signature. Negative numbers are used for flats and positive numbers for sharps,
 * reflecting the key's placement within the circle of fifths (hence the type
 * name).
 */
export type FifthsValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/font-family
 *
 * The font-family is a comma-separated list of font names. These can be specific
 * font styles such as Maestro or Opus, or one of several generic font styles:
 * music, engraved, handwritten, text, serif, sans-serif, handwritten, cursive,
 * fantasy, and monospace. The music, engraved, and handwritten values refer to
 * music fonts; the rest refer to text fonts. The fantasy style refers to
 * decorative text such as found in older German-style printing.
 */
export type FontFamilyValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/font-size
 *
 * The font-size can be one of the <a href="../css-font-size/index.html">CSS font
 * sizes</a> or a <a href="../xsd-decimal/index.html">decimal</a> point size.
 */
export type FontSizeValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/font-style
 *
 * The font-style type represents a simplified version of the <a
 * href="https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/#font-prop-desc">CSS
 * font-style property</a>.
 */
export type FontStyleValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/font-weight
 *
 * The font-weight type represents a simplified version of the <a
 * href="https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/#font-prop-desc">CSS
 * font-weight property</a>.
 */
export type FontWeightValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/glass-value
 *
 * The glass-value type represents pictograms for glass percussion instruments.
 */
export type GlassValueValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/glyph-type
 *
 * The glyph-type defines what type of glyph is being defined in a &lt;glyph&gt
 * element. Values include:
 */
export type GlyphTypeValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/group-barline-value
 *
 * The group-barline-value type indicates if the group should have common barlines.
 */
export type GroupBarlineValueValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/group-symbol-value
 *
 * The group-symbol-value type indicates how the symbol for a group or multi-staff
 * part is indicated in the score.
 */
export type GroupSymbolValueValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/handbell-value
 *
 * The handbell-value type represents the type of handbell technique being notated.
 */
export type HandbellValueValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/harmon-closed-location
 *
 * The harmon-closed-location type indicates which portion of the symbol is filled
 * in when the corresponding harmon-closed-value is half.
 */
export type HarmonClosedLocationValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/harmon-closed-value
 *
 * The harmon-closed-value type represents whether the harmon mute is closed, open,
 * or half-open.
 */
export type HarmonClosedValueValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/harmony-arrangement
 *
 * The harmony-arrangement type indicates how stacked chords and bass notes are
 * displayed within a harmony element. The horizontal value specifies that the
 * second element appears to the right of the first. The vertical value specifies
 * that the second element appears below the first. The diagonal value specifies
 * that the second element appears both below and to the right of the first.
 */
export type HarmonyArrangementValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/harmony-type
 *
 * The harmony-type type differentiates different types of harmonies when alternate
 * harmonies are possible.
 */
export type HarmonyTypeValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/hole-closed-location
 *
 * The hole-closed-location type indicates which portion of the hole is filled in
 * when the corresponding hole-closed-value is half.
 */
export type HoleClosedLocationValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/hole-closed-value
 *
 * The hole-closed-value type represents whether the hole is closed, open, or
 * half-open.
 */
export type HoleClosedValueValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/xsd-ID
 *
 * See the <a href="https://www.w3.org/TR/xmlschema-2/#ID">definition in the W3C
 * XML Schema standard</a>.
 */
export type IDValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/xsd-IDREF
 *
 * See the <a href="https://www.w3.org/TR/xmlschema-2/#IDREF">definition in the W3C
 * XML Schema standard</a>.
 */
export type IDREFValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/xsd-integer
 *
 * See the <a href="https://www.w3.org/TR/xmlschema-2/#integer">definition in the
 * W3C XML Schema standard</a>.
 */
export type IntegerValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/kind-value
 *
 * A kind-value indicates the type of chord. Degree elements can then add,
 * subtract, or alter from these starting points. The 11th and 13th values are
 * usually used as a basis for alteration.
 */
export type KindValueValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/left-center-right
 *
 * The left-center-right type is used to define horizontal alignment and text
 * justification.
 */
export type LeftCenterRightValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/left-right
 *
 * The left-right type is used to indicate whether one element appears to the left
 * or the right of another element.
 */
export type LeftRightValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/line-end
 *
 * The line-end type specifies if there is a jog up or down (or both), an arrow, or
 * nothing at the start or end of a bracket.
 */
export type LineEndValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/line-length
 *
 * The line-length type distinguishes between different line lengths for doit,
 * falloff, plop, and scoop articulations.
 */
export type LineLengthValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/line-shape
 *
 * The line-shape type distinguishes between straight and curved lines.
 */
export type LineShapeValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/line-type
 *
 * The line-type type distinguishes between solid, dashed, dotted, and wavy lines.
 */
export type LineTypeValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/line-width-type
 *
 * The line-width-type defines what type of line is being defined in a
 * &lt;line-width&gt; element. Values include:
 */
export type LineWidthTypeValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/margin-type
 *
 * The margin-type type specifies whether margins apply to even page, odd pages, or
 * both.
 */
export type MarginTypeValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/measure-numbering-value
 *
 * The measure-numbering-value type describes how measure numbers are displayed on
 * this part: no numbers, numbers every measure, or numbers every system.
 */
export type MeasureNumberingValueValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/measure-text
 *
 * The measure-text type is used for the text attribute of measure elements. It has
 * at least one character. The implicit attribute of the measure element should be
 * set to "yes" rather than setting the text attribute to an empty string.
 */
export type MeasureTextValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/membrane-value
 *
 * The membrane-value type represents pictograms for membrane percussion
 * instruments.
 */
export type MembraneValueValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/metal-value
 *
 * The metal-value type represents pictograms for metal percussion instruments. The
 * hi-hat value refers to a pictogram like high-hat cymbals, but without the long
 * vertical line at the bottom.
 */
export type MetalValueValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/midi-128
 *
 * The midi-128 type is used to express MIDI 1.0 values that range from 1 to 128.
 * MusicXML uses 1-based numbers rather than 0-based numbers often found in MIDI
 * 1.0 documentation.
 */
export type Midi128Value = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/midi-16
 *
 * The midi-16 type is used to express MIDI 1.0 values that range from 1 to 16.
 */
export type Midi16Value = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/midi-16384
 *
 * The midi-16384 type is used to express MIDI 1.0 values that range from 1 to
 * 16,384. MusicXML uses 1-based numbers rather than 0-based numbers often found in
 * MIDI 1.0 documentation.
 */
export type Midi16384Value = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/millimeters
 *
 * The millimeters type is a number representing millimeters. This is used in the
 * &lt;scaling&gt; element to provide a default scaling from tenths to physical
 * units.
 */
export type MillimetersValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/milliseconds
 *
 * The milliseconds type represents an integral number of milliseconds.
 */
export type MillisecondsValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/mode
 *
 * The mode type is used to specify major/minor and other mode distinctions. Valid
 * mode values include major, minor, dorian, phrygian, lydian, mixolydian, aeolian,
 * ionian, locrian, and none.
 */
export type ModeValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/mute
 *
 * The mute type represents muting playback for different instruments, including
 * brass, winds, and strings. The on and off values are used for undifferentiated
 * mutes. The remaining values represent specific mutes.
 */
export type MuteValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/xsd-NMTOKEN
 *
 * See the <a href="https://www.w3.org/TR/xmlschema-2/#NMTOKEN">definition in the
 * W3C XML Schema standard</a>.
 */
export type NMTOKENValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/non-negative-decimal
 *
 * The non-negative-decimal type specifies a non-negative decimal value.
 */
export type NonNegativeDecimalValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/xsd-nonNegativeInteger
 *
 * See the <a
 * href="https://www.w3.org/TR/xmlschema-2/#nonNegativeInteger">definition in the
 * W3C XML Schema standard</a>.
 */
export type NonNegativeIntegerValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/note-size-type
 *
 * The note-size-type type indicates the type of note size being defined by a
 * &lt;note-size&gt; element.
 */
export type NoteSizeTypeValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/note-type-value
 *
 * The note-type-value type is used for the MusicXML type element and represents
 * the graphic note type, from 1024th (shortest) to maxima (longest).
 */
export type NoteTypeValueValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/notehead-value
 *
 * The notehead-value type indicates shapes other than the open and closed ovals
 * associated with note durations. <br><br>The values do, re, mi, fa, fa up, so,
 * la, and ti correspond to Aikin's 7-shape system.  The fa up shape is typically
 * used with upstems; the fa shape is typically used with downstems or no
 * stems.<br><br>The arrow shapes differ from triangle and inverted triangle by
 * being centered on the stem. Slashed and back slashed notes include both the
 * normal notehead and a slash. The triangle shape has the tip of the triangle
 * pointing up; the inverted triangle shape has the tip of the triangle pointing
 * down. The left triangle shape is a right triangle with the hypotenuse facing up
 * and to the left.<br><br>The other notehead covers noteheads other than those
 * listed here. It is usually used in combination with the smufl attribute to
 * specify a particular SMuFL notehead. The smufl attribute may be used with any
 * notehead value to help specify the appearance of symbols that share the same
 * MusicXML semantics. Noteheads in the SMuFL Note name noteheads and Note name
 * noteheads supplement ranges (U+E150–U+E1AF and U+EEE0–U+EEFF) should not use the
 * smufl attribute or the "other" value, but instead use the notehead-text element.
 */
export type NoteheadValueValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/number-level
 *
 * Slurs, tuplets, and many other features can be concurrent and overlap within a
 * single musical part. The number-level entity distinguishes up to 16 concurrent
 * objects of the same type when the objects overlap in MusicXML document order.
 * Values greater than 6 are usually only needed for music with a large number of
 * divisi staves in a single part, or if there are more than 6 cross-staff
 * arpeggios in a single measure. When a number-level value is optional and has no
 * default value, it is 1 if not specified.<br><br>When polyphonic parts are
 * involved, the ordering within a MusicXML document can differ from musical score
 * order. As an example, say we have a piano part in 4/4 where within a single
 * measure, all the notes on the top staff are followed by all the notes on the
 * bottom staff. In this example, each staff has a slur that starts on beat 2 and
 * stops on beat 3, and there is a third slur that goes from beat 1 of one staff to
 * beat 4 of the other staff.<br><br>In this situation, the two mid-measure slurs
 * can use the same number because they do not overlap in MusicXML document order,
 * even though they do overlap in musical score order. Within the MusicXML
 * document, the top staff slur will both start and stop before the bottom staff
 * slur starts and stops.<br><br>If the cross-staff slur starts in the top staff
 * and stops in the bottom staff, it will need a separate number from the
 * mid-measure slurs because it overlaps those slurs in MusicXML document order.
 * However, if the cross-staff slur starts in the bottom staff and stops in the top
 * staff, all three slurs can use the same number. None of them overlap within the
 * MusicXML document, even though they all overlap each other in the musical score
 * order. Within the MusicXML document, the start and stop of the top-staff slur
 * will be followed by the stop and start of the cross-staff slur, followed by the
 * start and stop of the bottom-staff slur.<br><br>As this example demonstrates, a
 * reading program should be prepared to handle cases where the number-levels start
 * and stop in an arbitrary order. Because the start and stop values refer to
 * musical score order, a program may find the stopping point of an object earlier
 * in the MusicXML document than it will find its starting point.
 */
export type NumberLevelValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/number-of-lines
 *
 * The number-of-lines type is used to specify the number of lines in text
 * decoration attributes.
 */
export type NumberOfLinesValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/number-or-normal
 *
 * The number-or-normal values can be either a decimal number or the string
 * "normal". This is used by the line-height and letter-spacing attributes.
 */
export type NumberOrNormalValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/numeral-mode
 *
 * The numeral-mode type specifies the mode similar to the mode type, but with a
 * restricted set of values. The different minor values are used to interpret
 * &lt;numeral-root&gt; values of 6 and 7 when present in a minor key. The harmonic
 * minor value sharpens the 7 and the melodic minor value sharpens both 6 and 7. If
 * a minor mode is used without qualification, either in the &lt;mode&gt; or
 * &lt;numeral-mode&gt; elements, natural minor is used.
 */
export type NumeralModeValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/numeral-value
 *
 * The numeral-value type represents a Roman numeral or Nashville number value as a
 * positive integer from 1 to 7.
 */
export type NumeralValueValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/octave
 *
 * Octaves are represented by the numbers 0 to 9, where 4 indicates the octave
 * started by middle C.
 */
export type OctaveValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/on-off
 *
 * The on-off type is used for notation elements such as string mutes.
 */
export type OnOffValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/over-under
 *
 * The over-under type is used to indicate whether the tips of curved lines such as
 * slurs and ties are overhand (tips down) or underhand (tips up).
 */
export type OverUnderValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/pedal-type
 *
 * The pedal-type distinguishes types of pedal directions.
 */
export type PedalTypeValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/percent
 *
 * The percent type specifies a percentage from 0 to 100.
 */
export type PercentValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/pitched-value
 *
 * The pitched-value type represents pictograms for pitched percussion instruments.
 * The chimes and tubular chimes values distinguish the single-line and double-line
 * versions of the pictogram.
 */
export type PitchedValueValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/positive-divisions
 *
 * The positive-divisions type restricts divisions values to positive numbers.
 */
export type PositiveDivisionsValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/positive-integer-or-empty
 *
 * The positive-integer-or-empty values can be either a positive integer or an
 * empty string.
 */
export type PositiveIntegerOrEmptyValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/xsd-positiveInteger
 *
 * See the <a href="https://www.w3.org/TR/xmlschema-2/#positiveInteger">definition
 * in the W3C XML Schema standard</a>.
 */
export type PositiveIntegerValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/principal-voice-symbol
 *
 * The principal-voice-symbol type represents the type of symbol used to indicate a
 * principal or secondary voice.
 */
export type PrincipalVoiceSymbolValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/right-left-middle
 *
 * The right-left-middle type is used to specify barline location.
 */
export type RightLeftMiddleValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/rotation-degrees
 *
 * The rotation-degrees type specifies rotation, pan, and elevation values in
 * degrees. Values range from -180 to 180.
 */
export type RotationDegreesValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/semi-pitched
 *
 * The semi-pitched type represents categories of indefinite pitch for percussion
 * instruments.
 */
export type SemiPitchedValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/semitones
 *
 * The semitones type is a number representing semitones, used for chromatic
 * alteration. A value of -1 corresponds to a flat and a value of 1 to a sharp.
 * Decimal values like 0.5 (quarter tone sharp) are used for microtones.
 */
export type SemitonesValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/show-frets
 *
 * The show-frets type indicates whether to show tablature frets as numbers (0, 1,
 * 2) or letters (a, b, c). The default choice is numbers.
 */
export type ShowFretsValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/show-tuplet
 *
 * The show-tuplet type indicates whether to show a part of a tuplet relating to
 * the tuplet-actual element, both the tuplet-actual and tuplet-normal elements, or
 * neither.
 */
export type ShowTupletValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/smufl-accidental-glyph-name
 *
 * The smufl-accidental-glyph-name type is used to reference a specific Standard
 * Music Font Layout (SMuFL) accidental character. The value is a SMuFL canonical
 * glyph name that starts with one of the strings used at the start of glyph names
 * for SMuFL accidentals.
 */
export type SmuflAccidentalGlyphNameValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/smufl-coda-glyph-name
 *
 * The smufl-coda-glyph-name type is used to reference a specific Standard Music
 * Font Layout (SMuFL) coda character. The value is a SMuFL canonical glyph name
 * that starts with coda.
 */
export type SmuflCodaGlyphNameValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/smufl-glyph-name
 *
 * The smufl-glyph-name type is used for attributes that reference a specific
 * Standard Music Font Layout (SMuFL) character. The value is a SMuFL canonical
 * glyph name, not a code point. For instance, the value for a standard piano pedal
 * mark would be keyboardPedalPed, not U+E650.
 */
export type SmuflGlyphNameValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/smufl-lyrics-glyph-name
 *
 * The smufl-lyrics-glyph-name type is used to reference a specific Standard Music
 * Font Layout (SMuFL) lyrics elision character. The value is a SMuFL canonical
 * glyph name that starts with lyrics.
 */
export type SmuflLyricsGlyphNameValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/smufl-pictogram-glyph-name
 *
 * The smufl-pictogram-glyph-name type is used to reference a specific Standard
 * Music Font Layout (SMuFL) percussion pictogram character. The value is a SMuFL
 * canonical glyph name that starts with pict.
 */
export type SmuflPictogramGlyphNameValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/smufl-segno-glyph-name
 *
 * The smufl-segno-glyph-name type is used to reference a specific Standard Music
 * Font Layout (SMuFL) segno character. The value is a SMuFL canonical glyph name
 * that starts with segno.
 */
export type SmuflSegnoGlyphNameValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/smufl-wavy-line-glyph-name
 *
 * The smufl-wavy-line-glyph-name type is used to reference a specific Standard
 * Music Font Layout (SMuFL) wavy line character. The value is a SMuFL canonical
 * glyph name that either starts with wiggle, or begins with guitar and ends with
 * VibratoStroke. This includes all the glyphs in the Multi-segment lines range,
 * excluding the beam glyphs.
 */
export type SmuflWavyLineGlyphNameValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/staff-divide-symbol
 *
 * The staff-divide-symbol type is used for staff division symbols. The down, up,
 * and up-down values correspond to SMuFL code points U+E00B, U+E00C, and U+E00D
 * respectively.
 */
export type StaffDivideSymbolValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/staff-line
 *
 * The staff-line type indicates the line on a given staff. Staff lines are
 * numbered from bottom to top, with 1 being the bottom line on a staff.
 */
export type StaffLineValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/staff-line-position
 *
 * The staff-line-position type indicates the line position on a given staff. Staff
 * lines are numbered from bottom to top, with 1 being the bottom line on a staff.
 * A staff-line-position value can extend beyond the range of the lines on the
 * current staff.
 */
export type StaffLinePositionValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/staff-number
 *
 * The staff-number type indicates staff numbers within a multi-staff part. Staves
 * are numbered from top to bottom, with 1 being the top staff on a part.
 */
export type StaffNumberValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/staff-type
 *
 * The staff-type value specifies different uses for the staff.
 */
export type StaffTypeValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/start-note
 *
 * The start-note type describes the starting note of trills and mordents for
 * playback, relative to the current note.
 */
export type StartNoteValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/start-stop
 *
 * The start-stop type is used for an attribute of musical elements that can either
 * start or stop, such as tuplets.<br><br>The values of start and stop refer to how
 * an element appears in musical score order, not in MusicXML document order. An
 * element with a stop attribute may precede the corresponding element with a start
 * attribute within a MusicXML document. This is particularly common in multi-staff
 * music. For example, the stopping point for a tuplet may appear in staff 1 before
 * the starting point for the tuplet appears in staff 2 later in the
 * document.<br><br>When multiple elements with the same tag are used within the
 * same note, their order within the MusicXML document should match the musical
 * score order.
 */
export type StartStopValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/start-stop-continue
 *
 * The start-stop-continue type is used for an attribute of musical elements that
 * can either start or stop, but also need to refer to an intermediate point in the
 * symbol, as for complex slurs or for formatting of symbols across system
 * breaks.<br><br>The values of start, stop, and continue refer to how an element
 * appears in musical score order, not in MusicXML document order. An element with
 * a stop attribute may precede the corresponding element with a start attribute
 * within a MusicXML document. This is particularly common in multi-staff music.
 * For example, the stopping point for a slur may appear in staff 1 before the
 * starting point for the slur appears in staff 2 later in the
 * document.<br><br>When multiple elements with the same tag are used within the
 * same note, their order within the MusicXML document should match the musical
 * score order. For example, a note that marks both the end of one slur and the
 * start of a new slur should have the incoming slur element with a type of stop
 * precede the outgoing slur element with a type of start.
 */
export type StartStopContinueValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/start-stop-discontinue
 *
 * The start-stop-discontinue type is used to specify &lt;ending&gt; types.
 */
export type StartStopDiscontinueValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/start-stop-single
 *
 * The start-stop-single type is used for an attribute of musical elements that can
 * be used for either multi-note or single-note musical elements, as for
 * groupings.<br><br>When multiple elements with the same tag are used within the
 * same note, their order within the MusicXML document should match the musical
 * score order.
 */
export type StartStopSingleValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/stem-value
 *
 * The stem-value type represents the notated stem direction.
 */
export type StemValueValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/step
 *
 * The step type represents a step of the diatonic scale, represented using the
 * English letters A through G.
 */
export type StepValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/stick-location
 *
 * The stick-location type represents pictograms for the location of sticks,
 * beaters, or mallets on cymbals, gongs, drums, and other instruments.
 */
export type StickLocationValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/stick-material
 *
 * The stick-material type represents the material being displayed in a stick
 * pictogram.
 */
export type StickMaterialValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/stick-type
 *
 * The stick-type type represents the shape of pictograms where the material in the
 * stick, mallet, or beater is represented in the pictogram.
 */
export type StickTypeValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/xsd-string
 *
 * See the <a href="https://www.w3.org/TR/xmlschema-2/#string">definition in the
 * W3C XML Schema standard</a>.
 */
export type StringValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/string-number
 *
 * The string-number type indicates a string number. Strings are numbered from high
 * to low, with 1 being the highest pitched full-length string.
 */
export type StringNumberValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/swing-type-value
 *
 * The swing-type-value type specifies the note type, either eighth or 16th, to
 * which the ratio defined in the &lt;swing&gt; element is applied.
 */
export type SwingTypeValueValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/syllabic
 *
 * Lyric hyphenation is indicated by the syllabic type. The single, begin, end, and
 * middle values represent single-syllable words, word-beginning syllables,
 * word-ending syllables, and mid-word syllables, respectively.
 */
export type SyllabicValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/symbol-size
 *
 * The symbol-size type is used to distinguish between full, cue sized, grace cue
 * sized, and oversized symbols.
 */
export type SymbolSizeValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/sync-type
 *
 * The sync-type type specifies the style that a score following application should
 * use to synchronize an accompaniment with a performer.
 */
export type SyncTypeValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/system-relation
 *
 * The system-relation type distinguishes elements that are associated with a
 * system rather than the particular part where the element appears.
 */
export type SystemRelationValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/system-relation-number
 *
 * The system-relation-number type distinguishes measure numbers that are
 * associated with a system rather than the particular part where the element
 * appears.
 */
export type SystemRelationNumberValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/tap-hand
 *
 * The tap-hand type represents the symbol to use for a tap element. The left and
 * right values refer to the SMuFL guitarLeftHandTapping and guitarRightHandTapping
 * glyphs respectively.
 */
export type TapHandValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/tenths
 *
 * The tenths type is a number representing tenths of interline staff space
 * (positive or negative). Both integer and decimal values are allowed, such as 5
 * for a half space and 2.5 for a quarter space. Interline space is measured from
 * the middle of a staff line.<br><br>Distances in a MusicXML file are measured in
 * tenths of staff space. Tenths are then scaled to millimeters within the scaling
 * element, used in the defaults element at the start of a score. Individual staves
 * can apply a scaling factor to adjust staff size. <br><br>When a MusicXML element
 * or attribute refers to tenths, it means the global tenths defined by the
 * &lt;scaling&gt; element, not the local tenths as adjusted by the
 * &lt;staff-size&gt; element.
 */
export type TenthsValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/text-direction
 *
 * The text-direction type is used to adjust and override the Unicode bidirectional
 * text algorithm, similar to the Directionality data category in the <a
 * href="https://www.w3.org/TR/2007/REC-its-20070403/#directionality">W3C
 * Internationalization Tag Set recommendation</a>.
 */
export type TextDirectionValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/tied-type
 *
 * The tied-type type is used as an attribute of the tied element to specify where
 * the visual representation of a tie begins and ends. A &lt;tied&gt; element which
 * joins two notes of the same pitch can be specified with tied-type start on the
 * first note and tied-type stop on the second note. To indicate a note should be
 * undamped, use a single &lt;tied&gt; element with tied-type let-ring. For other
 * ties that are visually attached to a single note, such as a tie leading into or
 * out of a repeated section or coda, use two &lt;tied&gt; elements on the same
 * note, one start and one stop.<br><br>In start-stop cases, ties can add more
 * elements using a continue type. This is typically used to specify the formatting
 * of cross-system ties.
 */
export type TiedTypeValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/time-only
 *
 * The time-only type is used to indicate that a particular playback- or
 * listening-related element only applies particular times through a repeated
 * section. The value is a comma-separated list of positive integers arranged in
 * ascending order, indicating which times through the repeated section that the
 * element applies.
 */
export type TimeOnlyValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/time-relation
 *
 * The time-relation type indicates the symbol used to represent the
 * interchangeable aspect of dual time signatures.
 */
export type TimeRelationValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/time-separator
 *
 * The time-separator type indicates how to display the arrangement between the
 * beats and beat-type values in a time signature. The default value is none. The
 * horizontal, diagonal, and vertical values represent horizontal, diagonal
 * lower-left to upper-right, and vertical lines respectively. For these values,
 * the beats and beat-type values are arranged on either side of the separator
 * line. The none value represents no separator with the beats and beat-type
 * arranged vertically. The adjacent value represents no separator with the beats
 * and beat-type arranged horizontally.
 */
export type TimeSeparatorValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/time-symbol
 *
 * The time-symbol type indicates how to display a time signature. The normal value
 * is the usual fractional display, and is the implied symbol type if none is
 * specified. Other options are the common and cut time symbols, as well as a
 * single number with an implied denominator. The note symbol indicates that the
 * &lt;beat-type&gt; should be represented with the corresponding downstem note
 * rather than a number. The dotted-note symbol indicates that the
 * &lt;beat-type&gt; should be represented with a dotted downstem note that
 * corresponds to three times the &lt;beat-type&gt; value, and a numerator that is
 * one third the &lt;beats&gt; value.
 */
export type TimeSymbolValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/tip-direction
 *
 * The tip-direction type represents the direction in which the tip of a stick or
 * beater points, using Unicode arrow terminology.
 */
export type TipDirectionValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/xsd-token
 *
 * See the <a href="https://www.w3.org/TR/xmlschema-2/#token">definition in the W3C
 * XML Schema standard</a>.
 */
export type TokenValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/top-bottom
 *
 * The top-bottom type is used to indicate the top or bottom part of a vertical
 * shape like non-arpeggiate.
 */
export type TopBottomValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/tremolo-marks
 *
 * The number of tremolo marks is represented by a number from 0 to 8: the same as
 * beam-level with 0 added.
 */
export type TremoloMarksValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/tremolo-type
 *
 * The tremolo-type is used to distinguish double-note, single-note, and unmeasured
 * tremolos.
 */
export type TremoloTypeValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/trill-beats
 *
 * The trill-beats type specifies the beats used in a trill-sound or bend-sound
 * attribute group. It is a decimal value with a minimum value of 2.
 */
export type TrillBeatsValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/trill-step
 *
 * The trill-step type describes the alternating note of trills and mordents for
 * playback, relative to the current note.
 */
export type TrillStepValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/two-note-turn
 *
 * The two-note-turn type describes the ending notes of trills and mordents for
 * playback, relative to the current note.
 */
export type TwoNoteTurnValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/up-down
 *
 * The up-down type is used for the direction of arrows and other pointed symbols
 * like vertical accents, indicating which way the tip is pointing.
 */
export type UpDownValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/up-down-stop-continue
 *
 * The up-down-stop-continue type is used for octave-shift elements, indicating the
 * direction of the shift from their true pitched values because of printing
 * difficulty.
 */
export type UpDownStopContinueValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/upright-inverted
 *
 * The upright-inverted type describes the appearance of a fermata element. The
 * value is upright if not specified.
 */
export type UprightInvertedValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/valign
 *
 * The valign type is used to indicate vertical alignment to the top, middle,
 * bottom, or baseline of the text. Defaults are implementation-dependent.
 */
export type ValignValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/valign-image
 *
 * The valign-image type is used to indicate vertical alignment for images and
 * graphics, so it does not include a baseline value. Defaults are
 * implementation-dependent.
 */
export type ValignImageValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/wedge-type
 *
 * The wedge-type type is used to specify &lt;wedge&gt; types.
 */
export type WedgeTypeValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/winged
 *
 * The winged attribute indicates whether the repeat has winged extensions that
 * appear above and below the barline. The straight and curved values represent
 * single wings, while the double-straight and double-curved values represent
 * double wings. The none value indicates no wings and is the default.
 */
export type WingedValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/wood-value
 *
 * The wood-value type represents pictograms for wood percussion instruments. The
 * maraca and maracas values distinguish the one- and two-maraca versions of the
 * pictogram.
 */
export type WoodValueValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/xlink-actuate
 *
 * See the <a href="https://www.w3.org/TR/xlink11/#link-behaviors">definition in
 * the XML Linking Language recommendation</a>.
 */
export type XlinkActuateValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/xlink-show
 *
 * See the <a href="https://www.w3.org/TR/xlink11/#link-behaviors">definition in
 * the XML Linking Language recommendation</a>.
 */
export type XlinkShowValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/xlink-type
 *
 * See the <a href="https://www.w3.org/TR/xlink11/#link-types">definition in the
 * XML Linking Language recommendation</a>. MusicXML only supports the simple type.
 */
export type XlinkTypeValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/xml-lang
 *
 * See the <a href="https://www.w3.org/TR/xml/#sec-lang-tag">definition in the W3C
 * Extensible Markup Language recommendation</a>. Language names come from ISO 639,
 * with optional country subcodes from ISO 3166.
 */
export type XmlLangValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/xml-space
 *
 * See the <a href="https://www.w3.org/TR/xml/#sec-white-space">definition in the
 * W3C Extensible Markup Language recommendation</a>.
 */
export type XmlSpaceValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/yes-no
 *
 * The yes-no type is used for boolean-like attributes. We cannot use W3C XML
 * Schema booleans due to their restrictions on expression of boolean values.
 */
export type YesNoValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/yes-no-number
 *
 * The yes-no-number type is used for attributes that can be either boolean or
 * numeric values.
 */
export type YesNoNumberValue = string


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/data-types/yyyy-mm-dd
 *
 * Calendar dates are represented yyyy-mm-dd format, following <a
 * href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a>. This
 * is a W3C XML Schema date type, but without the optional timezone data.
 */
export type YyyyMmDdValue = string
