---
source_path: "documentation/AVFoundation/avcontentkeysessiondelegate/contentkeysession-didupdatepersistablecontentkeyforcontentkeyidentifier.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcontentkeysessiondelegate/contentkeysession-didupdatepersistablecontentkeyforcontentkeyidentifier"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:contentkeysessiondidupdatepersistablecontentkeyforcontentkeyidentifier:0000:0001">contentKeySession(_:didUpdatePersistableContentKey:forContentKeyIdentifier:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:contentkeysessiondidupdatepersistablecontentkeyforcontentkeyidentifier:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:contentkeysessiondidupdatepersistablecontentkeyforcontentkeyidentifier:0002:0001">특정 키 요청에 대한 업데이트된 persistable 콘텐츠 키를 수신자에게 제공합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:contentkeysessiondidupdatepersistablecontentkeyforcontentkeyidentifier:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:contentkeysessiondidupdatepersistablecontentkeyforcontentkeyidentifier:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:contentkeysessiondidupdatepersistablecontentkeyforcontentkeyidentifier:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:contentkeysessiondidupdatepersistablecontentkeyforcontentkeyidentifier:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:contentkeysessiondidupdatepersistablecontentkeyforcontentkeyidentifier:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:contentkeysessiondidupdatepersistablecontentkeyforcontentkeyidentifier:0004:0005">tvOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:contentkeysessiondidupdatepersistablecontentkeyforcontentkeyidentifier:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:contentkeysessiondidupdatepersistablecontentkeyforcontentkeyidentifier:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
optional func contentKeySession(_ session: AVContentKeySession, didUpdatePersistableContentKey persistableContentKey: Data, forContentKeyIdentifier keyIdentifier: Any)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The value of this UTI is <code>com.apple.m4a-audio</code>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>session</code>: 업데이트된 persistable 콘텐츠 키를 제공하는 콘텐츠 키 세션입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>persistableContentKey</code>: 업데이트된 persistable 콘텐츠 키 데이터입니다. 이 데이터는 오프라인으로 저장할 수 있으며 일치하는 key identifier를 가진 향후 콘텐츠 키 요청에 대한 응답을 제공하는 데 사용할 수 있습니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0003"><code>keyIdentifier</code>: 업데이트된 persistable 콘텐츠 키에 대한 컨테이너 및 프로토콜별 식별자입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">관련 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[func contentKeySession(AVContentKeySession, didProvide: [AVContentKeyRequest], forInitializationData: Data?)](avfiletype/scc.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0002"><a href="avcontentkeysessiondelegate/contentkeysession(_:externalprotectionstatusdidchangefor:">func contentKeySession(AVContentKeySession, externalProtectionStatusDidChangeFor: AVContentKey)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">외부 보호 상태가 변경되면 delegate에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avfiletype/ac3.md">func contentKeySession(AVContentKeySession, shouldRetry: AVContentKeyRequest, reason: AVContentKeyRequest.RetryReason) -&gt; Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">재시도할 콘텐츠 키 요청 객체를 수신자에게 제공합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcontentkeyrequest/retryreason.md">AVContentKeyRequest.RetryReason</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">클라이언트에 콘텐츠 키 요청을 다시 시도하도록 요청하는 이유입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avfiletype/aiff.md">func contentKeySessionContentProtectionSessionIdentifierDidChange(AVContentKeySession)</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">콘텐츠 보호 세션 식별자가 변경되었음을 수신자에게 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avfiletype/amr.md">func contentKeySession(AVContentKeySession, contentKeyRequest: AVContentKeyRequest, didFailWithError: any Error)</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">콘텐츠 키 요청이 실패했음을 수신자에게 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avfiletype/appleitt.md">func contentKeySession(AVContentKeySession, contentKeyRequestDidSucceed: AVContentKeyRequest)</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">콘텐츠 키 요청에 대한 응답이 성공적으로 처리되었음을 콘텐츠 키 세션에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avcontentkeysessiondelegate/contentkeysessiondidgenerateexpiredsessionreport(_:">func contentKeySessionDidGenerateExpiredSessionReport(AVContentKeySession)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">만료된 세션 보고서가 생성되었음을 송신자에게 알립니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcontentkeysessiondelegate/contentkeysession(_:didupdatepersistablecontentkey:forcontentkeyidentifier:">View on Apple Developer</a>)*</span>
