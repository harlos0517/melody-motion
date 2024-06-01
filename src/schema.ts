/* eslint-disable max-len */

/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/bookmark
 *
 * The &lt;bookmark&gt; element serves as a well-defined target for an incoming
 * simple XLink.
 */
export interface Bookmark {
  id: IDValue
  element?: NMTOKENValue
  name?: TokenValue
  position?: PositiveIntegerValue
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
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  halign?: LeftCenterRightValue
  height?: TenthsValue
  id?: IDValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  source?: AnyURIValue
  type?: TokenValue
  valign?: ValignImageValue
  width?: TenthsValue
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  dir?: TextDirectionValue
  enclosure?: EnclosureShapeValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  halign?: LeftCenterRightValue
  id?: IDValue
  justify?: LeftCenterRightValue
  letterSpacing?: NumberOrNormalValue
  lineHeight?: NumberOrNormalValue
  lineThrough?: NumberOfLinesValue
  overline?: NumberOfLinesValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  rotation?: RotationDegreesValue
  underline?: NumberOfLinesValue
  valign?: ValignValue
  v?: SmuflGlyphNameValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/credit-type
 *
 *
 */
export interface CreditType {
  v?: string
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  dir?: TextDirectionValue
  enclosure?: EnclosureShapeValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  halign?: LeftCenterRightValue
  id?: IDValue
  justify?: LeftCenterRightValue
  letterSpacing?: NumberOrNormalValue
  lineHeight?: NumberOrNormalValue
  lineThrough?: NumberOfLinesValue
  overline?: NumberOfLinesValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  rotation?: RotationDegreesValue
  underline?: NumberOfLinesValue
  valign?: ValignValue
  xmlLang?: XmlLangValue
  xmlSpace?: XmlSpaceValue
  v?: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/link
 *
 * The &lt;link&gt; element serves as an outgoing simple XLink. If a relative link
 * is used within a document that is part of a compressed MusicXML file, the link
 * is relative to the root folder of the zip file.
 */
export interface Link {
  xlinkHref: AnyURIValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  element?: NMTOKENValue
  name?: TokenValue
  position?: PositiveIntegerValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  xlinkActuate?: XlinkActuateValue
  xlinkRole?: TokenValue
  xlinkShow?: XlinkShowValue
  xlinkTitle?: TokenValue
  xlinkType?: XlinkTypeValue
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
  id?: IDValue
  page?: PositiveIntegerValue
  bookmark?: Bookmark[]
  creditImage?: CreditImage[]
  creditSymbol?: CreditSymbol[]
  creditType?: CreditType[]
  creditWords?: CreditWords[]
  link?: Link[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/distance
 *
 * The &lt;distance&gt; element represents standard distances between notation
 * elements in tenths.
 */
export interface Distance {
  type: DistanceTypeValue
  v?: TenthsValue
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
  type: GlyphTypeValue
  v?: SmuflGlyphNameValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/line-width
 *
 * The &lt;line-width&gt; element indicates the width of a specific line type in
 * tenths.
 */
export interface LineWidth {
  type: LineWidthTypeValue
  v?: TenthsValue
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
  type: NoteSizeTypeValue
  v?: NonNegativeDecimalValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/other-appearance
 *
 * The &lt;other-appearance&gt; element is used to define any graphical settings
 * not yet in the current version of the MusicXML format. This allows extended
 * representation, though without application interoperability.
 */
export interface OtherAppearance {
  type: TokenValue
  v?: string
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
  distance?: Distance[]
  glyph?: Glyph[]
  lineWidth?: LineWidth[]
  noteSize?: NoteSize[]
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
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  name?: TokenValue
  number?: NMTOKENValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/lyric-language
 *
 * The &lt;lyric-language&gt; element specifies the default language for a
 * particular name and number of lyric.
 */
export interface LyricLanguage {
  xmlLang: XmlLangValue
  name?: TokenValue
  number?: NMTOKENValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/music-font
 *
 * The &lt;music-font&gt; element represents the default values for the music font
 * in the score.
 */
export interface MusicFont {
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/page-height
 *
 * The &lt;page-height&gt; element specifies the page height in tenths.
 */
export interface PageHeight {
  v?: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/bottom-margin
 *
 * The &lt;bottom-margin&gt; element specifies the bottom page margin in tenths.
 */
export interface BottomMargin {
  v?: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/left-margin
 *
 * The &lt;left-margin&gt; element specifies the left margin for the parent element
 * in tenths.
 */
export interface LeftMargin {
  v?: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/right-margin
 *
 * The &lt;right-margin&gt; element specifies the right margin for the parent
 * element in tenths.
 */
export interface RightMargin {
  v?: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/top-margin
 *
 * The &lt;top-margin&gt; element specifies the top page margin in tenths.
 */
export interface TopMargin {
  v?: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/page-margins
 *
 * The &lt;page-margins&gt; element specifies page margins in tenths either for
 * both even and odd pages, or via separate odd and even page number values.
 */
export interface PageMargins {
  type?: MarginTypeValue
  bottomMargin?: BottomMargin[]
  leftMargin?: LeftMargin[]
  rightMargin?: RightMargin[]
  topMargin?: TopMargin[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/page-width
 *
 * The &lt;page-width&gt; element specifies the page width in tenths.
 */
export interface PageWidth {
  v?: TenthsValue
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
  pageHeight?: PageHeight[]
  pageMargins?: PageMargins[]
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
  v?: MillimetersValue
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
  v?: TenthsValue
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
  millimeters?: Millimeters[]
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
  v?: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/staff-layout
 *
 * The &lt;staff-layout&gt; element includes the vertical distance from the bottom
 * line of the previous staff in this system to the top line of the staff specified
 * by the number attribute.
 */
export interface StaffLayout {
  number?: StaffNumberValue
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
  v?: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/left-divider
 *
 * The &lt;left-divider&gt; element indicates the presence or absence of a system
 * divider (also known as a system separation mark) displayed on the left side of
 * the page.
 */
export interface LeftDivider {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  halign?: LeftCenterRightValue
  printObject?: YesNoValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  valign?: ValignValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/right-divider
 *
 * The &lt;right-divider&gt; element indicates the presence or absence of a system
 * divider (also known as a system separation mark) displayed on the right side of
 * the page.
 */
export interface RightDivider {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  halign?: LeftCenterRightValue
  printObject?: YesNoValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  valign?: ValignValue
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
  leftDivider?: LeftDivider[]
  rightDivider?: RightDivider[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/system-margins
 *
 * System margins are relative to the page margins. Positive values indent and
 * negative values reduce the margin size.
 */
export interface SystemMargins {
  leftMargin?: LeftMargin[]
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
  v?: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/system-layout
 *
 * A system is a group of staves that are read and played simultaneously. The
 * &lt;system-layout&gt; element includes left and right margins and the vertical
 * distance from the previous system.
 */
export interface SystemLayout {
  systemDistance?: SystemDistance[]
  systemDividers?: SystemDividers[]
  systemMargins?: SystemMargins[]
  topSystemDistance?: TopSystemDistance[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/word-font
 *
 * The &lt;word-font&gt; element represents the default values for the word font in
 * the score.
 */
export interface WordFont {
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
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
  appearance?: Appearance[]
  concertScore?: ConcertScore[]
  lyricFont?: LyricFont[]
  lyricLanguage?: LyricLanguage[]
  musicFont?: MusicFont[]
  pageLayout?: PageLayout[]
  scaling?: Scaling[]
  staffLayout?: StaffLayout[]
  systemLayout?: SystemLayout[]
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
  type?: TokenValue
  v?: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/encoder
 *
 * The &lt;encoder&gt; element contains information about who did the digital
 * encoding.
 */
export interface Encoder {
  type?: TokenValue
  v?: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/encoding-date
 *
 * The &lt;encoding-date&gt; element specifies the date of the digital encoding.
 */
export interface EncodingDate {
  v?: YyyyMmDdValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/encoding-description
 *
 * The &lt;encoding-description&gt; element contains descriptive information about
 * the digital encoding that is not provided in the other &lt;encoding&gt; child
 * elements.
 */
export interface EncodingDescription {
  v?: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/software
 *
 * The &lt;software&gt; element specifies what software created the digital
 * encoding.
 */
export interface Software {
  v?: string
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
  element: NMTOKENValue
  type: YesNoValue
  attribute?: NMTOKENValue
  value?: TokenValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/encoding
 *
 * The &lt;encoding&gt; element contains information about who did the digital
 * encoding, when, with what software, and in what aspects.
 */
export interface Encoding {
  encoder?: Encoder[]
  encodingDate?: EncodingDate[]
  encodingDescription?: EncodingDescription[]
  software?: Software[]
  supports?: Supports[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/miscellaneous-field
 *
 * If a program has other metadata not yet supported in the MusicXML format, each
 * type of metadata can go in a &lt;miscellaneous-field&gt; element.
 */
export interface MiscellaneousField {
  name: TokenValue
  v?: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/miscellaneous
 *
 * If a program has other metadata not yet supported in the MusicXML format, it can
 * go in the &lt;miscellaneous&gt; element. The &lt;miscellaneous&gt; element puts
 * each separate part of metadata into its own &lt;miscellaneous-field&gt; element.
 */
export interface Miscellaneous {
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
  type?: TokenValue
  v?: string
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
  type?: TokenValue
  v?: string
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
  v?: string
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
  creator?: Creator[]
  encoding?: Encoding[]
  miscellaneous?: Miscellaneous[]
  relation?: Relation[]
  rights?: Rights[]
  source?: Source[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/movement-number
 *
 * The &lt;movement-number&gt; element specifies the number of a movement.
 */
export interface MovementNumber {
  v?: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/movement-title
 *
 * The &lt;movement-title&gt; element specifies the title of a movement, not
 * including its number.
 */
export interface MovementTitle {
  v?: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/clef-octave-change
 *
 * The &lt;clef-octave-change&gt; element is used for transposing clefs. A treble
 * clef for tenors would have a value of -1.
 */
export interface ClefOctaveChange {
  v?: number
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
  v?: StaffLinePositionValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/sign
 *
 * The &lt;sign&gt; element represents the clef symbol.
 */
export interface Sign {
  v?: ClefSignValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/clef
 *
 * Clefs are represented by a combination of &lt;sign&gt;, &lt;line&gt;, and
 * &lt;clef-octave-change&gt; elements.
 */
export interface Clef {
  additional?: YesNoValue
  afterBarline?: YesNoValue
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  id?: IDValue
  number?: StaffNumberValue
  printObject?: YesNoValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  size?: SymbolSizeValue
  clefOctaveChange?: ClefOctaveChange[]
  line?: Line[]
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  xmlLang?: XmlLangValue
  v?: string
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
  v?: PositiveDivisionsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/footnote
 *
 * The &lt;footnote&gt; element specifies editorial information that appears in
 * footnotes in the printed score.
 */
export interface Footnote {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  dir?: TextDirectionValue
  enclosure?: EnclosureShapeValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  halign?: LeftCenterRightValue
  justify?: LeftCenterRightValue
  letterSpacing?: NumberOrNormalValue
  lineHeight?: NumberOrNormalValue
  lineThrough?: NumberOfLinesValue
  overline?: NumberOfLinesValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  rotation?: RotationDegreesValue
  underline?: NumberOfLinesValue
  valign?: ValignValue
  xmlLang?: XmlLangValue
  xmlSpace?: XmlSpaceValue
  v?: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/part-clef
 *
 * The &lt;part-clef&gt; element is used for transpositions from concert scores
 * that also include a change of clef, as for instruments such as bass clarinet.
 */
export interface PartClef {
  clefOctaveChange?: ClefOctaveChange[]
  line?: Line[]
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
  v?: SemitonesValue
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
  v?: number
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/double
 *
 * If the &lt;double&gt; element is present, it indicates that the music is doubled
 * one octave from what is currently written.
 */
export interface Double {
  above?: YesNoValue
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
  v?: number
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/part-transpose
 *
 * The child elements of the &lt;part-transpose&gt; element have the same meaning
 * as for the &lt;transpose&gt; element. However that meaning applies to a
 * transposed part created from the existing score file.
 */
export interface PartTranspose {
  chromatic?: Chromatic[]
  diatonic?: Diatonic[]
  double?: Double[]
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
  id?: IDValue
  number?: StaffNumberValue
  partClef?: PartClef[]
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
  v?: NonNegativeIntegerValue
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
  location?: CancelLocationValue
  v?: FifthsValue
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
  v?: FifthsValue
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
  smufl?: SmuflAccidentalGlyphNameValue
  v?: AccidentalValueValue
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
  v?: SemitonesValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/key-octave
 *
 * The &lt;key-octave&gt; element specifies in which octave an element of a key
 * signature appears. The content specifies the octave value using the same values
 * as the &lt;display-octave&gt; element.
 */
export interface KeyOctave {
  number: PositiveIntegerValue
  cancel?: YesNoValue
  v?: OctaveValue
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
  v?: StepValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/mode
 *
 * The &lt;mode&gt; element is used to specify major/minor and other mode
 * distinctions. Valid mode values include major, minor, dorian, phrygian, lydian,
 * mixolydian, aeolian, ionian, locrian, and none.
 */
export interface Mode {
  v?: ModeValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/key
 *
 * The &lt;key&gt; element represents a key signature. Both traditional and
 * non-traditional key signatures are supported. Key signatures appear at the start
 * of each system unless the print-object attribute has been set to "no".
 */
export interface Key {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  id?: IDValue
  number?: StaffNumberValue
  printObject?: YesNoValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  cancel?: Cancel[]
  fifths?: Fifths[]
  keyAccidental?: KeyAccidental[]
  keyAlter?: KeyAlter[]
  keyOctave?: KeyOctave[]
  keyStep?: KeyStep[]
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
  bracket?: YesNoValue
  parentheses?: YesNoValue
  reference?: YesNoValue
  size?: SymbolSizeValue
  type?: StartStopSingleValue
  v?: string
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
  v?: string
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
  v?: NoteTypeValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/beat-repeat
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/beat-repeat.png">
 */
export interface BeatRepeat {
  type: StartStopValue
  slashes?: PositiveIntegerValue
  useDots?: YesNoValue
  exceptVoice?: ExceptVoice[]
  slashDot?: SlashDot[]
  slashType?: SlashType[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/measure-repeat
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/measure-repeat.png">
 */
export interface MeasureRepeat {
  type: StartStopValue
  slashes?: PositiveIntegerValue
  v?: PositiveIntegerOrEmptyValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/multiple-rest
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/multiple-rest.png">
 */
export interface MultipleRest {
  useSymbols?: YesNoValue
  v?: PositiveIntegerValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/slash
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/slash.png">
 */
export interface Slash {
  type: StartStopValue
  useDots?: YesNoValue
  useStems?: YesNoValue
  exceptVoice?: ExceptVoice[]
  slashDot?: SlashDot[]
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
  color?: ColorValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  id?: IDValue
  number?: StaffNumberValue
  beatRepeat?: BeatRepeat[]
  measureRepeat?: MeasureRepeat[]
  multipleRest?: MultipleRest[]
  slash?: Slash[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/part-symbol
 *
 * The &lt;part-symbol&gt; element indicates how a symbol for a multi-staff part is
 * indicated in the score; brace is the default value.
 */
export interface PartSymbol {
  bottomStaff?: StaffNumberValue
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  topStaff?: StaffNumberValue
  v?: GroupSymbolValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/capo
 *
 * The &lt;capo&gt; element indicates at which fret a capo should be placed on a
 * fretted instrument. This changes the open tuning of the strings specified by the
 * &lt;staff-tuning&gt; element by the specified number of half-steps.
 */
export interface Capo {
  v?: NonNegativeIntegerValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/line-detail
 *
 * If the &lt;staff-lines&gt; element is present, the appearance of each line may
 * be individually specified with a &lt;line-detail&gt; element.
 */
export interface LineDetail {
  line: StaffLineValue
  color?: ColorValue
  lineType?: LineTypeValue
  printObject?: YesNoValue
  width?: TenthsValue
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
  v?: NonNegativeIntegerValue
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
  scaling?: NonNegativeDecimalValue
  v?: NonNegativeDecimalValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tuning-alter
 *
 * The &lt;tuning-alter&gt; element is represented like the &lt;alter&gt; element,
 * with a different name to reflect its different function in string tuning.
 */
export interface TuningAlter {
  v?: SemitonesValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tuning-octave
 *
 * The &lt;tuning-octave&gt; element is represented like the &lt;octave&gt
 * element, with a different name to reflect its different function in string
 * tuning.
 */
export interface TuningOctave {
  v?: OctaveValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tuning-step
 *
 * The &lt;tuning-step&gt; element is represented like the &lt;step&gt; element,
 * with a different name to reflect its different function in string tuning.
 */
export interface TuningStep {
  v?: StepValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/staff-tuning
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/staff-tuning.png">
 */
export interface StaffTuning {
  line: StaffLineValue
  tuningAlter?: TuningAlter[]
  tuningOctave?: TuningOctave[]
  tuningStep?: TuningStep[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/staff-type
 *
 * The &lt;staff-type&gt; element specifies different uses for the staff, as listed
 * in the staff-type data type.
 */
export interface StaffType {
  v?: StaffTypeValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/staff-details
 *
 * The &lt;staff-details&gt; element is used to indicate different types of staves.
 */
export interface StaffDetails {
  number?: StaffNumberValue
  printObject?: YesNoValue
  printSpacing?: YesNoValue
  showFrets?: ShowFretsValue
  capo?: Capo[]
  lineDetail?: LineDetail[]
  staffLines?: StaffLines[]
  staffSize?: StaffSize[]
  staffTuning?: StaffTuning[]
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
  v?: NonNegativeIntegerValue
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
  v?: string
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
  v?: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/time-relation
 *
 * The &lt;time-relation&gt; element indicates the symbol used to represent the
 * interchangeable aspect of dual time signatures, as specified in the
 * time-relation type.
 */
export interface TimeRelation {
  v?: TimeRelationValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/interchangeable
 *
 * The &lt;interchangeable&gt; element is used to represent the second in a pair of
 * interchangeable dual time signatures, such as the 6/8 in 3/4 (6/8).
 */
export interface Interchangeable {
  separator?: TimeSeparatorValue
  symbol?: TimeSymbolValue
  beatType?: BeatType[]
  beats?: Beats[]
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
  v?: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/time
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/time.png">
 */
export interface Time {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  halign?: LeftCenterRightValue
  id?: IDValue
  number?: StaffNumberValue
  printObject?: YesNoValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  separator?: TimeSeparatorValue
  symbol?: TimeSymbolValue
  valign?: ValignValue
  beatType?: BeatType[]
  beats?: Beats[]
  interchangeable?: Interchangeable[]
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
  id?: IDValue
  number?: StaffNumberValue
  chromatic?: Chromatic[]
  diatonic?: Diatonic[]
  double?: Double[]
  octaveChange?: OctaveChange[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/attributes
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/attributes.png">
 */
export interface Attributes {
  clef?: Clef[]
  directive?: Directive[]
  divisions?: Divisions[]
  footnote?: Footnote[]
  forPart?: ForPart[]
  instruments?: Instruments[]
  key?: Key[]
  level?: Level[]
  measureStyle?: MeasureStyle[]
  partSymbol?: PartSymbol[]
  staffDetails?: StaffDetails[]
  staves?: Staves[]
  time?: Time[]
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
  v?: PositiveDivisionsValue
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
  duration?: Duration[]
  footnote?: Footnote[]
  level?: Level[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/bar-style
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/bar-style.png">
 */
export interface BarStyle {
  color?: ColorValue
  v?: BarStyleValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/coda
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/coda.png">
 */
export interface Coda {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  halign?: LeftCenterRightValue
  id?: IDValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  smufl?: SmuflCodaGlyphNameValue
  valign?: ValignValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/ending
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/ending.png">
 */
export interface Ending {
  number: EndingNumberValue
  type: StartStopDiscontinueValue
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  endLength?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  printObject?: YesNoValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  system?: SystemRelationValue
  textX?: TenthsValue
  textY?: TenthsValue
  v?: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/fermata
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/fermata.png">
 */
export interface Fermata {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  id?: IDValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  type?: UprightInvertedValue
  v?: FermataShapeValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/repeat
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/repeat.png">
 */
export interface Repeat {
  direction: BackwardForwardValue
  afterJump?: YesNoValue
  times?: NonNegativeIntegerValue
  winged?: WingedValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/segno
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/segno.png">
 */
export interface Segno {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  halign?: LeftCenterRightValue
  id?: IDValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  smufl?: SmuflSegnoGlyphNameValue
  valign?: ValignValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/wavy-line
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/wavy-line.png"><br>Wavy
 * lines are one way to indicate trills and vibrato.
 */
export interface WavyLine {
  type: StartStopContinueValue
  accelerate?: YesNoValue
  beats?: TrillBeatsValue
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  lastBeat?: PercentValue
  number?: NumberLevelValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  secondBeat?: PercentValue
  smufl?: SmuflWavyLineGlyphNameValue
  startNote?: StartNoteValue
  trillStep?: TrillStepValue
  twoNoteTurn?: TwoNoteTurnValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/barline
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/barline.png">
 */
export interface Barline {
  coda?: Coda[]
  divisions?: DivisionsValue
  id?: IDValue
  location?: RightLeftMiddleValue
  segno?: Segno[]
  barStyle?: BarStyle[]
  ending?: Ending[]
  fermata?: Fermata[]
  footnote?: Footnote[]
  level?: Level[]
  repeat?: Repeat[]
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
  v?: AccordionMiddleValue
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  halign?: LeftCenterRightValue
  id?: IDValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  valign?: ValignValue
  accordionHigh?: AccordionHigh[]
  accordionLow?: AccordionLow[]
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
  lineEnd: LineEndValue
  type: StartStopContinueValue
  color?: ColorValue
  dashLength?: TenthsValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  endLength?: TenthsValue
  id?: IDValue
  lineType?: LineTypeValue
  number?: NumberLevelValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  spaceLength?: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/damp
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/damp.png">
 */
export interface Damp {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  halign?: LeftCenterRightValue
  id?: IDValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  valign?: ValignValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/damp-all
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/damp-all.png">
 */
export interface DampAll {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  halign?: LeftCenterRightValue
  id?: IDValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  valign?: ValignValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/dashes
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/dashes.png">
 */
export interface Dashes {
  type: StartStopContinueValue
  color?: ColorValue
  dashLength?: TenthsValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  id?: IDValue
  number?: NumberLevelValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  spaceLength?: TenthsValue
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
  smufl?: SmuflGlyphNameValue
  v?: string
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  enclosure?: EnclosureShapeValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  halign?: LeftCenterRightValue
  id?: IDValue
  lineThrough?: NumberOfLinesValue
  overline?: NumberOfLinesValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  underline?: NumberOfLinesValue
  valign?: ValignValue
  f?: F[]
  ff?: Ff[]
  fff?: Fff[]
  ffff?: Ffff[]
  fffff?: Fffff[]
  ffffff?: Ffffff[]
  fp?: Fp[]
  fz?: Fz[]
  mf?: Mf[]
  mp?: Mp[]
  n?: N[]
  otherDynamics?: OtherDynamics[]
  p?: P[]
  pf?: Pf[]
  pp?: Pp[]
  ppp?: Ppp[]
  pppp?: Pppp[]
  ppppp?: Ppppp[]
  pppppp?: Pppppp[]
  rf?: Rf[]
  rfz?: Rfz[]
  sf?: Sf[]
  sffz?: Sffz[]
  sfp?: Sfp[]
  sfpp?: Sfpp[]
  sfz?: Sfz[]
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  halign?: LeftCenterRightValue
  id?: IDValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  valign?: ValignValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pedal-alter
 *
 * The &lt;pedal-alter&gt; element defines the chromatic alteration for a single
 * harp pedal.
 */
export interface PedalAlter {
  v?: SemitonesValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pedal-step
 *
 * The &lt;pedal-step&gt; element defines the pitch step for a single harp pedal.
 */
export interface PedalStep {
  v?: StepValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pedal-tuning
 *
 * The &lt;pedal-tuning&gt; element specifies the tuning of a single harp pedal.
 */
export interface PedalTuning {
  pedalAlter?: PedalAlter[]
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  halign?: LeftCenterRightValue
  id?: IDValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  valign?: ValignValue
  pedalTuning?: PedalTuning[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/image
 *
 * The &lt;image&gt; element is used to include graphical images in a score.
 */
export interface Image {
  source: AnyURIValue
  type: TokenValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  halign?: LeftCenterRightValue
  height?: TenthsValue
  id?: IDValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  valign?: ValignImageValue
  width?: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/beat-unit
 *
 * The &lt;beat-unit&gt; element indicates the graphical note type to use in a
 * metronome mark.
 */
export interface BeatUnit {
  v?: NoteTypeValueValue
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
  beatUnit?: BeatUnit[]
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
  number?: BeamLevelValue
  v?: BeamValueValue
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
  type: StartStopValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/actual-notes
 *
 * The &lt;actual-notes&gt; element describes how many notes are played in the time
 * usually occupied by the number in the &lt;normal-notes&gt; element.
 */
export interface ActualNotes {
  v?: NonNegativeIntegerValue
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
  v?: NonNegativeIntegerValue
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
  v?: NoteTypeValueValue
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
  type: StartStopValue
  bracket?: YesNoValue
  showNumber?: ShowTupletValue
  actualNotes?: ActualNotes[]
  normalDot?: NormalDot[]
  normalNotes?: NormalNotes[]
  normalType?: NormalType[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/metronome-type
 *
 * The &lt;metronome-type&gt; element works like the &lt;type&gt; element in
 * defining metric relationships.
 */
export interface MetronomeType {
  v?: NoteTypeValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/metronome-note
 *
 * The &lt;metronome-note&gt; element defines the appearance of a note within a
 * metric relationship mark.
 */
export interface MetronomeNote {
  metronomeBeam?: MetronomeBeam[]
  metronomeDot?: MetronomeDot[]
  metronomeTied?: MetronomeTied[]
  metronomeTuplet?: MetronomeTuplet[]
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
  v?: string
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
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  v?: string
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  halign?: LeftCenterRightValue
  id?: IDValue
  justify?: LeftCenterRightValue
  parentheses?: YesNoValue
  printObject?: YesNoValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  valign?: ValignValue
  beatUnit?: BeatUnit[]
  beatUnitDot?: BeatUnitDot[]
  beatUnitTied?: BeatUnitTied[]
  metronomeArrows?: MetronomeArrows[]
  metronomeNote?: MetronomeNote[]
  metronomeRelation?: MetronomeRelation[]
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
  type: UpDownStopContinueValue
  color?: ColorValue
  dashLength?: TenthsValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  id?: IDValue
  number?: NumberLevelValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  size?: PositiveIntegerValue
  spaceLength?: TenthsValue
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  halign?: LeftCenterRightValue
  id?: IDValue
  printObject?: YesNoValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  smufl?: SmuflGlyphNameValue
  valign?: ValignValue
  v?: string
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
  type: PedalTypeValue
  abbreviated?: YesNoValue
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  id?: IDValue
  line?: YesNoValue
  number?: NumberLevelValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  sign?: YesNoValue
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
  tip?: TipDirectionValue
  v?: BeaterValueValue
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
  smufl?: SmuflPictogramGlyphNameValue
  v?: EffectValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/glass
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/glass.png"><br>The
 * &lt;glass&gt; element represents pictograms for glass percussion instruments.
 */
export interface Glass {
  smufl?: SmuflPictogramGlyphNameValue
  v?: GlassValueValue
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
  smufl?: SmuflPictogramGlyphNameValue
  v?: MembraneValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/metal
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/metal.png"><br>The
 * &lt;metal&gt; element represents pictograms for metal percussion instruments.
 */
export interface Metal {
  smufl?: SmuflPictogramGlyphNameValue
  v?: MetalValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/other-percussion
 *
 * The &lt;other-percussion&gt; element represents percussion pictograms not
 * defined elsewhere.
 */
export interface OtherPercussion {
  smufl?: SmuflGlyphNameValue
  v?: string
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
  smufl?: SmuflPictogramGlyphNameValue
  v?: PitchedValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/stick-material
 *
 * The &lt;stick-material&gt; element represents the material being displayed in a
 * stick pictogram.
 */
export interface StickMaterial {
  v?: StickMaterialValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/stick-type
 *
 * The &lt;stick-type&gt; element represents the shape of pictograms where the
 * material in the stick, mallet, or beater is represented in the pictogram.
 */
export interface StickType {
  v?: StickTypeValue
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
  dashedCircle?: YesNoValue
  parentheses?: YesNoValue
  tip?: TipDirectionValue
  stickMaterial?: StickMaterial[]
  stickType?: StickType[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/stick-location
 *
 * The &lt;stick-location&gt; element represents pictograms for the location of
 * sticks, beaters, or mallets on cymbals, gongs, drums, and other instruments.
 */
export interface StickLocation {
  v?: StickLocationValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/timpani
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/timpani.png"><br>The
 * &lt;timpani&gt; element represents the timpani pictogram.
 */
export interface Timpani {
  smufl?: SmuflPictogramGlyphNameValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/wood
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/wood.png"><br>The
 * &lt;wood&gt; element represents pictograms for wood percussion instruments.
 */
export interface Wood {
  smufl?: SmuflPictogramGlyphNameValue
  v?: WoodValueValue
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  enclosure?: EnclosureShapeValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  halign?: LeftCenterRightValue
  id?: IDValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  valign?: ValignValue
  beater?: Beater[]
  effect?: Effect[]
  glass?: Glass[]
  membrane?: Membrane[]
  metal?: Metal[]
  otherPercussion?: OtherPercussion[]
  pitched?: Pitched[]
  stick?: Stick[]
  stickLocation?: StickLocation[]
  timpani?: Timpani[]
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
  symbol: PrincipalVoiceSymbolValue
  type: StartStopValue
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  halign?: LeftCenterRightValue
  id?: IDValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  valign?: ValignValue
  v?: string
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  dir?: TextDirectionValue
  enclosure?: EnclosureShapeValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  halign?: LeftCenterRightValue
  id?: IDValue
  justify?: LeftCenterRightValue
  letterSpacing?: NumberOrNormalValue
  lineHeight?: NumberOrNormalValue
  lineThrough?: NumberOfLinesValue
  overline?: NumberOfLinesValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  rotation?: RotationDegreesValue
  underline?: NumberOfLinesValue
  valign?: ValignValue
  xmlLang?: XmlLangValue
  xmlSpace?: XmlSpaceValue
  v?: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/accord
 *
 * The &lt;accord&gt; element represents the tuning of a single string in the
 * &lt;scordatura&gt; element. It uses the same group of elements as the
 * &lt;staff-tuning&gt; element.
 */
export interface Accord {
  string?: StringNumberValue
  tuningAlter?: TuningAlter[]
  tuningOctave?: TuningOctave[]
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
  id?: IDValue
  accord?: Accord[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/staff-divide
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/staff-divide.png">
 */
export interface StaffDivide {
  type: StaffDivideSymbolValue
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  halign?: LeftCenterRightValue
  id?: IDValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  valign?: ValignValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/string-mute
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/string-mute.png"><br>The
 * &lt;string-mute&gt; element represents string mute on and mute off symbols.
 */
export interface StringMute {
  type: OnOffValue
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  halign?: LeftCenterRightValue
  id?: IDValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  valign?: ValignValue
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  dir?: TextDirectionValue
  enclosure?: EnclosureShapeValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  halign?: LeftCenterRightValue
  id?: IDValue
  justify?: LeftCenterRightValue
  letterSpacing?: NumberOrNormalValue
  lineHeight?: NumberOrNormalValue
  lineThrough?: NumberOfLinesValue
  overline?: NumberOfLinesValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  rotation?: RotationDegreesValue
  underline?: NumberOfLinesValue
  valign?: ValignValue
  v?: SmuflGlyphNameValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/wedge
 *
 * The &lt;wedge&gt; element represents crescendo and diminuendo wedge symbols. The
 * line-type attribute is solid if not specified.
 */
export interface Wedge {
  type: WedgeTypeValue
  color?: ColorValue
  dashLength?: TenthsValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  id?: IDValue
  lineType?: LineTypeValue
  niente?: YesNoValue
  number?: NumberLevelValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  spaceLength?: TenthsValue
  spread?: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/words
 *
 * The &lt;words&gt; element specifies a standard text direction. The enclosure
 * attribute is none if not specified. Left justification is used if not specified.
 */
export interface Words {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  dir?: TextDirectionValue
  enclosure?: EnclosureShapeValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  halign?: LeftCenterRightValue
  id?: IDValue
  justify?: LeftCenterRightValue
  letterSpacing?: NumberOrNormalValue
  lineHeight?: NumberOrNormalValue
  lineThrough?: NumberOfLinesValue
  overline?: NumberOfLinesValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  rotation?: RotationDegreesValue
  underline?: NumberOfLinesValue
  valign?: ValignValue
  xmlLang?: XmlLangValue
  xmlSpace?: XmlSpaceValue
  v?: string
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
  id?: IDValue
  accordionRegistration?: AccordionRegistration[]
  bracket?: Bracket[]
  coda?: Coda[]
  damp?: Damp[]
  dampAll?: DampAll[]
  dashes?: Dashes[]
  dynamics?: Dynamics[]
  eyeglasses?: Eyeglasses[]
  harpPedals?: HarpPedals[]
  image?: Image[]
  metronome?: Metronome[]
  octaveShift?: OctaveShift[]
  otherDirection?: OtherDirection[]
  pedal?: Pedal[]
  percussion?: Percussion[]
  principalVoice?: PrincipalVoice[]
  rehearsal?: Rehearsal[]
  scordatura?: Scordatura[]
  segno?: Segno[]
  staffDivide?: StaffDivide[]
  stringMute?: StringMute[]
  symbolType?: SymbolType[]
  wedge?: Wedge[]
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
  sound?: YesNoValue
  v?: DivisionsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/other-listening
 *
 * The &lt;other-listening&gt; element represents other types of listening control
 * and interaction that change the state of the listening application from the
 * specified point in the performance onward.
 */
export interface OtherListening {
  type: TokenValue
  player?: IDREFValue
  timeOnly?: TimeOnlyValue
  v?: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/sync
 *
 * The &lt;sync&gt; element specifies the style that a score following application
 * should use the synchronize an accompaniment with a performer. If this element is
 * not included in a score, default synchronization depends on the application.
 */
export interface Sync {
  type: SyncTypeValue
  latency?: MillisecondsValue
  player?: IDREFValue
  timeOnly?: TimeOnlyValue
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
  offset?: Offset[]
  otherListening?: OtherListening[]
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
  v?: PositiveIntegerOrEmptyValue
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
  v?: string
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
  v?: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/virtual-name
 *
 * The &lt;virtual-name&gt; element indicates the library-specific name for the
 * virtual instrument.
 */
export interface VirtualName {
  v?: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/virtual-instrument
 *
 * The &lt;virtual-instrument&gt; element defines a specific virtual instrument
 * used for an &lt;instrument sound&gt;.
 */
export interface VirtualInstrument {
  virtualLibrary?: VirtualLibrary[]
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
  id: IDREFValue
  ensemble?: Ensemble[]
  instrumentSound?: InstrumentSound[]
  solo?: Solo[]
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
  id?: IDREFValue
  port?: Midi16Value
  v?: string
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
  v?: RotationDegreesValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/midi-bank
 *
 * The &lt;midi-bank&gt; element specifies a MIDI 1.0 bank number ranging from 1 to
 * 16,384.
 */
export interface MidiBank {
  v?: Midi16384Value
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/midi-channel
 *
 * The &lt;midi-channel&gt; element specifies a MIDI 1.0 channel numbers ranging
 * from 1 to 16.
 */
export interface MidiChannel {
  v?: Midi16Value
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/midi-name
 *
 * The &lt;midi-name&gt; element corresponds to a ProgramName meta-event within a
 * Standard MIDI File.
 */
export interface MidiName {
  v?: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/midi-program
 *
 * The &lt;midi-program&gt; element specifies a MIDI 1.0 program number ranging
 * from 1 to 128.
 */
export interface MidiProgram {
  v?: Midi128Value
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
  v?: Midi128Value
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
  v?: RotationDegreesValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/volume
 *
 * The &lt;volume&gt; element value is a percentage of the maximum ranging from 0
 * to 100, with decimal values allowed. This corresponds to a scaling value for the
 * MIDI 1.0 channel volume controller.
 */
export interface Volume {
  v?: PercentValue
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
  id: IDREFValue
  elevation?: Elevation[]
  midiBank?: MidiBank[]
  midiChannel?: MidiChannel[]
  midiName?: MidiName[]
  midiProgram?: MidiProgram[]
  midiUnpitched?: MidiUnpitched[]
  pan?: Pan[]
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
  v?: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/mute
 *
 * The &lt;mute&gt; element represents muting playback for different instruments,
 * including brass, winds, and strings.
 */
export interface Mute {
  v?: MuteValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/other-play
 *
 * The &lt;other-play&gt; element represents other types of playback not otherwise
 * specified within the &lt;play&gt; element.
 */
export interface OtherPlay {
  type: TokenValue
  v?: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/semi-pitched
 *
 * The &lt;semi-pitched&gt; element represents categories of indefinite pitch for
 * percussion instruments.
 */
export interface SemiPitched {
  v?: SemiPitchedValue
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
  id?: IDREFValue
  ipa?: Ipa[]
  mute?: Mute[]
  otherPlay?: OtherPlay[]
  semiPitched?: SemiPitched[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/first
 *
 * The &lt;first&gt; element is the part of the swing ratio that refers to the
 * first of two consecutive notes.
 */
export interface First {
  v?: PositiveIntegerValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/second
 *
 * The &lt;second&gt; element is the part of the swing ratio that refers to the
 * second of two consecutive notes.
 */
export interface Second {
  v?: PositiveIntegerValue
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
  v?: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/swing-type
 *
 * The  &lt;swing-type&gt; element specifies the note type, either eighth or 16th,
 * to which the &lt;first&gt; to &lt;second&gt; ratio is applied. The value is
 * eighth if this element is not present.
 */
export interface SwingType {
  v?: SwingTypeValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/swing
 *
 * The &lt;swing&gt; element specifies whether or not to use swing playback, where
 * consecutive on-beat / off-beat eighth or 16th notes are played with unequal
 * nominal durations.
 */
export interface Swing {
  first?: First[]
  second?: Second[]
  straight?: Straight[]
  swingStyle?: SwingStyle[]
  swingType?: SwingType[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/sound
 *
 * The &lt;sound&gt; element contains general playback parameters. They can stand
 * alone within a part/measure, or be a component element within a direction.
 */
export interface Sound {
  coda?: TokenValue
  dacapo?: YesNoValue
  dalsegno?: TokenValue
  damperPedal?: YesNoNumberValue
  divisions?: DivisionsValue
  dynamics?: NonNegativeDecimalValue
  elevation?: RotationDegreesValue
  fine?: TokenValue
  forwardRepeat?: YesNoValue
  id?: IDValue
  pan?: RotationDegreesValue
  pizzicato?: YesNoValue
  segno?: TokenValue
  softPedal?: YesNoNumberValue
  sostenutoPedal?: YesNoNumberValue
  tempo?: NonNegativeDecimalValue
  timeOnly?: TimeOnlyValue
  tocoda?: TokenValue
  instrumentChange?: InstrumentChange[]
  midiDevice?: MidiDevice[]
  midiInstrument?: MidiInstrument[]
  offset?: Offset[]
  play?: Play[]
  swing?: Swing[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/staff
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/staff.png">
 */
export interface Staff {
  v?: PositiveIntegerValue
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
  v?: string
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
  directive?: YesNoValue
  id?: IDValue
  placement?: AboveBelowValue
  system?: SystemRelationValue
  directionType?: DirectionType[]
  footnote?: Footnote[]
  level?: Level[]
  listening?: Listening[]
  offset?: Offset[]
  sound?: Sound[]
  staff?: Staff[]
  voice?: Voice[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/extend
 *
 * The &lt;extend&gt; element represents lyric word extension / melisma lines as
 * well as figured bass extensions.
 */
export interface Extend {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  type?: StartStopContinueValue
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  v?: string
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  v?: string
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  v?: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/figure
 *
 * The &lt;figure&gt; element represents a single figure within a
 * &lt;figured-bass&gt; element.
 */
export interface Figure {
  extend?: Extend[]
  figureNumber?: FigureNumber[]
  footnote?: Footnote[]
  level?: Level[]
  prefix?: Prefix[]
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  halign?: LeftCenterRightValue
  id?: IDValue
  parentheses?: YesNoValue
  placement?: AboveBelowValue
  printDot?: YesNoValue
  printLyric?: YesNoValue
  printObject?: YesNoValue
  printSpacing?: YesNoValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  valign?: ValignValue
  duration?: Duration[]
  figure?: Figure[]
  footnote?: Footnote[]
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
  duration?: Duration[]
  footnote?: Footnote[]
  level?: Level[]
  staff?: Staff[]
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
  type?: TokenValue
  v?: string
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
  type: StartStopSingleValue
  id?: IDValue
  memberOf?: TokenValue
  number?: TokenValue
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  location?: LeftRightValue
  printObject?: YesNoValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  v?: SemitonesValue
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  v?: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/bass-step
 *
 * The &lt;bass-step&gt; element represents the pitch step of the bass of the
 * current chord within the harmony element.
 */
export interface BassStep {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  text?: TokenValue
  v?: StepValue
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
  arrangement?: HarmonyArrangementValue
  bassAlter?: BassAlter[]
  bassSeparator?: BassSeparator[]
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  plusMinus?: YesNoValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  v?: SemitonesValue
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  text?: TokenValue
  v?: DegreeTypeValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/degree-value
 *
 * The content of the &lt;degree-value&gt; element is a number indicating the
 * degree of the chord (1 for the root, 3 for third, etc).
 */
export interface DegreeValue {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  symbol?: DegreeSymbolValueValue
  text?: TokenValue
  v?: PositiveIntegerValue
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
  printObject?: YesNoValue
  degreeAlter?: DegreeAlter[]
  degreeType?: DegreeType[]
  degreeValue?: DegreeValue[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/first-fret
 *
 * The &lt;first-fret&gt; element indicates which fret is shown in the top space of
 * the frame; it is fret 1 if the element is not present.
 */
export interface FirstFret {
  location?: LeftRightValue
  text?: TokenValue
  v?: PositiveIntegerValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/frame-frets
 *
 * The frame-frets element gives the overall size of the frame in horizontal spaces
 * (frets).
 */
export interface FrameFrets {
  v?: PositiveIntegerValue
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
  type: StartStopValue
  color?: ColorValue
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
  alternate?: YesNoValue
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  substitution?: YesNoValue
  v?: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/fret
 *
 * The &lt;fret&gt; element is used with tablature notation and chord diagrams.
 * Fret numbers start with 0 for an open string and 1 for the first fret.
 */
export interface Fret {
  color?: ColorValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  v?: NonNegativeIntegerValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/string
 *
 * The &lt;string&gt; element is used with tablature notation, regular notation
 * (where it is often circled), and chord diagrams. String numbers start with 1 for
 * the highest pitched full-length string.
 */
export interface StringType {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  v?: StringNumberValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/frame-note
 *
 * The frame-note type represents each note included in the frame. An open string
 * will have a fret value of 0, while a muted string will not be associated with a
 * frame-note element.
 */
export interface FrameNote {
  barre?: Barre[]
  fingering?: Fingering[]
  fret?: Fret[]
  stringType?: StringType[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/frame-strings
 *
 * The &lt;frame-strings&gt; element gives the overall size of the frame in
 * vertical lines (strings).
 */
export interface FrameStrings {
  v?: PositiveIntegerValue
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  halign?: LeftCenterRightValue
  height?: TenthsValue
  id?: IDValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  unplayed?: TokenValue
  valign?: ValignImageValue
  width?: TenthsValue
  firstFret?: FirstFret[]
  frameFrets?: FrameFrets[]
  frameNote?: FrameNote[]
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  v?: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/inversion
 *
 * The &lt;inversion&gt; element represents harmony inversions. The value is a
 * number indicating which inversion is used: 0 for root position, 1 for first
 * inversion, etc.
 */
export interface Inversion {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  text?: TokenValue
  v?: NonNegativeIntegerValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/kind
 *
 * The &lt;kind&gt; element indicates the type of chord. The &lt;degree&gt
 * elements can then add, subtract, or alter from these starting points
 */
export interface Kind {
  bracketDegrees?: YesNoValue
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  halign?: LeftCenterRightValue
  parenthesesDegrees?: YesNoValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  stackDegrees?: YesNoValue
  text?: TokenValue
  useSymbols?: YesNoValue
  valign?: ValignValue
  v?: KindValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/numeral-alter
 *
 * The &lt;numeral-alter&gt; element represents an alteration to the
 * &lt;numeral-root&gt;, similar to the &lt;alter&gt; element for a &lt;pitch&gt;.
 */
export interface NumeralAlter {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  location?: LeftRightValue
  printObject?: YesNoValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  v?: SemitonesValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/numeral-fifths
 *
 * The &lt;numeral-fifths&gt; element specifies the key in the same way as the
 * &lt;fifths&gt; element.
 */
export interface NumeralFifths {
  v?: FifthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/numeral-mode
 *
 * The &lt;numeral-mode&gt; specifies the scale that is used to interpret the
 * &lt;numeral-root&gt; element values.
 */
export interface NumeralMode {
  v?: NumeralModeValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/numeral-key
 *
 * The &lt;numeral-key&gt; element is used when the key for the numeral is
 * different than the key specified by the key signature.
 */
export interface NumeralKey {
  printObject?: YesNoValue
  numeralFifths?: NumeralFifths[]
  numeralMode?: NumeralMode[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/numeral-root
 *
 * The &lt;numeral-root&gt; element represents the Roman numeral or Nashville
 * number as a positive integer from 1 to 7.
 */
export interface NumeralRoot {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  text?: TokenValue
  v?: NumeralValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/numeral
 *
 * The &lt;numeral&gt; element represents the Roman numeral or Nashville number
 * part of a harmony. It requires that the key be specified in the encoding, either
 * with a &lt;key&gt; or &lt;numeral-key&gt; element.
 */
export interface Numeral {
  numeralAlter?: NumeralAlter[]
  numeralKey?: NumeralKey[]
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  location?: LeftRightValue
  printObject?: YesNoValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  v?: SemitonesValue
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  text?: TokenValue
  v?: StepValue
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
  rootAlter?: RootAlter[]
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
  arrangement?: HarmonyArrangementValue
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  id?: IDValue
  placement?: AboveBelowValue
  printFrame?: YesNoValue
  printObject?: YesNoValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  system?: SystemRelationValue
  type?: HarmonyTypeValue
  bass?: Bass[]
  degree?: Degree[]
  footnote?: Footnote[]
  frame?: Frame[]
  functionType?: FunctionType[]
  inversion?: Inversion[]
  kind?: Kind[]
  level?: Level[]
  numeral?: Numeral[]
  offset?: Offset[]
  root?: Root[]
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
  bracket?: YesNoValue
  cautionary?: YesNoValue
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  editorial?: YesNoValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  parentheses?: YesNoValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  size?: SymbolSizeValue
  smufl?: SmuflAccidentalGlyphNameValue
  v?: AccidentalValueValue
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
  color?: ColorValue
  fan?: FanValue
  id?: IDValue
  number?: BeamLevelValue
  repeater?: YesNoValue
  v?: BeamValueValue
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/grace
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/grace.png"><br>The
 * &lt;grace&gt; element indicates the presence of a grace note.
 */
export interface Grace {
  makeTime?: DivisionsValue
  slash?: YesNoValue
  stealTimeFollowing?: PercentValue
  stealTimePrevious?: PercentValue
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
  id: IDREFValue
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
  type: YesNoValue
  player?: IDREFValue
  timeOnly?: TimeOnlyValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/other-listen
 *
 * The &lt;other-listen&gt; element represents other types of listening control and
 * interaction that are specific to a note.
 */
export interface OtherListen {
  type: TokenValue
  player?: IDREFValue
  timeOnly?: TimeOnlyValue
  v?: string
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
  player?: IDREFValue
  timeOnly?: TimeOnlyValue
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
  assess?: Assess[]
  otherListen?: OtherListen[]
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
  color?: ColorValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  smufl?: SmuflLyricsGlyphNameValue
  v?: string
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
  v?: SyllabicValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/text
 *
 * The &lt;text&gt; element represents a syllable or portion of a syllable for
 * lyric text underlay. A hyphen in the element content should only be used for an
 * actual hyphenated word.
 */
export interface Text {
  color?: ColorValue
  dir?: TextDirectionValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  letterSpacing?: NumberOrNormalValue
  lineThrough?: NumberOfLinesValue
  overline?: NumberOfLinesValue
  rotation?: RotationDegreesValue
  underline?: NumberOfLinesValue
  xmlLang?: XmlLangValue
  v?: string
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  id?: IDValue
  justify?: LeftCenterRightValue
  name?: TokenValue
  number?: NMTOKENValue
  placement?: AboveBelowValue
  printObject?: YesNoValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  timeOnly?: TimeOnlyValue
  elision?: Elision[]
  endLine?: EndLine[]
  endParagraph?: EndParagraph[]
  extend?: Extend[]
  footnote?: Footnote[]
  humming?: Humming[]
  laughing?: Laughing[]
  level?: Level[]
  syllabic?: Syllabic[]
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
  bracket?: YesNoValue
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  id?: IDValue
  parentheses?: YesNoValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  size?: SymbolSizeValue
  smufl?: SmuflAccidentalGlyphNameValue
  v?: AccidentalValueValue
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  direction?: UpDownValue
  id?: IDValue
  number?: NumberLevelValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  unbroken?: YesNoValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/accent
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/accent.png"><br>The
 * &lt;accent&gt; element indicates a regular horizontal accent mark.
 */
export interface Accent {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/breath-mark
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/breath-mark.png"><br>The
 * &lt;breath-mark&gt; element indicates a place to take a breath.
 */
export interface BreathMark {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  v?: BreathMarkValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/caesura
 *
 * The &lt;caesura&gt; element indicates a slight pause. It is notated using a
 * "railroad tracks" symbol or other variations specified in the element content.
 */
export interface Caesura {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  v?: CaesuraValueValue
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
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
  color?: ColorValue
  dashLength?: TenthsValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  lineLength?: LineLengthValue
  lineShape?: LineShapeValue
  lineType?: LineTypeValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  spaceLength?: TenthsValue
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
  color?: ColorValue
  dashLength?: TenthsValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  lineLength?: LineLengthValue
  lineShape?: LineShapeValue
  lineType?: LineTypeValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  spaceLength?: TenthsValue
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  smufl?: SmuflGlyphNameValue
  v?: string
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
  color?: ColorValue
  dashLength?: TenthsValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  lineLength?: LineLengthValue
  lineShape?: LineShapeValue
  lineType?: LineTypeValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  spaceLength?: TenthsValue
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
  color?: ColorValue
  dashLength?: TenthsValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  lineLength?: LineLengthValue
  lineShape?: LineShapeValue
  lineType?: LineTypeValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  spaceLength?: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/soft-accent
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/soft-accent.png">
 */
export interface SoftAccent {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/stress
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/stress.png">
 */
export interface Stress {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/strong-accent
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/strong-accent.png">
 */
export interface StrongAccent {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  type?: UpDownValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tenuto
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/tenuto.png"><br>The
 * &lt;tenuto&gt; element indicates a tenuto line symbol.
 */
export interface Tenuto {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/unstress
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/unstress.png">
 */
export interface Unstress {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/articulations
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/articulations.png"><br>The
 * &lt;articulations&gt; element groups together articulations and accents.
 */
export interface Articulations {
  id?: IDValue
  accent?: Accent[]
  breathMark?: BreathMark[]
  caesura?: Caesura[]
  detachedLegato?: DetachedLegato[]
  doit?: Doit[]
  falloff?: Falloff[]
  otherArticulation?: OtherArticulation[]
  plop?: Plop[]
  scoop?: Scoop[]
  softAccent?: SoftAccent[]
  spiccato?: Spiccato[]
  staccatissimo?: Staccatissimo[]
  staccato?: Staccato[]
  stress?: Stress[]
  strongAccent?: StrongAccent[]
  tenuto?: Tenuto[]
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
  type: StartStopValue
  color?: ColorValue
  dashLength?: TenthsValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  id?: IDValue
  lineType?: LineTypeValue
  number?: NumberLevelValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  spaceLength?: TenthsValue
  v?: string
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
  type: TopBottomValue
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  id?: IDValue
  number?: NumberLevelValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/delayed-inverted-turn
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/delayed-inverted-turn.png">
 */
export interface DelayedInvertedTurn {
  accelerate?: YesNoValue
  beats?: TrillBeatsValue
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  lastBeat?: PercentValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  secondBeat?: PercentValue
  slash?: YesNoValue
  startNote?: StartNoteValue
  trillStep?: TrillStepValue
  twoNoteTurn?: TwoNoteTurnValue
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
  accelerate?: YesNoValue
  beats?: TrillBeatsValue
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  lastBeat?: PercentValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  secondBeat?: PercentValue
  slash?: YesNoValue
  startNote?: StartNoteValue
  trillStep?: TrillStepValue
  twoNoteTurn?: TwoNoteTurnValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/haydn
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/haydn.png">
 */
export interface Haydn {
  accelerate?: YesNoValue
  beats?: TrillBeatsValue
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  lastBeat?: PercentValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  secondBeat?: PercentValue
  startNote?: StartNoteValue
  trillStep?: TrillStepValue
  twoNoteTurn?: TwoNoteTurnValue
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
  accelerate?: YesNoValue
  approach?: AboveBelowValue
  beats?: TrillBeatsValue
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  departure?: AboveBelowValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  lastBeat?: PercentValue
  long?: YesNoValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  secondBeat?: PercentValue
  startNote?: StartNoteValue
  trillStep?: TrillStepValue
  twoNoteTurn?: TwoNoteTurnValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/inverted-turn
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/inverted-turn.png">
 */
export interface InvertedTurn {
  accelerate?: YesNoValue
  beats?: TrillBeatsValue
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  lastBeat?: PercentValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  secondBeat?: PercentValue
  slash?: YesNoValue
  startNote?: StartNoteValue
  trillStep?: TrillStepValue
  twoNoteTurn?: TwoNoteTurnValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/inverted-vertical-turn
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/inverted-vertical-turn.png">
 */
export interface InvertedVerticalTurn {
  accelerate?: YesNoValue
  beats?: TrillBeatsValue
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  lastBeat?: PercentValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  secondBeat?: PercentValue
  startNote?: StartNoteValue
  trillStep?: TrillStepValue
  twoNoteTurn?: TwoNoteTurnValue
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
  accelerate?: YesNoValue
  approach?: AboveBelowValue
  beats?: TrillBeatsValue
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  departure?: AboveBelowValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  lastBeat?: PercentValue
  long?: YesNoValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  secondBeat?: PercentValue
  startNote?: StartNoteValue
  trillStep?: TrillStepValue
  twoNoteTurn?: TwoNoteTurnValue
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  smufl?: SmuflGlyphNameValue
  v?: string
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/shake
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/shake.png">
 */
export interface Shake {
  accelerate?: YesNoValue
  beats?: TrillBeatsValue
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  lastBeat?: PercentValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  secondBeat?: PercentValue
  startNote?: StartNoteValue
  trillStep?: TrillStepValue
  twoNoteTurn?: TwoNoteTurnValue
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  smufl?: SmuflGlyphNameValue
  type?: TremoloTypeValue
  v?: TremoloMarksValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/trill-mark
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/trill-mark.png"><br>The
 * &lt;trill-mark&gt; element represents the trill symbol.
 */
export interface TrillMark {
  accelerate?: YesNoValue
  beats?: TrillBeatsValue
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  lastBeat?: PercentValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  secondBeat?: PercentValue
  startNote?: StartNoteValue
  trillStep?: TrillStepValue
  twoNoteTurn?: TwoNoteTurnValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/turn
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/turn.png">
 */
export interface Turn {
  accelerate?: YesNoValue
  beats?: TrillBeatsValue
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  lastBeat?: PercentValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  secondBeat?: PercentValue
  slash?: YesNoValue
  startNote?: StartNoteValue
  trillStep?: TrillStepValue
  twoNoteTurn?: TwoNoteTurnValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/vertical-turn
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/vertical-turn.png">
 */
export interface VerticalTurn {
  accelerate?: YesNoValue
  beats?: TrillBeatsValue
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  lastBeat?: PercentValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  secondBeat?: PercentValue
  startNote?: StartNoteValue
  trillStep?: TrillStepValue
  twoNoteTurn?: TwoNoteTurnValue
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
  id?: IDValue
  accidentalMark?: AccidentalMark[]
  delayedInvertedTurn?: DelayedInvertedTurn[]
  delayedTurn?: DelayedTurn[]
  haydn?: Haydn[]
  invertedMordent?: InvertedMordent[]
  invertedTurn?: InvertedTurn[]
  invertedVerticalTurn?: InvertedVerticalTurn[]
  mordent?: Mordent[]
  otherOrnament?: OtherOrnament[]
  schleifer?: Schleifer[]
  shake?: Shake[]
  tremolo?: Tremolo[]
  trillMark?: TrillMark[]
  turn?: Turn[]
  verticalTurn?: VerticalTurn[]
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
  type: StartStopSingleValue
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  id?: IDValue
  number?: NumberLevelValue
  placement?: AboveBelowValue
  printObject?: YesNoValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  smufl?: SmuflGlyphNameValue
  v?: string
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
  type: StartStopValue
  accelerate?: YesNoValue
  beats?: TrillBeatsValue
  color?: ColorValue
  dashLength?: TenthsValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  firstBeat?: PercentValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  id?: IDValue
  lastBeat?: PercentValue
  lineType?: LineTypeValue
  number?: NumberLevelValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  spaceLength?: TenthsValue
  v?: string
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
  type: StartStopContinueValue
  bezierOffset?: DivisionsValue
  bezierOffset2?: DivisionsValue
  bezierX?: TenthsValue
  bezierX2?: TenthsValue
  bezierY?: TenthsValue
  bezierY2?: TenthsValue
  color?: ColorValue
  dashLength?: TenthsValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  id?: IDValue
  lineType?: LineTypeValue
  number?: NumberLevelValue
  orientation?: OverUnderValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  spaceLength?: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/arrow-direction
 *
 * The &lt;arrow-direction&gt; element represents the direction in which an arrow
 * points, using Unicode arrow terminology.
 */
export interface ArrowDirection {
  v?: ArrowDirectionValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/arrow-style
 *
 * The &lt;arrow-style&gt; element represents the style of an arrow, using Unicode
 * arrow terminology.
 */
export interface ArrowStyle {
  v?: ArrowStyleValue
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
  v?: CircularArrowValue
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  smufl?: SmuflGlyphNameValue
  arrowDirection?: ArrowDirection[]
  arrowStyle?: ArrowStyle[]
  arrowhead?: Arrowhead[]
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
  v?: SemitonesValue
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
  offset?: DivisionsValue
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  v?: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/bend
 *
 * The &lt;bend&gt; element is used in guitar notation and tablature. A single note
 * with a bend and release will contain two &lt;bend&gt; elements: the first to
 * represent the bend and the second to represent the release.
 */
export interface Bend {
  accelerate?: YesNoValue
  beats?: TrillBeatsValue
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  firstBeat?: PercentValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  lastBeat?: PercentValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  shape?: BendShapeValue
  bendAlter?: BendAlter[]
  preBend?: PreBend[]
  release?: Release[]
  withBar?: WithBar[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/brass-bend
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/brass-bend.png">
 */
export interface BrassBend {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/double-tongue
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/double-tongue.png">
 */
export interface DoubleTongue {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/down-bow
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/down-bow.png">
 */
export interface DownBow {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/fingernails
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/fingernails.png">
 */
export interface Fingernails {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/flip
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/flip.png">
 */
export interface Flip {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/golpe
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/golpe.png">
 */
export interface Golpe {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/half-muted
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/half-muted.png">
 */
export interface HalfMuted {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  smufl?: SmuflGlyphNameValue
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
  type: StartStopValue
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  number?: NumberLevelValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  v?: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/handbell
 *
 * The &lt;handbell&gt; element represents notation for various techniques used in
 * handbell and handchime music.
 */
export interface Handbell {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  v?: HandbellValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/harmon-closed
 *
 * The &lt;harmon-closed&gt; element represents whether the harmon mute is closed,
 * open, or half-open.
 */
export interface HarmonClosed {
  location?: HarmonClosedLocationValue
  v?: HarmonClosedValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/harmon-mute
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/harmon-mute.png">
 */
export interface HarmonMute {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  printObject?: YesNoValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  artificial?: Artificial[]
  basePitch?: BasePitch[]
  natural?: Natural[]
  soundingPitch?: SoundingPitch[]
  touchingPitch?: TouchingPitch[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/heel
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/heel.png">
 */
export interface Heel {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  substitution?: YesNoValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/hole-closed
 *
 * The &lt;hole-closed&gt; element represents whether the hole is closed, open, or
 * half-open.
 */
export interface HoleClosed {
  location?: HoleClosedLocationValue
  v?: HoleClosedValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/hole-shape
 *
 * The &lt;hole-shape&gt; element indicates the shape of the hole symbol. It is a
 * circle if not specified.
 */
export interface HoleShape {
  v?: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/hole-type
 *
 * The content of the &lt;hole-type&gt; element indicates what the hole symbol
 * represents in terms of instrument fingering or other techniques.
 */
export interface HoleType {
  v?: string
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  holeClosed?: HoleClosed[]
  holeShape?: HoleShape[]
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  smufl?: SmuflGlyphNameValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/open-string
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/open-string.png">
 */
export interface OpenString {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  smufl?: SmuflGlyphNameValue
  v?: string
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  v?: string
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
  type: StartStopValue
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  number?: NumberLevelValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  v?: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/smear
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/smear.png">
 */
export interface Smear {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  smufl?: SmuflGlyphNameValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tap
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/tap.png"><br>The
 * &lt;tap&gt; element indicates a tap on the fretboard. The element content allows
 * specification of the notation; + and T are common choices.
 */
export interface Tap {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  hand?: TapHandValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  v?: string
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/toe
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/toe.png">
 */
export interface Toe {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  substitution?: YesNoValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/triple-tongue
 *
 * <img
 * src="https://www.w3.org/2021/06/musicxml40/static/elements/triple-tongue.png">
 */
export interface TripleTongue {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/up-bow
 *
 * <img src="https://www.w3.org/2021/06/musicxml40/static/elements/up-bow.png">
 */
export interface UpBow {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/technical
 *
 * The &lt;technical&gt; element groups together technical indications that give
 * performance information for specific instruments.
 */
export interface Technical {
  id?: IDValue
  arrow?: Arrow[]
  bend?: Bend[]
  brassBend?: BrassBend[]
  doubleTongue?: DoubleTongue[]
  downBow?: DownBow[]
  fingering?: Fingering[]
  fingernails?: Fingernails[]
  flip?: Flip[]
  fret?: Fret[]
  golpe?: Golpe[]
  halfMuted?: HalfMuted[]
  hammerOn?: HammerOn[]
  handbell?: Handbell[]
  harmonMute?: HarmonMute[]
  harmonic?: Harmonic[]
  heel?: Heel[]
  hole?: Hole[]
  open?: Open[]
  openString?: OpenString[]
  otherTechnical?: OtherTechnical[]
  pluck?: Pluck[]
  pullOff?: PullOff[]
  smear?: Smear[]
  snapPizzicato?: SnapPizzicato[]
  stopped?: Stopped[]
  stringType?: StringType[]
  tap?: Tap[]
  thumbPosition?: ThumbPosition[]
  toe?: Toe[]
  tripleTongue?: TripleTongue[]
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
  type: TiedTypeValue
  bezierOffset?: DivisionsValue
  bezierOffset2?: DivisionsValue
  bezierX?: TenthsValue
  bezierX2?: TenthsValue
  bezierY?: TenthsValue
  bezierY2?: TenthsValue
  color?: ColorValue
  dashLength?: TenthsValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  id?: IDValue
  lineType?: LineTypeValue
  number?: NumberLevelValue
  orientation?: OverUnderValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  spaceLength?: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tuplet-dot
 *
 * The &lt;tuplet-dot&gt; element is used to specify dotted tuplet types.
 */
export interface TupletDot {
  color?: ColorValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tuplet-number
 *
 * The &lt;tuplet-number&gt; element indicates the number of notes for this portion
 * of the tuplet.
 */
export interface TupletNumber {
  color?: ColorValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  v?: NonNegativeIntegerValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tuplet-type
 *
 * The &lt;tuplet-type&gt; element indicates the graphical note type of the notes
 * for this portion of the tuplet.
 */
export interface TupletType {
  color?: ColorValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  v?: NoteTypeValueValue
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
  tupletDot?: TupletDot[]
  tupletNumber?: TupletNumber[]
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
  tupletDot?: TupletDot[]
  tupletNumber?: TupletNumber[]
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
  type: StartStopValue
  bracket?: YesNoValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  id?: IDValue
  lineShape?: LineShapeValue
  number?: NumberLevelValue
  placement?: AboveBelowValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  showNumber?: ShowTupletValue
  showType?: ShowTupletValue
  tupletActual?: TupletActual[]
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
  id?: IDValue
  printObject?: YesNoValue
  accidentalMark?: AccidentalMark[]
  arpeggiate?: Arpeggiate[]
  articulations?: Articulations[]
  dynamics?: Dynamics[]
  fermata?: Fermata[]
  footnote?: Footnote[]
  glissando?: Glissando[]
  level?: Level[]
  nonArpeggiate?: NonArpeggiate[]
  ornaments?: Ornaments[]
  otherNotation?: OtherNotation[]
  slide?: Slide[]
  slur?: Slur[]
  technical?: Technical[]
  tied?: Tied[]
  tuplet?: Tuplet[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/notehead
 *
 * The &lt;notehead&gt; element indicates shapes other than the open and closed
 * ovals associated with note durations.
 */
export interface Notehead {
  color?: ColorValue
  filled?: YesNoValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  parentheses?: YesNoValue
  smufl?: SmuflGlyphNameValue
  v?: NoteheadValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/accidental-text
 *
 * The &lt;accidental-text&gt; element is used for exact formatting of accidentals
 * in display elements such as &lt;part-name-display&gt;. The enclosure attribute
 * is none if not specified.
 */
export interface AccidentalText {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  dir?: TextDirectionValue
  enclosure?: EnclosureShapeValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  halign?: LeftCenterRightValue
  justify?: LeftCenterRightValue
  letterSpacing?: NumberOrNormalValue
  lineHeight?: NumberOrNormalValue
  lineThrough?: NumberOfLinesValue
  overline?: NumberOfLinesValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  rotation?: RotationDegreesValue
  smufl?: SmuflAccidentalGlyphNameValue
  underline?: NumberOfLinesValue
  valign?: ValignValue
  xmlLang?: XmlLangValue
  xmlSpace?: XmlSpaceValue
  v?: AccidentalValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/display-text
 *
 * The &lt;display-text&gt; element is used for exact formatting of multi-font text
 * in element in display elements such as &lt;part-name-display&gt;. The enclosure
 * attribute is none if not specified.
 */
export interface DisplayText {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  dir?: TextDirectionValue
  enclosure?: EnclosureShapeValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  halign?: LeftCenterRightValue
  justify?: LeftCenterRightValue
  letterSpacing?: NumberOrNormalValue
  lineHeight?: NumberOrNormalValue
  lineThrough?: NumberOfLinesValue
  overline?: NumberOfLinesValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  rotation?: RotationDegreesValue
  underline?: NumberOfLinesValue
  valign?: ValignValue
  xmlLang?: XmlLangValue
  xmlSpace?: XmlSpaceValue
  v?: string
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
  accidentalText?: AccidentalText[]
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
  v?: SemitonesValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/octave
 *
 * Octaves are represented by the numbers 0 to 9, where 4 indicates the octave
 * started by middle C.
 */
export interface Octave {
  v?: OctaveValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/step
 *
 * The &lt;step&gt; element represents a step of the diatonic scale, represented
 * using the English letters A through G.
 */
export interface Step {
  v?: StepValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/pitch
 *
 * Pitch is represented as a combination of the step of the diatonic scale, the
 * chromatic alteration, and the octave.
 */
export interface Pitch {
  alter?: Alter[]
  octave?: Octave[]
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
  v?: OctaveValue
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
  v?: StepValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/rest
 *
 * The &lt;rest&gt; element indicates notated rests or silences. A &lt;rest&gt
 * element is usually empty, but placement on the staff can be specified using
 * &lt;display-step&gt; and &lt;display-octave&gt; elements.
 */
export interface Rest {
  measure?: YesNoValue
  displayOctave?: DisplayOctave[]
  displayStep?: DisplayStep[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/stem
 *
 * Values for the &lt;stem&gt; element can be down, up, none, or double. A
 * &lt;stem&gt; element associated with a &lt;rest&gt; refers to a stemlet.
 */
export interface Stem {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  v?: StemValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/tie
 *
 * The &lt;tie&gt; element indicates that a tie begins or ends with this note. The
 * &lt;tie&gt; element indicates sound; the &lt;tied&gt; element indicates
 * notation.
 */
export interface Tie {
  type: StartStopValue
  timeOnly?: TimeOnlyValue
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
  actualNotes?: ActualNotes[]
  normalDot?: NormalDot[]
  normalNotes?: NormalNotes[]
  normalType?: NormalType[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/type
 *
 * The &lt;type&gt; element indicates the graphic note type. Values range from
 * 1024th to maxima.
 */
export interface Type {
  size?: SymbolSizeValue
  v?: NoteTypeValueValue
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
  displayOctave?: DisplayOctave[]
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
  attack?: DivisionsValue
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  dynamics?: NonNegativeDecimalValue
  endDynamics?: NonNegativeDecimalValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  id?: IDValue
  pizzicato?: YesNoValue
  printDot?: YesNoValue
  printLeger?: YesNoValue
  printLyric?: YesNoValue
  printObject?: YesNoValue
  printSpacing?: YesNoValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  release?: DivisionsValue
  timeOnly?: TimeOnlyValue
  accidental?: Accidental[]
  beam?: Beam[]
  chord?: Chord[]
  cue?: Cue[]
  dot?: Dot[]
  duration?: Duration[]
  footnote?: Footnote[]
  grace?: Grace[]
  instrument?: Instrument[]
  level?: Level[]
  listen?: Listen[]
  lyric?: Lyric[]
  notations?: Notations[]
  notehead?: Notehead[]
  noteheadText?: NoteheadText[]
  pitch?: Pitch[]
  play?: Play[]
  rest?: Rest[]
  staff?: Staff[]
  stem?: Stem[]
  tie?: Tie[]
  timeModification?: TimeModification[]
  type?: Type[]
  unpitched?: Unpitched[]
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
  v?: TenthsValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/measure-layout
 *
 * The &lt;measure-layout&gt; element includes the horizontal distance from the
 * previous measure. It applies to the current measure only.
 */
export interface MeasureLayout {
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  halign?: LeftCenterRightValue
  multipleRestAlways?: YesNoValue
  multipleRestRange?: YesNoValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  staff?: StaffNumberValue
  system?: SystemRelationNumberValue
  valign?: ValignValue
  v?: MeasureNumberingValueValue
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
  printObject?: YesNoValue
  accidentalText?: AccidentalText[]
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
  printObject?: YesNoValue
  accidentalText?: AccidentalText[]
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
  blankPage?: PositiveIntegerValue
  id?: IDValue
  newPage?: YesNoValue
  newSystem?: YesNoValue
  pageNumber?: TokenValue
  staffSpacing?: TenthsValue
  measureLayout?: MeasureLayout[]
  measureNumbering?: MeasureNumbering[]
  pageLayout?: PageLayout[]
  partAbbreviationDisplay?: PartAbbreviationDisplay[]
  partNameDisplay?: PartNameDisplay[]
  staffLayout?: StaffLayout[]
  systemLayout?: SystemLayout[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/measure-partwise
 *
 * The &lt;measure&gt; element includes the basic musical data such as
 * &lt;note&gt;s within a &lt;score-partwise&gt; document.
 */
export interface Measure {
  number: TokenValue
  id?: IDValue
  implicit?: YesNoValue
  nonControlling?: YesNoValue
  text?: MeasureTextValue
  width?: TenthsValue
  attributes?: Attributes[]
  backup?: Backup[]
  barline?: Barline[]
  bookmark?: Bookmark[]
  direction?: Direction[]
  figuredBass?: FiguredBass[]
  forward?: Forward[]
  grouping?: Grouping[]
  harmony?: Harmony[]
  link?: Link[]
  listening?: Listening[]
  note?: Note[]
  print?: Print[]
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
  id: IDREFValue
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  justify?: LeftCenterRightValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  v?: string
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
  printObject?: YesNoValue
  accidentalText?: AccidentalText[]
  displayText?: DisplayText[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/group-barline
 *
 * The &lt;group-barline&gt; element indicates if the group should have common
 * barlines.
 */
export interface GroupBarline {
  color?: ColorValue
  v?: GroupBarlineValueValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/group-name
 *
 * The &lt;group-name&gt; element describes the name of a &lt;part-group&gt
 * element. The formatting attributes are deprecated as of Version 2.0 in favor of
 * the new &lt;group-name-display&gt; element.
 */
export interface GroupName {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  justify?: LeftCenterRightValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  v?: string
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
  printObject?: YesNoValue
  accidentalText?: AccidentalText[]
  displayText?: DisplayText[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/group-symbol
 *
 * The &lt;group-symbol&gt; element indicates how the symbol for a group is
 * indicated in the score. It is none if not specified.
 */
export interface GroupSymbol {
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  v?: GroupSymbolValueValue
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
  type: StartStopValue
  number?: TokenValue
  footnote?: Footnote[]
  groupAbbreviation?: GroupAbbreviation[]
  groupAbbreviationDisplay?: GroupAbbreviationDisplay[]
  groupBarline?: GroupBarline[]
  groupName?: GroupName[]
  groupNameDisplay?: GroupNameDisplay[]
  groupSymbol?: GroupSymbol[]
  groupTime?: GroupTime[]
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
  v?: string
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  justify?: LeftCenterRightValue
  printObject?: YesNoValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  v?: string
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
  v?: string
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
  id: IDREFValue
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
  xlinkHref: AnyURIValue
  xlinkActuate?: XlinkActuateValue
  xlinkRole?: TokenValue
  xlinkShow?: XlinkShowValue
  xlinkTitle?: TokenValue
  xlinkType?: XlinkTypeValue
  groupLink?: GroupLink[]
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
  color?: ColorValue
  defaultX?: TenthsValue
  defaultY?: TenthsValue
  fontFamily?: FontFamilyValue
  fontSize?: FontSizeValue
  fontStyle?: FontStyleValue
  fontWeight?: FontWeightValue
  justify?: LeftCenterRightValue
  printObject?: YesNoValue
  relativeX?: TenthsValue
  relativeY?: TenthsValue
  v?: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/player-name
 *
 * The &lt;player-name&gt; element is typically used within a software application,
 * rather than appearing on the printed page of a score.
 */
export interface PlayerName {
  v?: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/player
 *
 * The &lt;player&gt; element allows for multiple players per &lt;score-part&gt
 * for use in listening applications. One player may play multiple instruments,
 * while a single instrument may include multiple players in divisi sections.
 */
export interface Player {
  id: IDValue
  playerName?: PlayerName[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/instrument-abbreviation
 *
 * The &lt;instrument-abbreviation&gt; element is typically used within a software
 * application, rather than appearing on the printed page of a score.
 */
export interface InstrumentAbbreviation {
  v?: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/instrument-name
 *
 * The &lt;instrument-name&gt; element is typically used within a software
 * application, rather than appearing on the printed page of a score.
 */
export interface InstrumentName {
  v?: string
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
  id: IDValue
  ensemble?: Ensemble[]
  instrumentAbbreviation?: InstrumentAbbreviation[]
  instrumentName?: InstrumentName[]
  instrumentSound?: InstrumentSound[]
  solo?: Solo[]
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
  id: IDValue
  group?: Group[]
  identification?: Identification[]
  midiDevice?: MidiDevice[]
  midiInstrument?: MidiInstrument[]
  partAbbreviation?: PartAbbreviation[]
  partAbbreviationDisplay?: PartAbbreviationDisplay[]
  partLink?: PartLink[]
  partName?: PartName[]
  partNameDisplay?: PartNameDisplay[]
  player?: Player[]
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
  partGroup?: PartGroup[]
  scorePart?: ScorePart[]
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/opus-reference
 *
 * The &lt;opus&gt; element represents a link to a MusicXML opus document that
 * composes multiple MusicXML scores into a collection.
 */
export interface Opus {
  xlinkHref: AnyURIValue
  xlinkActuate?: XlinkActuateValue
  xlinkRole?: TokenValue
  xlinkShow?: XlinkShowValue
  xlinkTitle?: TokenValue
  xlinkType?: XlinkTypeValue
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/work-number
 *
 * The &lt;work-number&gt; element specifies the number of a work, such as its opus
 * number.
 */
export interface WorkNumber {
  v?: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/work-title
 *
 * The &lt;work-title&gt; element specifies the title of a work, not including its
 * opus or other work number.
 */
export interface WorkTitle {
  v?: string
}


/**
 * https://www.w3.org/2021/06/musicxml40/musicxml-reference/elements/work
 *
 * Works are optionally identified by number and title. The &lt;work&gt; element
 * also may indicate a link to the &lt;opus&gt; document that composes multiple
 * scores into a collection.
 */
export interface Work {
  opus?: Opus[]
  workNumber?: WorkNumber[]
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
  version?: TokenValue
  credit?: Credit[]
  defaults?: Defaults[]
  identification?: Identification[]
  movementNumber?: MovementNumber[]
  movementTitle?: MovementTitle[]
  part?: Part[]
  partList?: PartList[]
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
