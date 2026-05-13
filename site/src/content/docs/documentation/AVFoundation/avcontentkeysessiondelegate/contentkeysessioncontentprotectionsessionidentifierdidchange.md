---
source_path: "documentation/AVFoundation/avcontentkeysessiondelegate/contentkeysessioncontentprotectionsessionidentifierdidchange.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcontentkeysessiondelegate/contentkeysessioncontentprotectionsessionidentifierdidchange"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:contentkeysessioncontentprotectionsessionidentifierdidchange:0000:0001">contentKeySessionContentProtectionSessionIdentifierDidChange(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:contentkeysessioncontentprotectionsessionidentifierdidchange:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:contentkeysessioncontentprotectionsessionidentifierdidchange:0002:0001">수신자에게 콘텐츠 보호 세션 식별자가 변경되었음을 알립니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:contentkeysessioncontentprotectionsessionidentifierdidchange:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:contentkeysessioncontentprotectionsessionidentifierdidchange:0004:0001">iOS 10.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:contentkeysessioncontentprotectionsessionidentifierdidchange:0004:0002">iPadOS 10.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:contentkeysessioncontentprotectionsessionidentifierdidchange:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:contentkeysessioncontentprotectionsessionidentifierdidchange:0004:0004">macOS 10.12.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:contentkeysessioncontentprotectionsessionidentifierdidchange:0004:0005">tvOS 10.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:contentkeysessioncontentprotectionsessionidentifierdidchange:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:contentkeysessioncontentprotectionsessionidentifierdidchange:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
optional func contentKeySessionContentProtectionSessionIdentifierDidChange(_ session: AVContentKeySession)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>session</code>: 알림을 받을 콘텐츠 키 세션입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[func contentKeySession(AVContentKeySession, didProvide: [AVContentKeyRequest], forInitializationData: Data?)](avcontentkeysessiondelegate/contentkeysession(_:didprovide:forinitializationdata:).md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0002"><a href="avcontentkeysessiondelegate/contentkeysession(_:externalprotectionstatusdidchangefor:">func contentKeySession(AVContentKeySession, externalProtectionStatusDidChangeFor: AVContentKey)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">외부 보호 상태가 변경되면 델리게이트에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcontentkeysessiondelegate/contentkeysession(_:didupdatepersistablecontentkey:forcontentkeyidentifier:">func contentKeySession(AVContentKeySession, didUpdatePersistableContentKey: Data, forContentKeyIdentifier: Any)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">특정 키 요청에 대해 업데이트된 영구 콘텐츠 키를 수신자에게 제공합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcontentkeysessiondelegate/contentkeysession(_:shouldretry:reason:">func contentKeySession(AVContentKeySession, shouldRetry: AVContentKeyRequest, reason: AVContentKeyRequest.RetryReason) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">재시도할 콘텐츠 키 요청 객체를 수신자에게 제공합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcontentkeyrequest/retryreason.md">AVContentKeyRequest.RetryReason</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">디바이스별 화이트 밸런스 RGB 게인 값을 디바이스 독립적인 크로마틱성 값으로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avcapturedevice/temperatureandtintvalues(for:">func temperatureAndTintValues(for: AVCaptureDevice.WhiteBalanceGains) -&gt; AVCaptureDevice.WhiteBalanceTemperatureAndTintValues</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">디바이스별 화이트 밸런스 RGB 게인 값을 디바이스 독립적인 온도 및 틴트 값으로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avcapturedevice/devicewhitebalancegains(for:">func deviceWhiteBalanceGains(for: AVCaptureDevice.WhiteBalanceTemperatureAndTintValues) -&gt; AVCaptureDevice.WhiteBalanceGains</a>-3wtsa.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">디바이스 독립적인 온도 및 틴트 값을 디바이스별 화이트 밸런스 RGB 게인 값으로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avcontentkeysessiondelegate/contentkeysessiondidgenerateexpiredsessionreport(_:">func contentKeySessionDidGenerateExpiredSessionReport(AVContentKeySession)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">RGB 화이트 밸런스 게인 값들을 정의하는 구조체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcontentkeysessiondelegate/contentkeysessioncontentprotectionsessionidentifierdidchange(_:">View on Apple Developer</a>)*</span>
