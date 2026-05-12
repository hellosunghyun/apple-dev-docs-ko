---
source_path: "documentation/AVFoundation/avcontentkeysession/processcontentkeyrequest-withidentifierinitializationdataoptions.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcontentkeysession/processcontentkeyrequest-withidentifierinitializationdataoptions"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:processcontentkeyrequestwithidentifierinitializationdataoptions:0000:0001">processContentKeyRequest(withIdentifier:initializationData:options:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:processcontentkeyrequestwithidentifierinitializationdataoptions:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:processcontentkeyrequestwithidentifierinitializationdataoptions:0002:0001">대리자에게 지정된 식별자와 초기화 데이터로 콘텐츠 복호화 키 로딩을 시작하라고 지시합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:processcontentkeyrequestwithidentifierinitializationdataoptions:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:processcontentkeyrequestwithidentifierinitializationdataoptions:0004:0001">iOS 10.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:processcontentkeyrequestwithidentifierinitializationdataoptions:0004:0002">iPadOS 10.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:processcontentkeyrequestwithidentifierinitializationdataoptions:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:processcontentkeyrequestwithidentifierinitializationdataoptions:0004:0004">macOS 10.12.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:processcontentkeyrequestwithidentifierinitializationdataoptions:0004:0005">tvOS 10.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:processcontentkeyrequestwithidentifierinitializationdataoptions:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:processcontentkeyrequestwithidentifierinitializationdataoptions:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func processContentKeyRequest(withIdentifier identifier: (any Sendable)?, initializationData: Data?, options: [String : any Sendable]? = nil)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001"><code>identifier</code> 또는 <code>initializationData</code> 매개변수 중 하나는 <code>nil</code>이 아니어야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">프로토콜에서 요구하는 경우 두 매개변수 모두 <code>nil</code>이 아닐 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>identifier</code>: 키 응답을 가져오는데 사용되는 컨테이너 및 프로토콜별 식별자입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>initializationData</code>: 키 응답을 가져오는데 사용되는 컨테이너 및 프로토콜별 데이터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0003"><code>options</code>: 현재 정의된 옵션은 없습니다. 이 값을 <code>nil</code>로 설정합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0012:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcontentkeysession/processcontentkeyrequest(withidentifier:initializationdata:options:">View on Apple Developer</a>)*</span>
