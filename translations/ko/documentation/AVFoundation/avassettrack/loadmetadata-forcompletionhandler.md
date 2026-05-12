---
source_path: "documentation/AVFoundation/avassettrack/loadmetadata-forcompletionhandler.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassettrack/loadmetadata-forcompletionhandler"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:loadmetadataforcompletionhandler:0000:0001">loadMetadata(for:completionHandler:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:loadmetadataforcompletionhandler:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:loadmetadataforcompletionhandler:0002:0001">지정한 형식에 대해 트랙이 포함하는 메타데이터 항목을 로드합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:loadmetadataforcompletionhandler:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:loadmetadataforcompletionhandler:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:loadmetadataforcompletionhandler:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:loadmetadataforcompletionhandler:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:loadmetadataforcompletionhandler:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:loadmetadataforcompletionhandler:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:loadmetadataforcompletionhandler:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:loadmetadataforcompletionhandler:0004:0007">watchOS 8.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func loadMetadata(for format: AVMetadataFormat) async throws -> [AVMetadataItem]
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>format</code>: 로드할 메타데이터 항목의 형식입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>completionHandler</code>: 시스템이 로딩 요청을 완료한 후 호출하는 콜백입니다. 이 콜백에는 다음 매개변수가 전달됩니다: - **metadata**: 로드된 메타데이터입니다. 지정한 형식의 메타데이터 항목이 없으면 빈 배열을 반환합니다. 오류가 발생하면 값은 <code>nil</code>입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003">**error**: 요청이 실패하면 오류 객체가 반환되며, 그렇지 않으면 <code>nil</code>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[static var metadata: AVAsyncProperty&lt;Root, [AVMetadataItem]&gt;](avpartialasyncproperty/metadata-6e14c.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">값이 있는 모든 메타데이터 식별자에 대한 메타데이터 항목 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[static var commonMetadata: AVAsyncProperty&lt;Root, [AVMetadataItem]&gt;](avpartialasyncproperty/commonmetadata-73m58.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">값이 있는 모든 공통 메타데이터 키에 대한 메타데이터 항목 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[static var availableMetadataFormats: AVAsyncProperty&lt;Root, [AVMetadataFormat]&gt;](avpartialasyncproperty/availablemetadataformats-5p9xg.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">트랙에서 사용 가능한 메타데이터 형식의 배열입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassettrack/loadmetadata(for:completionhandler:">View on Apple Developer</a>)*</span>
