---
source_path: "documentation/AVFoundation/avcontentkeyrequestshouldrandomizedeviceidentifierkey.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcontentkeyrequestshouldrandomizedeviceidentifierkey"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avcontentkeyrequestshouldrandomizedeviceidentifierkey:0000:0001">AVContentKeyRequestShouldRandomizeDeviceIdentifierKey</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcontentkeyrequestshouldrandomizedeviceidentifierkey:0001:0001">**Framework**: AVFoundation **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcontentkeyrequestshouldrandomizedeviceidentifierkey:0002:0001">이 값은 사용자의 <code>deviceID</code>가 SPC blob에 포함될 때 시스템 생성 시드를 사용해 무작위화되어야 하는지 여부를 나타내는 <code>Boolean</code> 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcontentkeyrequestshouldrandomizedeviceidentifierkey:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avcontentkeyrequestshouldrandomizedeviceidentifierkey:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcontentkeyrequestshouldrandomizedeviceidentifierkey:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcontentkeyrequestshouldrandomizedeviceidentifierkey:0004:0003">Mac Catalyst 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcontentkeyrequestshouldrandomizedeviceidentifierkey:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcontentkeyrequestshouldrandomizedeviceidentifierkey:0004:0005">tvOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcontentkeyrequestshouldrandomizedeviceidentifierkey:0004:0006">visionOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcontentkeyrequestshouldrandomizedeviceidentifierkey:0004:0007">watchOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
let AVContentKeyRequestShouldRandomizeDeviceIdentifierKey: String
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">콘텐츠 제공자는 SPC를 사용해 재생 디바이스를 다른 디바이스와 구분하며, 일반적으로 화면 단위 비즈니스 규칙 한도를 적용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">앱 개발자가 콘텐츠 공급업체와 협력해 재생 디바이스를 구분할 필요가 없다면, 이 옵션을 사용해 식별자를 비정적으로 만들어 사용자 개인정보 보호를 추가로 강화할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">어떤 경우에도 앱은 FairPlay 익명화된 디바이스 ID를 비즈니스 규칙 한도 적용 이외의 목적으로 저장하거나 사용할 수 없습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0004">앱 개발자는 애플리케이션 또는 관련 FairPlay 키 서버가 최종 사용자 데이터를 수집하고 이를 앱 및 웹 사이트 간 추적 목적으러 다른 회사와 공유하는 경우 AppTrackingTransparency 프레임워크를 사용해 사용자에게 공개해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0005"><code>true</code>인 경우 시스템은 디바이스 ID를 무작위화할 때 사용할 임의 시드를 생성합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0006">사용할 시드를 재정의하려면 <code>AVContentKeyRequestRandomDeviceIdentifierSeedKey</code>와 함께 이 속성을 사용해 애플리케이션이 생성한 시드를 제공합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참조 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[func makeStreamingContentKeyRequestData(forApp: Data, contentIdentifier: Data?, options: [String : Any]?, completionHandler: (Data?, (any Error)?) -&gt; Void)](avcontentkeyrequest/makestreamingcontentkeyrequestdata(forapp:contentidentifier:options:completionhandler:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">특정 앱과 콘텐츠 조합에 대한 암호화된 키 요청 데이터를 가져옵니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcontentkeyrequestprotocolversionskey.md">let AVContentKeyRequestProtocolVersionsKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">애플리케이션에서 지원하는 콘텐츠 보호 프로토콜 버전을 지정하는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcontentkeyrequestrequiresvalidationdatainsecuretokenkey.md">let AVContentKeyRequestRequiresValidationDataInSecureTokenKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">보안 토큰에 확장 유효성 검사 데이터가 있어야 함을 요구하는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcontentkeyrequestrandomdeviceidentifierseedkey.md">let AVContentKeyRequestRandomDeviceIdentifierSeedKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">이 값은 FairPlay 키 교환 중 SPC blob에 포함된 사용자의 deviceID를 무작위화하기 위한 16바이트 시드를 담은 NSData입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcontentkeyrequestshouldrandomizedeviceidentifierkey">View on Apple Developer</a>*</span>
