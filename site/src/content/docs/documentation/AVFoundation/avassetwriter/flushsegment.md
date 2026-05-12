---
source_path: "documentation/AVFoundation/avassetwriter/flushsegment.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetwriter/flushsegment"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:flushsegment:0000:0001">flushSegment()</span>

<span class="ko-segment" data-segment-id="seg:paragraph:flushsegment:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:flushsegment:0002:0001">현재 세그먼트를 닫고 이를 delegate 메서드로 출력합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:flushsegment:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:flushsegment:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:flushsegment:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:flushsegment:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:flushsegment:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:flushsegment:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:flushsegment:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func flushSegment()
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 메서드는 <a href="avassetwriter/preferredoutputsegmentinterval.md">@@TOKEN_0@@</a> 속성 값이 <a href="https://developer.apple.com/documentation/CoreMedia/CMTime/indefinite">@@TOKEN_1@@</a>일 때만 호출합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avassetwriter/delegate.md">var delegate: (any AVAssetWriterDelegate)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">자산 쓰기 이벤트에 반응하는 delegate 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avassetwriterdelegate.md">protocol AVAssetWriterDelegate</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">자산 쓰기 이벤트에 대응하기 위해 구현해야 하는 메서드를 정의하는 delegate protocol입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avassetwriter/preferredoutputsegmentinterval.md">var preferredOutputSegmentInterval: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">원하는 출력 세그먼트의 간격입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avassetwriter/initialsegmentstarttime.md">var initialSegmentStartTime: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">초기 세그먼트의 시작 시각입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avassetwriter/outputfiletypeprofile.md">var outputFileTypeProfile: AVFileTypeProfile?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">출력 파일 형식의 프로필입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetwriter/flushsegment(">Apple Developer에서 보기</a>)*</span>
