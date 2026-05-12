---
source_path: "documentation/AVFoundation/avmutablecompositiontrack.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmutablecompositiontrack"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avmutablecompositiontrack:0000:0001">AVMutableCompositionTrack</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmutablecompositiontrack:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmutablecompositiontrack:0002:0001">저수준 표현에 영향을 주지 않으면서 트랙 세그먼트를 삽입, 제거 및 스케일링할 수 있는 구성의 가변 트랙입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmutablecompositiontrack:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avmutablecompositiontrack:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmutablecompositiontrack:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmutablecompositiontrack:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmutablecompositiontrack:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmutablecompositiontrack:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmutablecompositiontrack:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmutablecompositiontrack:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVMutableCompositionTrack
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">이 객체를 사용해 트랙 세그먼트의 시간적 배열에 대한 제약 조건을 정의합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">구성의 트랙 세그먼트를 설정한 경우, <a href="avmutablecompositiontrack/validatesegments(_:">@@TOKEN_0@@</a>.md) 메서드를 호출하여 제약 조건 충족 여부를 테스트할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:configuring-track-properties:0010:0001">트랙 속성 구성</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-track-properties:0011:0001"><a href="avmutablecompositiontrack/isenabled.md">var isEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-track-properties:0012:0001">트랙이 활성화 상태인지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-track-properties:0013:0001"><a href="avmutablecompositiontrack/naturaltimescale.md">var naturalTimeScale: CMTimeScale</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-track-properties:0014:0001">추가 수치 변환 없이 시간 기반 작업을 수행할 수 있는 시간 스케일입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-track-properties:0015:0001"><a href="avmutablecompositiontrack/languagecode.md">var languageCode: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-track-properties:0016:0001">트랙과 연관된 언어를 ISO 639-2/T 언어 코드로 표시한 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-track-properties:0017:0001"><a href="avmutablecompositiontrack/extendedlanguagetag.md">var extendedLanguageTag: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-track-properties:0018:0001">트랙과 연관된 언어 태그이며 RFC 4646 언어 태그 형식입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-track-properties:0019:0001"><a href="avmutablecompositiontrack/preferredtransform.md">var preferredTransform: CGAffineTransform</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-track-properties:0020:0001">표시 목적으로 시각적 미디어 데이터에 대해 선호되는 변환입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-track-properties:0021:0001"><a href="avmutablecompositiontrack/preferredvolume.md">var preferredVolume: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-track-properties:0022:0001">트랙이 자신의 가청 미디어 데이터에 대해 선호하는 볼륨입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:managing-time-ranges:0023:0001">시간 범위 관리</span>

- <span class="ko-segment" data-segment-id="seg:list:managing-time-ranges:0024:0001">[var segments: [AVCompositionTrackSegment]!](avmutablecompositiontrack/segments.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:managing-time-ranges:0025:0001">구성 트랙이 포함하는 트랙 세그먼트입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:managing-time-ranges:0026:0001"><a href="avmutablecompositiontrack/insertemptytimerange(_:">func insertEmptyTimeRange(CMTimeRange)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:managing-time-ranges:0027:0001">트랙 내에서 빈 시간 범위를 추가하거나 연장합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:managing-time-ranges:0028:0001"><a href="avmutablecompositiontrack/inserttimerange(_:of:at:">func insertTimeRange(CMTimeRange, of: AVAssetTrack, at: CMTime) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:managing-time-ranges:0029:0001">원본 트랙에서 미디어의 시간 범위를 구성 트랙에 삽입합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:managing-time-ranges:0030:0001">[func insertTimeRanges([NSValue], of: [AVAssetTrack], at: CMTime) throws](avmutablecompositiontrack/inserttimeranges(_:of:at:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:managing-time-ranges:0031:0001">여러 원본 트랙의 시간 범위를 구성 트랙의 트랙에 삽입합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:managing-time-ranges:0032:0001"><a href="avmutablecompositiontrack/removetimerange(_:">func removeTimeRange(CMTimeRange)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:managing-time-ranges:0033:0001">구성 트랙에서 미디어의 시간 범위를 제거합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:managing-time-ranges:0034:0001"><a href="avmutablecompositiontrack/scaletimerange(_:toduration:">func scaleTimeRange(CMTimeRange, toDuration: CMTime)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:managing-time-ranges:0035:0001">Changes the duration of a time range of the track.</span>

### <span class="ko-segment" data-segment-id="seg:heading:associating-tracks:0036:0001">Associating tracks</span>

- <span class="ko-segment" data-segment-id="seg:list:associating-tracks:0037:0001"><a href="avmutablecompositiontrack/addtrackassociation(to:type:">func addTrackAssociation(to: AVCompositionTrack, type: AVAssetTrack.AssociationType)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:associating-tracks:0038:0001">Establishes a track association of a specific type between two tracks.</span>

- <span class="ko-segment" data-segment-id="seg:list:associating-tracks:0039:0001"><a href="avmutablecompositiontrack/removetrackassociation(to:type:">func removeTrackAssociation(to: AVCompositionTrack, type: AVAssetTrack.AssociationType)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:associating-tracks:0040:0001">Removes an association from a composition track.</span>

### <span class="ko-segment" data-segment-id="seg:heading:replacing-format-descriptions:0041:0001">Replacing format descriptions</span>

- <span class="ko-segment" data-segment-id="seg:list:replacing-format-descriptions:0042:0001"><a href="avmutablecompositiontrack/replaceformatdescription(_:with:">func replaceFormatDescription(CMFormatDescription, with: CMFormatDescription?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:replacing-format-descriptions:0043:0001">Replaces a format description with another or cancels a previous replacement.</span>

### <span class="ko-segment" data-segment-id="seg:heading:validating-segments:0044:0001">Validating segments</span>

- <span class="ko-segment" data-segment-id="seg:list:validating-segments:0045:0001">[func validateSegments([AVCompositionTrackSegment]) throws](avmutablecompositiontrack/validatesegments(_:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:validating-segments:0046:0001">Returns a Boolean value that indicates whether a given array of track segments conform to the timing rules for a composition track.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0047:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0048:0001">Inherits From</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0049:0001"><a href="avcompositiontrack.md">AVCompositionTrack</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0050:0001">Conforms To</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0051:0001"><a href="avasynchronouskeyvalueloading.md">AVAsynchronousKeyValueLoading</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0051:0002"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0051:0003"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0051:0004"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0051:0005"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0051:0006"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0051:0007"><a href="../Foundation/NSCopying.md">NSCopying</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0051:0008"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0052:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0053:0001"><a href="avmutablecomposition.md">class AVMutableComposition</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0054:0001">An object that you use to create a new composition from existing assets.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0056:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmutablecompositiontrack">View on Apple Developer</a>*</span>
