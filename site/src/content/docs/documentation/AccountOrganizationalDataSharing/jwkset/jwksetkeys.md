---
source_path: "documentation/AccountOrganizationalDataSharing/jwkset/jwksetkeys.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accountorganizationaldatasharing/jwkset/jwksetkeys"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:jwksetkeys:0000:0001">JWKSet.Keys</span>

<span class="ko-segment" data-segment-id="seg:paragraph:jwksetkeys:0001:0001">**프레임워크**: Account &amp; Organizational Data Sharing **종류**: 딕셔너리</span>

<span class="ko-segment" data-segment-id="seg:paragraph:jwksetkeys:0002:0001">단일 JSON Web Key를 정의하는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:jwksetkeys:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:jwksetkeys:0004:0001">AccountOrganizationalDataSharing 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
object JWKSet.Keys
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">JWK는 암호화 키를 나타내는 데이터 구조를 정의하는 공개 표준(<a href="https://developer.apple.comhttps://www.rfc-editor.org/rfc/rfc7517">@@TOKEN_0@@</a>)입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:properties:0009:0001">Properties</span>

- <span class="ko-segment" data-segment-id="seg:list:properties:0010:0001"><code>alg</code> (string): The encryption algorithm used to encrypt the token.</span>
- <span class="ko-segment" data-segment-id="seg:list:properties:0010:0002"><code>e</code> (string): The exponent value for the RSA public key.</span>
- <span class="ko-segment" data-segment-id="seg:list:properties:0010:0003"><code>kid</code> (string): A 10-character identifier key, obtained from your developer account.</span>
- <span class="ko-segment" data-segment-id="seg:list:properties:0010:0004"><code>kty</code> (string): The key type parameter setting. Use the value <code>RSA</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:properties:0010:0005"><code>n</code> (string): The modulus value for the RSA public key.</span>
- <span class="ko-segment" data-segment-id="seg:list:properties:0010:0006"><code>use</code> (string): The intended use for the public key.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:properties:0012:0001">*<a href="https://developer.apple.com/documentation/accountorganizationaldatasharing/jwkset/jwkset.keys">View on Apple Developer</a>*</span>
