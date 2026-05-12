---
source_path: "documentation/AVFoundation/avassetreader/status-swift.enum/failed.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetreader/status-swift.enum/failed"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avassetreaderstatusfailed:0000:0001">AVAssetReader.Status.failed</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetreaderstatusfailed:0001:0001">**Framework**: AVFoundation **Kind**: case</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetreaderstatusfailed:0002:0001">자산 리더는 오류로 인해 더 이상 자산에서 샘플을 읽을 수 없습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetreaderstatusfailed:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avassetreaderstatusfailed:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetreaderstatusfailed:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetreaderstatusfailed:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetreaderstatusfailed:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetreaderstatusfailed:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetreaderstatusfailed:0004:0006">visionOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
case failed
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">실패 원인을 확인하려면 에셋 리더의 <a href="avassetreader/error.md">@@TOKEN_0@@</a> 속성을 조회합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avassetreader/status-swift.enum/unknown.md">AVAssetReader.Status.unknown</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">에셋 리더의 상태가 알 수 없는 상태입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avassetreader/status-swift.enum/reading.md">AVAssetReader.Status.reading</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">에셋 리더가 에셋에서 샘플을 성공적으로 읽고 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avassetreader/status-swift.enum/completed.md">AVAssetReader.Status.completed</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">에셋 리더는 지정된 시간 범위 내에서 모든 샘플을 읽는 작업을 완료합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avassetreader/status-swift.enum/cancelled.md">AVAssetReader.Status.cancelled</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">읽기를 취소했기 때문에 에셋 리더가 더 이상 샘플을 읽을 수 없습니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetreader/status-swift.enum/failed">View on Apple Developer</a>*</span>
