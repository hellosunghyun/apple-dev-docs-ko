---
source_path: "documentation/AVFoundation/avassetreader/status-swiftproperty.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetreader/status-swiftproperty"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:status:0000:0001">status</span>

<span class="ko-segment" data-segment-id="seg:paragraph:status:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:status:0002:0001">에셋에서 샘플 버퍼를 읽는 상태입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:status:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:status:0004:0001">iOS 4.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:status:0004:0002">iPadOS 4.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:status:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:status:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:status:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:status:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var status: AVAssetReader.Status { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001"><a href="avassetreaderoutput.md">@@TOKEN_0@@</a>의 <a href="avassetreaderoutput/copynextsamplebuffer(">@@TOKEN_1@@</a>.md) 메서드가 <code>nil</code>을 반환할 때, 출력이 더 이상 데이터를 읽을 수 없는 이유를 확인하려면 이 속성의 값을 확인합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 속성은 스레드 안전합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">관련 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avassetreader/timerange.md">var timeRange: CMTimeRange</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">에셋에서 읽을 시간 범위입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avassetreader/status-swift.enum.md">AVAssetReader.Status</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">에셋 리더의 가능한 상태를 나타내는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avassetreader/error.md">var error: (any Error)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">실패 이유를 설명하는 오류입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetreader/status-swift.property">View on Apple Developer</a>*</span>
