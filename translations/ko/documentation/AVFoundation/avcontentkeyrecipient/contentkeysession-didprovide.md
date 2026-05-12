---
source_path: "documentation/AVFoundation/avcontentkeyrecipient/contentkeysession-didprovide.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcontentkeyrecipient/contentkeysession-didprovide"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:contentkeysessiondidprovide:0000:0001">contentKeySession(_:didProvide:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:contentkeysessiondidprovide:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:contentkeysessiondidprovide:0002:0001">수신자에게 콘텐츠 키를 사용할 수 있음을 알립니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:contentkeysessiondidprovide:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:contentkeysessiondidprovide:0004:0001">iOS 14.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:contentkeysessiondidprovide:0004:0002">iPadOS 14.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:contentkeysessiondidprovide:0004:0003">Mac Catalyst 14.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:contentkeysessiondidprovide:0004:0004">macOS 11.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:contentkeysessiondidprovide:0004:0005">tvOS 14.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:contentkeysessiondidprovide:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:contentkeysessiondidprovide:0004:0007">watchOS 7.4+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
optional func contentKeySession(_ contentKeySession: AVContentKeySession, didProvide contentKey: AVContentKey)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>contentKeySession</code>: 현재 콘텐츠 키 세션입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>contentKey</code>: 키의 수동 첨부를 지원하는 <a href="https://developer.apple.com/documentation/CoreMedia/CMSampleBuffer">@@TOKEN_1@@</a>와 같은 객체에서 사용할 콘텐츠 키입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcontentkeyrecipient/mayrequirecontentkeysformediadataprocessing.md">var mayRequireContentKeysForMediaDataProcessing: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">수신자가 미디어 데이터 처리 시 복호화 키가 필요한지 나타내는 부울 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcontentkeyrecipient/contentkeysession(_:didprovide:">Apple Developer에서 보기</a>)*</span>
