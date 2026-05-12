---
source_path: "documentation/AVFoundation/avcontentkeysessiondelegate/contentkeysession-shouldretryreason.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcontentkeysessiondelegate/contentkeysession-shouldretryreason"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:contentkeysessionshouldretryreason:0000:0001">contentKeySession(_:shouldRetry:reason:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:contentkeysessionshouldretryreason:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:contentkeysessionshouldretryreason:0002:0001">수신자에게 다시 시도할 콘텐츠 키 요청 객체를 제공합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:contentkeysessionshouldretryreason:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:contentkeysessionshouldretryreason:0004:0001">iOS 10.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:contentkeysessionshouldretryreason:0004:0002">iPadOS 10.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:contentkeysessionshouldretryreason:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:contentkeysessionshouldretryreason:0004:0004">macOS 10.12.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:contentkeysessionshouldretryreason:0004:0005">tvOS 10.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:contentkeysessionshouldretryreason:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:contentkeysessionshouldretryreason:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
optional func contentKeySession(_ session: AVContentKeySession, shouldRetry keyRequest: AVContentKeyRequest, reason retryReason: AVContentKeyRequest.RetryReason) -> Bool
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>session</code>: 콘텐츠 키 요청을 제공하는 콘텐츠 키 세션입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>keyRequest</code>: 다시 시도할 키 요청입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>retryReason</code>: 다시 시도 요청의 이유입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[func contentKeySession(AVContentKeySession, didProvide: [AVContentKeyRequest], forInitializationData: Data?)](avmetadataidentifier/commonidentifieralbumname.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0002"><a href="avcontentkeysessiondelegate/contentkeysession(_:externalprotectionstatusdidchangefor:">func contentKeySession(AVContentKeySession, externalProtectionStatusDidChangeFor: AVContentKey)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">수신자에게 외부 보호 상태가 변경되었음을 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmetadataidentifier/commonidentifierartist.md">func contentKeySession(AVContentKeySession, didUpdatePersistableContentKey: Data, forContentKeyIdentifier: Any)</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">수신자에게 특정 키 요청에 대한 업데이트된 지속 가능한 콘텐츠 키를 제공합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcontentkeyrequest/retryreason.md">AVContentKeyRequest.RetryReason</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">클라이언트에 콘텐츠 키 요청을 다시 시도하라는 이유입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avmetadataidentifier/commonidentifierassetidentifier.md">func contentKeySessionContentProtectionSessionIdentifierDidChange(AVContentKeySession)</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">수신기에 콘텐츠 보호 세션 식별자가 변경되었음을 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avmetadataidentifier/commonidentifierauthor.md">func contentKeySession(AVContentKeySession, contentKeyRequest: AVContentKeyRequest, didFailWithError: any Error)</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">수신기에게 콘텐츠 키 요청이 실패했음을 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avcontentkeysessiondelegate/contentkeysession(_:contentkeyrequestdidsucceed:">func contentKeySession(AVContentKeySession, contentKeyRequestDidSucceed: AVContentKeyRequest)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">콘텐츠 키 요청의 응답이 성공적으로 처리되었음을 콘텐츠 키 세션에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avcontentkeysessiondelegate/contentkeysessiondidgenerateexpiredsessionreport(_:">func contentKeySessionDidGenerateExpiredSessionReport(AVContentKeySession)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">만료된 세션 보고서가 생성되었음을 발신자에게 알립니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcontentkeysessiondelegate/contentkeysession(_:shouldretry:reason:">View on Apple Developer</a>)*</span>
