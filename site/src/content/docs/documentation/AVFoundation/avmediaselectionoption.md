---
source_path: "documentation/AVFoundation/avmediaselectionoption.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmediaselectionoption"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avmediaselectionoption:0000:0001">AVMediaSelectionOption</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmediaselectionoption:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmediaselectionoption:0002:0001">옵션 그룹 내에서 미디어 표시를 위한 특정 옵션을 나타내는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmediaselectionoption:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avmediaselectionoption:0004:0001">iOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmediaselectionoption:0004:0002">iPadOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmediaselectionoption:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmediaselectionoption:0004:0004">macOS 10.8+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmediaselectionoption:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmediaselectionoption:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmediaselectionoption:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVMediaSelectionOption
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="selecting-subtitles-and-alternative-audio-tracks.md">Selecting subtitles and alternative audio tracks</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:accessing-media-information:0010:0001">미디어 정보 접근</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-media-information:0011:0001"><a href="avmediaselectionoption/mediatype.md">var mediaType: AVMediaType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-media-information:0012:0001">미디어 데이터의 미디어 타입입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-media-information:0013:0001">[var mediaSubTypes: [NSNumber]](avmediaselectionoption/mediasubtypes.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-media-information:0014:0001">해당 옵션과 연결된 미디어 데이터의 미디어 하위 타입입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-media-information:0015:0001"><a href="avmediaselectionoption/hasmediacharacteristic(_:">func hasMediaCharacteristic(AVMediaCharacteristic) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-media-information:0016:0001">수신기가 지정된 미디어 특성을 가진 미디어를 보유하는지 여부를 나타내는 Boolean 값입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:managing-metadata:0017:0001">메타데이터 관리</span>

- <span class="ko-segment" data-segment-id="seg:list:managing-metadata:0018:0001">[var commonMetadata: [AVMetadataItem]](avmediaselectionoption/commonmetadata.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:managing-metadata:0019:0001">값을 사용할 수 있는 각 공통 메타데이터 키에 대한 메타데이터 항목 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:managing-metadata:0020:0001">[var availableMetadataFormats: [String]](avmediaselectionoption/availablemetadataformats.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:managing-metadata:0021:0001">옵션과 연결된 메타데이터를 포함하는 메타데이터 형식입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:managing-metadata:0022:0001">[func metadata(forFormat: String) -&gt; [AVMetadataItem]](avmediaselectionoption/metadata(forformat:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:managing-metadata:0023:0001">지정한 형식의 컨테이너에 있는 각 메타데이터 항목에 대해 하나씩, 메타데이터 항목 배열을 반환합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:determining-playability:0024:0001">재생 가능성 판별</span>

- <span class="ko-segment" data-segment-id="seg:list:determining-playability:0025:0001"><a href="avmediaselectionoption/isplayable.md">var isPlayable: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:determining-playability:0026:0001">미디어 선택 옵션이 재생 가능한지 여부를 나타내는 Boolean 값입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:getting-the-language-and-locale-settings:0027:0001">언어 및 로케일 설정 가져오기</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-the-language-and-locale-settings:0028:0001"><a href="avmediaselectionoption/displayname.md">var displayName: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-the-language-and-locale-settings:0029:0001">현재 시스템 로케일을 사용해 표시할 수 있는 문자열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-the-language-and-locale-settings:0030:0001"><a href="avmediaselectionoption/displayname(with:">func displayName(with: Locale) -&gt; String</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-the-language-and-locale-settings:0031:0001">지정된 로케일을 사용해 표시할 수 있는 문자열을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-the-language-and-locale-settings:0032:0001"><a href="avmediaselectionoption/locale.md">var locale: Locale?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-the-language-and-locale-settings:0033:0001">미디어 선택 옵션이 작성된 로케일입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-the-language-and-locale-settings:0034:0001"><a href="avmediaselectionoption/extendedlanguagetag.md">var extendedLanguageTag: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-the-language-and-locale-settings:0035:0001">옵션과 연결된 IETF BCP 47 언어 태그입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:getting-the-associated-media-selection-option:0036:0001">연결된 미디어 선택 옵션 가져오기</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-the-associated-media-selection-option:0037:0001"><a href="avmediaselectionoption/associatedmediaselectionoption(in:">func associatedMediaSelectionOption(in: AVMediaSelectionGroup) -&gt; AVMediaSelectionOption?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-the-associated-media-selection-option:0038:0001">지정된 그룹에서 현재 객체와 연결된 미디어 선택 옵션을 반환합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-a-now-playing-language-option:0039:0001">Now Playing 언어 옵션 생성</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-now-playing-language-option:0040:0001"><a href="avmediaselectionoption/makenowplayinginfolanguageoption.md">func makeNowPlayingInfoLanguageOption() -&gt; MPNowPlayingInfoLanguageOption?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-now-playing-language-option:0041:0001">미디어 선택 옵션에 대한 언어 옵션을 생성합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-a-property-list-representation:0042:0001">속성 목록 표현 생성</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-property-list-representation:0043:0001"><a href="avmediaselectionoption/propertylist.md">func propertyList() -&gt; Any</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-property-list-representation:0044:0001">옵션을 해당 그룹 내에서 식별하기에 충분한 직렬화 가능한 속성 목록을 반환합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0045:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0046:0001">상속 대상</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0047:0001"><a href="../ObjectiveC/NSObject-swift.class.md">NSObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0048:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0049:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0049:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0049:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0049:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0049:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0049:0006"><a href="../Foundation/NSCopying.md">NSCopying</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0049:0007"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0050:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0051:0001"><a href="selecting-subtitles-and-alternative-audio-tracks.md">Selecting subtitles and alternative audio tracks</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0052:0001">사용자의 기본 언어로 자막과 대체 오디오 트랙을 추가하여 앱의 매력을 높일 수 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0053:0001"><a href="avmediaselection.md">class AVMediaSelection</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0054:0001">에셋의 미디어 선택 옵션 전체 렌더링을 나타내는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0055:0001"><a href="avmediaselectiongroup.md">class AVMediaSelectionGroup</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0056:0001">에셋 내 미디어 표시를 위해 상호 배타적인 옵션의 모음을 나타내는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0057:0001"><a href="avmutablemediaselection.md">class AVMutableMediaSelection</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0058:0001">에셋의 미디어 선택 옵션 전체를 나타내는 변경 가능한 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0059:0001"><a href="avplayermediaselectioncriteria.md">class AVPlayerMediaSelectionCriteria</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0060:0001">플레이어의 선호 언어와 미디어 특성을 지정하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0061:0001"><a href="avcustommediaselectionscheme.md">class AVCustomMediaSelectionScheme</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0062:0001">AVMediaSelectionOptions에 대한 대체 선택 인터페이스를 제공할 목적으로 작성된 콘텐츠의 경우, AVCustomMediaSelectionScheme는 미디어 표시를 제어하기 위한 사용자 지정 설정의 모음을 제공합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0063:0001"><a href="avmediapresentationselector.md">class AVMediaPresentationSelector</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0064:0001">AVMediaSelectionOptions에 대한 대체 선택 인터페이스를 제공할 목적으로 작성된 콘텐츠의 경우, AVMediaPresentationSelector는 미디어 표시를 제어하는 상호 배타적 설정의 모음을 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0065:0001"><a href="avmediapresentationsetting.md">class AVMediaPresentationSetting</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0066:0001">AVMediaSelectionOptions에 대한 대체 선택 인터페이스를 제공할 목적으로 작성된 콘텐츠의 경우, AVMediaPresentationSetting은 미디어 표시를 제어하는 선택 가능한 설정을 나타냅니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0068:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmediaselectionoption">View on Apple Developer</a>*</span>
