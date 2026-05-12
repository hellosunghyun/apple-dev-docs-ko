---
source_path: "documentation/AVFoundation/avmovietrack/mediadatastorage.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmovietrack/mediadatastorage"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:mediadatastorage:0000:0001">mediaDataStorage</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mediadatastorage:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mediadatastorage:0002:0001">트랙에 추가된 미디어 데이터의 저장 컨테이너입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mediadatastorage:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:mediadatastorage:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediadatastorage:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediadatastorage:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediadatastorage:0004:0004">macOS 10.11+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediadatastorage:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediadatastorage:0004:0006">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
@NSCopying
var mediaDataStorage: AVMediaDataStorage? { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성의 값은 시스템이 데이터를 삽입하거나 추가할 때 미디어 데이터를 기록하는 위치를 나타내는 <a href="avmediadatastorage.md">@@TOKEN_0@@</a> 객체입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참조</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avmovietrack/alternategroupid.md">var alternateGroupID: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">특정 대체 그룹의 구성원으로 트랙을 식별하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmovietrack/mediadecodetimerange.md">var mediaDecodeTimeRange: CMTimeRange</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">트랙 미디어의 디코드 시간 범위입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avmovietrack/mediapresentationtimerange.md">var mediaPresentationTimeRange: CMTimeRange</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">트랙 미디어의 프레젠테이션 시간 범위입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmovietrack/mediadatastorage">View on Apple Developer</a>*</span>
