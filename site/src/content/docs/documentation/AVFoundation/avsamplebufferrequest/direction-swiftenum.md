---
source_path: "documentation/AVFoundation/avsamplebufferrequest/direction-swiftenum.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avsamplebufferrequest/direction-swiftenum"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avsamplebufferrequestdirection:0000:0001">AVSampleBufferRequest.Direction</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avsamplebufferrequestdirection:0001:0001">**Framework**: AVFoundation **Kind**: enum</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avsamplebufferrequestdirection:0002:0001">버퍼 요청 방향을 설명하는 모드입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avsamplebufferrequestdirection:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avsamplebufferrequestdirection:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avsamplebufferrequestdirection:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avsamplebufferrequestdirection:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avsamplebufferrequestdirection:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avsamplebufferrequestdirection:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avsamplebufferrequestdirection:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avsamplebufferrequestdirection:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
enum Direction
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:buffer-direction:0008:0001">버퍼 방향</span>

- <span class="ko-segment" data-segment-id="seg:list:buffer-direction:0009:0001"><a href="avsamplebufferrequest/direction-swift.enum/forward.md">AVSampleBufferRequest.Direction.forward</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:buffer-direction:0010:0001">다음 샘플의 수는 0 이상일 수 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:buffer-direction:0011:0001"><a href="avsamplebufferrequest/direction-swift.enum/none.md">AVSampleBufferRequest.Direction.none</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:buffer-direction:0012:0001">단일 샘플이 로드됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:buffer-direction:0013:0001"><a href="avsamplebufferrequest/direction-swift.enum/reverse.md">AVSampleBufferRequest.Direction.reverse</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:buffer-direction:0014:0001">이전 샘플의 수는 0 이상일 수 있습니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0015:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0016:0001"><a href="avsamplebufferrequest/direction-swift.enum/init(rawvalue:">init?(rawValue: Int)</a>.md)</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0017:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0018:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0003"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0004"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0005"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0006"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0020:0001">참조</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avsamplebufferrequest/direction-swift.property.md">var direction: AVSampleBufferRequest.Direction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">버퍼 샘플 방향입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="avsamplebufferrequest/limitcursor.md">var limitCursor: AVSampleCursor?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">샘플 로드의 제한 위치입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="avsamplebufferrequest/maxsamplecount.md">var maxSampleCount: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">로드할 샘플의 최대 개수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="avsamplebufferrequest/mode-swift.property.md">var mode: AVSampleBufferRequest.Mode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">샘플 버퍼 요청 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="avsamplebufferrequest/mode-swift.enum.md">AVSampleBufferRequest.Mode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">샘플 버퍼 생성기가 요청을 처리하는 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="avsamplebufferrequest/overridetime.md">var overrideTime: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">샘플 버퍼의 샘플 데이터와 출력 PTS에 대한 기한입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="avsamplebufferrequest/preferredminsamplecount.md">var preferredMinSampleCount: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">로드할 샘플의 선호 최소 개수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="avsamplebufferrequest/startcursor.md">var startCursor: AVSampleCursor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">시작 커서 위치입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avsamplebufferrequest/direction-swift.enum">View on Apple Developer</a>*</span>
