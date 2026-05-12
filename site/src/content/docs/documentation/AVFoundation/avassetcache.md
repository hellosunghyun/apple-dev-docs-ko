---
source_path: "documentation/AVFoundation/avassetcache.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetcache"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avassetcache:0000:0001">AVAssetCache</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetcache:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetcache:0002:0001">로컬로 캐시된 미디어 데이터를 검사하는 데 사용하는 개체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetcache:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avassetcache:0004:0001">iOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetcache:0004:0002">iPadOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetcache:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetcache:0004:0004">macOS 10.12+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetcache:0004:0005">tvOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetcache:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetcache:0004:0007">watchOS 10.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVAssetCache
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001"><a href="avassetdownloadurlsession.md">@@TOKEN_0@@</a> 클래스와 <a href="avassetdownloadtask.md">@@TOKEN_1@@</a> 클래스를 사용해 iOS 기기에서 HTTP Live Streaming 자산을 다운로드할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:inspecting-the-cached-media:0010:0001">캐시된 미디어 검사</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-the-cached-media:0011:0001"><a href="avassetcache/isplayableoffline.md">var isPlayableOffline: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-the-cached-media:0012:0001">인터넷 연결 없이 자산을 재생할 수 있는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-the-cached-media:0013:0001">[func mediaSelectionOptions(in: AVMediaSelectionGroup) -&gt; [AVMediaSelectionOption]](avassetcache/mediaselectionoptions(in:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-the-cached-media:0014:0001">오프라인에서 사용할 수 있는 로컬 캐시 미디어 선택 옵션 배열을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-the-cached-media:0015:0001">[func mediaPresentationLanguages(for: AVMediaSelectionGroup) -&gt; [String]](avassetcache/mediapresentationlanguages(for:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-the-cached-media:0016:0001">AVMediaSelectionGroup의 AVCustomMediaSelectionScheme 사용을 통해 오프라인 작업에서 선택할 수 있는 언어의 확장 언어 태그 배열을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-the-cached-media:0017:0001">[func mediaPresentationSettings(for: AVMediaSelectionGroup) -&gt; [AVMediaPresentationSelector : [AVMediaPresentationSetting]]](avassetcache/mediapresentationsettings(for:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-the-cached-media:0018:0001">AVMediaSelectionGroup의 AVCustomMediaSelectionScheme에서 정의된 각 AVMediaPresentationSelector에 대해, 오프라인 작업(예: 재생)에서 충족할 수 있는 AVMediaPresentationSettings를 반환합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0019:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0020:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0021:0001"><a href="../ObjectiveC/NSObject-swift.class.md">NSObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0022:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0006"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0007"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0008"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:conforms-to:0025:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetcache">View on Apple Developer</a>*</span>
