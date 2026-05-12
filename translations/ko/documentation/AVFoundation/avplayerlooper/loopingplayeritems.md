---
source_path: "documentation/AVFoundation/avplayerlooper/loopingplayeritems.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayerlooper/loopingplayeritems"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:loopingplayeritems:0000:0001">loopingPlayerItems</span>

<span class="ko-segment" data-segment-id="seg:paragraph:loopingplayeritems:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:loopingplayeritems:0002:0001">루핑을 수행하기 위해 사용되는 템플릿 플레이어 항목의 복제본을 포함하는 배열입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:loopingplayeritems:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:loopingplayeritems:0004:0001">iOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:loopingplayeritems:0004:0002">iPadOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:loopingplayeritems:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:loopingplayeritems:0004:0004">macOS 10.12+</span>
- <span class="ko-segment" data-segment-id="seg:list:loopingplayeritems:0004:0005">tvOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:loopingplayeritems:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var loopingPlayerItems: [AVPlayerItem] { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001"><code>AVPlayerLooper</code>는 템플릿 <a href="avplayeritem.md">@@TOKEN_1@@</a>의 <a href="https://developer.apple.com/documentation/ObjectiveC/NSObject-swift.class/copyWithZone:">@@TOKEN_2@@</a> 메서드를 사용해 복제본을 생성하고, 큐 플레이어의 큐에 삽입해 루핑을 수행합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">If it has a true value for its <a href="https://developer.apple.com/documentation/CoreMedia/kCMSampleAttachmentKey_DoNotDisplay">@@TOKEN_0@@</a> attachment, the frame is decoded but not displayed.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">To schedule the removal of previous images at a specific timestamp, enqueue a marker sample buffer that doesn’t contain any samples, with the <a href="https://developer.apple.com/documentation/CoreMedia/kCMSampleBufferAttachmentKey_EmptyMedia">@@TOKEN_0@@</a> attachment set to <a href="https://developer.apple.com/documentation/CoreFoundation/kCFBooleanTrue">@@TOKEN_1@@</a>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">예를 들어 템플릿 플레이어 항목에 연결된 <a href="avplayeritemoutput.md">@@TOKEN_0@@</a> 및 <a href="avplayeritemmediadatacollector.md">@@TOKEN_1@@</a> 인스턴스는 복제본으로 전송되지 않으므로, 필요한 경우 각 복제 항목에 추가해야 합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0010:0001">❗ **Important**: Attachments with the <code>kCMSampleAttachmentKey_</code> prefix must be set using <a href="https://developer.apple.com/documentation/CoreMedia/CMSampleBufferGetSampleAttachmentsArray(_:createIfNecessary:">@@TOKEN_1@@</a>) and <a href="https://developer.apple.com/documentation/CoreFoundation/CFDictionarySetValue(_:_:_:">@@TOKEN_2@@</a>).</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0010:0002">Attachments with the <code>kCMSampleBufferAttachmentKey_</code> prefix must be set via <a href="https://developer.apple.com/documentation/CoreMedia/CMSetAttachment(_:key:value:attachmentMode:">@@TOKEN_1@@</a>).</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">관련 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avplayerlooper/disablelooping.md">func disableLooping()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">플레이어 큐의 루핑을 비활성화합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayerlooper/loopingplayeritems">View on Apple Developer</a>*</span>
