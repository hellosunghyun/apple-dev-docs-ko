---
source_path: "documentation/AVFoundation/avcontentkeysessiondelegate/contentkeysessiondidgenerateexpiredsessionreport.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcontentkeysessiondelegate/contentkeysessiondidgenerateexpiredsessionreport"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:contentkeysessiondidgenerateexpiredsessionreport:0000:0001">contentKeySessionDidGenerateExpiredSessionReport(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:contentkeysessiondidgenerateexpiredsessionreport:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:contentkeysessiondidgenerateexpiredsessionreport:0002:0001">만료된 세션 보고서가 생성되었음을 발신자에게 알립니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:contentkeysessiondidgenerateexpiredsessionreport:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:contentkeysessiondidgenerateexpiredsessionreport:0004:0001">iOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:contentkeysessiondidgenerateexpiredsessionreport:0004:0002">iPadOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:contentkeysessiondidgenerateexpiredsessionreport:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:contentkeysessiondidgenerateexpiredsessionreport:0004:0004">macOS 10.14+</span>
- <span class="ko-segment" data-segment-id="seg:list:contentkeysessiondidgenerateexpiredsessionreport:0004:0005">tvOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:contentkeysessiondidgenerateexpiredsessionreport:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:contentkeysessiondidgenerateexpiredsessionreport:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
optional func contentKeySessionDidGenerateExpiredSessionReport(_ session: AVContentKeySession)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 메서드는 만료된 세션 보고서가 <a href="avcontentkeysession/storageurl.md">@@TOKEN_0@@</a> 속성에 추가될 때 호출됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>session</code>: 만료된 세션 보고서 생성이 기록된 <a href="avcontentkeysession.md">@@TOKEN_1@@</a> 객체입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[func contentKeySession(AVContentKeySession, didProvide: [AVContentKeyRequest], forInitializationData: Data?)](avcontentkeysessiondelegate/contentkeysession(_:didprovide:forinitializationdata:).md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0002"><a href="avcontentkeysessiondelegate/contentkeysession(_:externalprotectionstatusdidchangefor:">func contentKeySession(AVContentKeySession, externalProtectionStatusDidChangeFor: AVContentKey)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">외부 보호 상태가 변경되면 대리자에게 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcontentkeysessiondelegate/contentkeysession(_:didupdatepersistablecontentkey:forcontentkeyidentifier:">func contentKeySession(AVContentKeySession, didUpdatePersistableContentKey: Data, forContentKeyIdentifier: Any)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">특정 키 요청에 대한 업데이트된 영속형 콘텐츠 키를 수신자에게 제공합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcontentkeysessiondelegate/contentkeysession(_:shouldretry:reason:">func contentKeySession(AVContentKeySession, shouldRetry: AVContentKeyRequest, reason: AVContentKeyRequest.RetryReason) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">재시도할 콘텐츠 키 요청 객체를 수신자에게 제공합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avcontentkeyrequest/retryreason.md">AVContentKeyRequest.RetryReason</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">클라이언트가 콘텐츠 키 요청을 다시 시도하도록 요청하는 이유입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avcontentkeysessiondelegate/contentkeysessioncontentprotectionsessionidentifierdidchange(_:">func contentKeySessionContentProtectionSessionIdentifierDidChange(AVContentKeySession)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">콘텐츠 보호 세션 식별자가 변경되었음을 수신자에게 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avcontentkeysessiondelegate/contentkeysession(_:contentkeyrequest:didfailwitherror:">func contentKeySession(AVContentKeySession, contentKeyRequest: AVContentKeyRequest, didFailWithError: any Error)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">콘텐츠 키 요청이 실패했음을 수신자에게 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avcontentkeysessiondelegate/contentkeysession(_:contentkeyrequestdidsucceed:">func contentKeySession(AVContentKeySession, contentKeyRequestDidSucceed: AVContentKeyRequest)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">콘텐츠 키 요청에 대한 응답이 성공적으로 처리되었음을 콘텐츠 키 세션에 알립니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcontentkeysessiondelegate/contentkeysessiondidgenerateexpiredsessionreport(_:">View on Apple Developer</a> )*</span>
