---
source_path: "documentation/AVFoundation/avmovietrack.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmovietrack"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avmovietrack:0000:0001">AVMovieTrack</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmovietrack:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmovietrack:0002:0001">QuickTime 또는 ISO base media file format을 준수하는 movie의 트랙입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmovietrack:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avmovietrack:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmovietrack:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmovietrack:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmovietrack:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmovietrack:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmovietrack:0004:0006">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVMovieTrack
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:retrieving-track-information:0008:0001">트랙 정보 검색</span>

- <span class="ko-segment" data-segment-id="seg:list:retrieving-track-information:0009:0001"><a href="avmovietrack/alternategroupid.md">var alternateGroupID: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:retrieving-track-information:0010:0001">특정 대체 그룹의 구성원으로 트랙을 식별하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:retrieving-track-information:0011:0001"><a href="avmovietrack/mediadatastorage.md">var mediaDataStorage: AVMediaDataStorage?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:retrieving-track-information:0012:0001">트랙에 추가된 미디어 데이터의 저장 컨테이너입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:retrieving-track-information:0013:0001"><a href="avmovietrack/mediadecodetimerange.md">var mediaDecodeTimeRange: CMTimeRange</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:retrieving-track-information:0014:0001">트랙 미디어의 디코드 시간 범위입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:retrieving-track-information:0015:0001"><a href="avmovietrack/mediapresentationtimerange.md">var mediaPresentationTimeRange: CMTimeRange</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:retrieving-track-information:0016:0001">트랙 미디어의 표시 시간 범위입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0017:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0018:0001">상속 대상</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0019:0001"><a href="avassettrack.md">AVAssetTrack</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:inherited-by:0020:0001">상속받는 클래스</span>

- <span class="ko-segment" data-segment-id="seg:list:inherited-by:0021:0001"><a href="avfragmentedmovietrack.md">AVFragmentedMovieTrack</a></span>
- <span class="ko-segment" data-segment-id="seg:list:inherited-by:0021:0002"><a href="avmutablemovietrack.md">AVMutableMovieTrack</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0022:0001">준수 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0001"><a href="avasynchronouskeyvalueloading.md">AVAsynchronousKeyValueLoading</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0002"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0003"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0004"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0005"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0006"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0007"><a href="../Foundation/NSCopying.md">NSCopying</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0008"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0024:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="avmovie.md">class AVMovie</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">QuickTime movie file format 또는 MPEG-4와 같은 관련 형식을 준수하는 오디오/비디오 컨테이너를 나타내는 객체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmovietrack">View on Apple Developer</a>*</span>
