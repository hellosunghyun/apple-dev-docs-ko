---
source_path: "documentation/AVFoundation/avqueuedsamplebufferrendering/enqueue.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avqueuedsamplebufferrendering/enqueue"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:enqueue:0000:0001">enqueue(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:enqueue:0001:0001">**Framework**: AVFoundation **Kind**: method **Required**: Yes</span>

<span class="ko-segment" data-segment-id="seg:paragraph:enqueue:0002:0001">렌더링을 위해 샘플 버퍼를 큐로 전송합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:enqueue:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:enqueue:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:enqueue:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:enqueue:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:enqueue:0004:0004">macOS 10.13+</span>
- <span class="ko-segment" data-segment-id="seg:list:enqueue:0004:0005">tvOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:enqueue:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:enqueue:0004:0007">watchOS 4.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func enqueue(_ sampleBuffer: CMSampleBuffer)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">비디오 데이터의 경우 샘플 버퍼는 포함된 첨부 항목에 따라 처리됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002"><a href="https://developer.apple.com/documentation/CoreMedia/kCMSampleAttachmentKey_DoNotDisplay">@@TOKEN_0@@</a> 첨부 항목 값이 <code>true</code>이면 프레임은 디코딩되지만 표시되지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003"><a href="https://developer.apple.com/documentation/CoreMedia/kCMSampleAttachmentKey_DisplayImmediately">@@TOKEN_0@@</a> 첨부 항목 값이 <code>true</code>이면 프레임이 표시 타임스탬프와 관계없이 가능한 한 빨리 표시됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0004">그렇지 않으면 프레임은 timebase를 기준으로 표시 타임스탬프에 따라 표시됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">To schedule the removal of previous images at a specific timestamp, enqueue a marker sample buffer that doesn’t contain any samples, with the <a href="https://developer.apple.com/documentation/CoreMedia/kCMSampleBufferAttachmentKey_EmptyMedia">@@TOKEN_0@@</a> attachment set to <a href="https://developer.apple.com/documentation/CoreFoundation/kCFBooleanTrue">@@TOKEN_1@@</a>.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0010:0001">❗ **중요**: <code>kCMSampleAttachmentKey_</code> 접두사가 있는 첨부 항목은 <a href="https://developer.apple.com/documentation/CoreMedia/CMSampleBufferGetSampleAttachmentsArray(_:createIfNecessary:">@@TOKEN_1@@</a>) 및 <a href="https://developer.apple.com/documentation/CoreFoundation/CFDictionarySetValue(_:_:_:">@@TOKEN_2@@</a>)를 사용해 설정해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0010:0002"><code>kCMSampleBufferAttachmentKey_</code> 접두사가 있는 첨부 항목은 <a href="https://developer.apple.com/documentation/CoreMedia/CMSetAttachment(_:key:value:attachmentMode:">@@TOKEN_1@@</a>)를 통해 설정해야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>sampleBuffer</code>: 큐에 추가할 샘플 버퍼입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참조 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avqueuedsamplebufferrendering/isreadyformoremediadata.md">var isReadyForMoreMediaData: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">수신기가 더 많은 샘플 버퍼를 수용할 수 있는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avqueuedsamplebufferrendering/requestmediadatawhenready(on:using:">func requestMediaDataWhenReady(on: dispatch_queue_t, using: () -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">재생을 위해 샘플 버퍼를 수집하도록 대상이 클라이언트가 제공한 블록을 호출하도록 지시합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avqueuedsamplebufferrendering/stoprequestingmediadata.md">func stopRequestingMediaData()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">현재 진행 중인 <a href="avqueuedsamplebufferrendering/requestmediadatawhenready(on:using:">@@TOKEN_0@@</a>.md) 호출을 취소합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avqueuedsamplebufferrendering/enqueue(_:">View on Apple Developer</a>)*</span>
