---
source_path: "documentation/AccountOrganizationalDataSharing/errorresponse.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accountorganizationaldatasharing/errorresponse"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:errorresponse:0000:0001">ErrorResponse</span>

<span class="ko-segment" data-segment-id="seg:paragraph:errorresponse:0001:0001">**Framework**: Account &amp; Organizational Data Sharing **Kind**: 딕셔너리</span>

<span class="ko-segment" data-segment-id="seg:paragraph:errorresponse:0002:0001">요청이 실패한 후 반환되는 오류 개체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:errorresponse:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:errorresponse:0004:0001">AccountOrganizationalDataSharing 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
object ErrorResponse
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001"><code>error</code> 속성은 다음 값 중 하나입니다:</span>

- <span class="ko-segment" data-segment-id="seg:list:overview:0009:0001">**<code>invalid_request</code>**: 잘못된 요청입니다. 일반적으로 매개변수가 누락되었거나, 지원되지 않는 매개변수를 포함했거나, 여러 자격 증명을 포함했거나, 클라이언트 인증에 두 개 이상의 메커니즘을 사용하는 경우입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:overview:0009:0002">**<code>invalid_client</code>**: 클라이언트 인증이 실패했습니다. 일반적으로 클라이언트 식별자가 일치하지 않거나 유효하지 않거나, 클라이언트 시크릿이 유효하지 않기 때문입니다(만료된 토큰, 형식이 잘못된 클레임, 유효하지 않은 서명), 또는 리디렉션 URI가 일치하지 않거나 유효하지 않은 경우입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:overview:0009:0003">**<code>invalid_grant</code>**: 권한 부여 또는 리프레시 토큰이 유효하지 않습니다. 일반적으로 클라이언트 식별자가 일치하지 않거나 유효하지 않거나, 코드가 유효하지 않기 때문입니다(만료되었거나 이미 사용된 권한 부여 코드), 리프레시 토큰이 유효하지 않은 경우입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:overview:0009:0004">**<code>unauthorized_client</code>**: 클라이언트가 이 권한 부여 유형을 사용할 권한이 없습니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:overview:0009:0005">**<code>unsupported_grant_type</code>**: 인증된 클라이언트가 이 권한 부여 유형을 사용할 권한이 없습니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:overview:0009:0006">**<code>invalid_scope</code>**: 요청한 scope가 유효하지 않습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:properties:0010:0001">Properties</span>

- <span class="ko-segment" data-segment-id="seg:list:properties:0011:0001"><code>error</code> (string): 요청이 실패한 이유를 설명하는 문자열입니다. 문자열은 아래에 나열된 허용 값 중 하나입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="jwkset.md">object JWKSet</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">JSON 웹 키의 집합입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="tokenresponse.md">object TokenResponse</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">요청이 성공적으로 처리된 경우 반환되는 응답 토큰 개체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">*<a href="https://developer.apple.com/documentation/accountorganizationaldatasharing/errorresponse">View on Apple Developer</a>*</span>
