---
source_path: "documentation/AVFoundation/avpersistablecontentkeyrequest/persistablecontentkey-fromkeyvendorresponseoptions.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avpersistablecontentkeyrequest/persistablecontentkey-fromkeyvendorresponseoptions"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:persistablecontentkeyfromkeyvendorresponseoptions:0000:0001">persistableContentKey(fromKeyVendorResponse:options:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:persistablecontentkeyfromkeyvendorresponseoptions:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:persistablecontentkeyfromkeyvendorresponseoptions:0002:0001">content key 컨텍스트 데이터에서 persistable content key를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:persistablecontentkeyfromkeyvendorresponseoptions:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:persistablecontentkeyfromkeyvendorresponseoptions:0004:0001">iOS 10.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:persistablecontentkeyfromkeyvendorresponseoptions:0004:0002">iPadOS 10.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:persistablecontentkeyfromkeyvendorresponseoptions:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:persistablecontentkeyfromkeyvendorresponseoptions:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:persistablecontentkeyfromkeyvendorresponseoptions:0004:0005">tvOS 10.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:persistablecontentkeyfromkeyvendorresponseoptions:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:persistablecontentkeyfromkeyvendorresponseoptions:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func persistableContentKey(fromKeyVendorResponse keyVendorResponse: Data, options: [String : Any]? = nil) throws -> Data
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">persistable content key를 포함하는 데이터 객체를 반환합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>keyVendorResponse</code>: key vendor에서 반환되는 응답입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>options</code>: persistable content key를 얻기 위해 필요한 추가 정보입니다. 추가 정보가 필요하지 않으면 이 매개변수의 값은 <code>nil</code>입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0012:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avpersistablecontentkeyrequest/persistablecontentkey(fromkeyvendorresponse:options:">View on Apple Developer</a>)*</span>
