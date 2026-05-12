---
source_path: "documentation/AVFoundation/avsamplebuffergenerator/notifyofdataready-forcompletionhandler.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avsamplebuffergenerator/notifyofdataready-forcompletionhandler"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:notifyofdatareadyforcompletionhandler:0000:0001">notifyOfDataReady(for:completionHandler:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:notifyofdatareadyforcompletionhandler:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:notifyofdatareadyforcompletionhandler:0002:0001">샘플 버퍼 참조 데이터가 준비되었거나 오류가 발생했을 때 샘플 버퍼 생성기에 알립니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:notifyofdatareadyforcompletionhandler:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:notifyofdatareadyforcompletionhandler:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:notifyofdatareadyforcompletionhandler:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:notifyofdatareadyforcompletionhandler:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:notifyofdatareadyforcompletionhandler:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:notifyofdatareadyforcompletionhandler:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:notifyofdatareadyforcompletionhandler:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:notifyofdatareadyforcompletionhandler:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class func notifyOfDataReady(for sbuf: CMSampleBuffer) async throws
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>sbuf</code>: <code>CMSampleBufferRef</code>입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>completionHandler</code>: 샘플 버퍼의 데이터가 준비되었거나 오류가 발생할 때 호출되는 완료 블록입니다. 데이터가 샘플 버퍼에 대해 읽히면 <code>dataReady</code> 인수는 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_2@@</a>입니다. 오류가 발생하면 <code>error</code> 인수에 <code>NSError</code> 객체가 포함됩니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0010:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avsamplebuffergenerator/notifyofdataready(for:completionhandler:">Apple Developer에서 보기</a>)*</span>
